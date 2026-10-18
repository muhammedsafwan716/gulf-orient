import { useEffect } from "react";
import { trackPageView } from "../lib/analytics";

interface DocumentMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export function DocumentMeta({
  title,
  description,
  canonical = "https://gulforientec.ae/",
  ogImage = "https://gulforientec.ae/images/og-image.jpg",
}: DocumentMetaProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", ogImage, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // 3. Update Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // 4. Track Page View
    trackPageView(window.location.pathname);
  }, [title, description, canonical, ogImage]);

  return null;
}
