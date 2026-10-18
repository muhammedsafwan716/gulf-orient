/**
 * Lightweight Analytics Module
 * Supports Google Analytics (GA4), Umami, and custom event logging.
 * Gracefully ignores tracking if no ID is configured.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    umami?: {
      track: (eventName: string, data?: Record<string, unknown>) => void;
    };
  }
}

export function initAnalytics() {
  // Initialize GA4 if ID is present
  const gaId = (import.meta.env.VITE_GA_ID as string | undefined)?.trim();
  if (gaId && typeof window !== "undefined") {
    if (!document.getElementById("ga-script")) {
      const script = document.createElement("script");
      script.id = "ga-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer?.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", gaId, { page_path: window.location.pathname });
    }
  }

  // Initialize Umami if endpoint & website ID are present
  const umamiEndpoint = (import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined)?.trim();
  const umamiWebsiteId = (import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined)?.trim();
  if (umamiEndpoint && umamiWebsiteId && typeof window !== "undefined") {
    if (!document.getElementById("umami-script")) {
      const script = document.createElement("script");
      script.id = "umami-script";
      script.defer = true;
      script.src = `${umamiEndpoint}/umami.js`;
      script.setAttribute("data-website-id", umamiWebsiteId);
      document.head.appendChild(script);
    }
  }
}

/**
 * Track custom user events (e.g. CTA clicks, quote requests, WhatsApp clicks)
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Track via GA4 if available
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Track via Umami if available
  if (window.umami && typeof window.umami.track === "function") {
    window.umami.track(eventName, params);
  }

  // Log in development for testing
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
}

/**
 * Track page views across client-side route changes
 */
export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  const gaId = (import.meta.env.VITE_GA_ID as string | undefined)?.trim();
  if (gaId && typeof window.gtag === "function") {
    window.gtag("config", gaId, { page_path: url });
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics PageView]:`, url);
  }
}
