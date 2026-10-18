import { ArrowLeft, ArrowUpRight, Home, MessageSquare, Phone } from "lucide-react";
import { DocumentMeta } from "../components/DocumentMeta";

const whatsappHref =
  "https://wa.me/971558308857?text=" +
  encodeURIComponent("Hello GULF ORIENT, I need assistance with your website.");

export default function NotFound() {
  return (
    <div className="site-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <DocumentMeta
        title="404 - Page Not Found | GULF ORIENT Electromechanical Contracting LLC"
        description="The page you requested could not be found. Return to the GULF ORIENT homepage or contact our team."
        canonical="https://gulforientec.ae/404"
      />

      {/* Header */}
      <header className="site-header site-header--scrolled" style={{ position: "relative" }}>
        <div className="container header-inner">
          <a href="/" className="brand-lockup" aria-label="GULF ORIENT home">
            <img
              src="/images/gulf-orient-logo.webp"
              alt="GULF ORIENT Contracting LLC brand logo"
              className="brand-logo"
              width="180"
              height="60"
              decoding="async"
            />
            <span className="brand-name">
              <span>GULF ORIENT</span>
              <small>ELECTROMECHANICAL CONTRACTING LLC</small>
            </span>
          </a>
          <a className="button button--small button--header" href="/#contact">
            Request a quote <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      {/* 404 Hero */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", padding: "80px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <span
              className="eyebrow"
              style={{
                background: "rgba(4, 110, 194, 0.08)",
                padding: "6px 14px",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            >
              Error 404 · Page Not Found
            </span>

            <h1
              style={{
                font: "700 clamp(4rem, 10vw, 7rem)/0.9 'Space Grotesk', sans-serif",
                color: "var(--navy)",
                margin: "18px 0 16px",
                letterSpacing: "-0.06em",
              }}
            >
              404
            </h1>

            <h2
              style={{
                font: "700 clamp(1.5rem, 3.5vw, 2.2rem)/1.2 'Space Grotesk', sans-serif",
                color: "var(--ink)",
                margin: "0 0 16px",
                letterSpacing: "-0.03em",
              }}
            >
              Looking for something that isn't here?
            </h2>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "16px",
                lineHeight: "1.7",
                marginBottom: "36px",
              }}
            >
              The page you are trying to visit might have been moved, renamed, or is temporarily unavailable. Let's get
              you back on track.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                justifyContent: "center",
                marginBottom: "48px",
              }}
            >
              <a className="button button--primary" href="/">
                <ArrowLeft size={16} /> Return to Homepage
              </a>
              <a className="button button--dark" href="/#contact">
                Contact Our Team <ArrowUpRight size={16} />
              </a>
              <a
                className="button"
                style={{ background: "#087f70", color: "#ffffff" }}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
            </div>

            {/* Quick Services navigation */}
            <div
              style={{
                padding: "28px",
                background: "var(--mist)",
                borderRadius: "6px",
                border: "1px solid var(--line)",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "var(--navy)",
                  font: "700 12px/1 'Space Grotesk', sans-serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Quick Links to Services
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "10px",
                }}
              >
                <a className="text-link" href="/#services" style={{ fontSize: "11px" }}>
                  Electrical Works <ArrowUpRight size={13} />
                </a>
                <a className="text-link" href="/#services" style={{ fontSize: "11px" }}>
                  AC &amp; HVAC Systems <ArrowUpRight size={13} />
                </a>
                <a className="text-link" href="/#services" style={{ fontSize: "11px" }}>
                  Gypsum &amp; Ceilings <ArrowUpRight size={13} />
                </a>
                <a className="text-link" href="/#services" style={{ fontSize: "11px" }}>
                  Fit-Out &amp; Partitions <ArrowUpRight size={13} />
                </a>
                <a className="text-link" href="/#projects" style={{ fontSize: "11px" }}>
                  Completed Projects <ArrowUpRight size={13} />
                </a>
                <a className="text-link" href="/privacy-policy" style={{ fontSize: "11px" }}>
                  Privacy Policy <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-bottom" style={{ borderTop: "none" }}>
          <span>© {new Date().getFullYear()} GULF ORIENT Electromechanical Contracting LLC</span>
          <span>
            <a href="/" style={{ color: "#77d9ea", marginRight: "16px" }}>
              Home
            </a>
            <a href="/privacy-policy" style={{ color: "#77d9ea" }}>
              Privacy Policy
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

