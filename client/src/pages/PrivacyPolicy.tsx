import { ArrowLeft, ArrowUpRight, Check, Mail, MapPin, Phone, Shield } from "lucide-react";
import { DocumentMeta } from "../components/DocumentMeta";

export default function PrivacyPolicy() {
  return (
    <div className="site-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <DocumentMeta
        title="Privacy Policy | GULF ORIENT Electromechanical Contracting LLC"
        description="Privacy policy and data protection practices of GULF ORIENT Electromechanical Contracting LLC in the United Arab Emirates."
        canonical="https://gulforientec.ae/privacy-policy"
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
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a className="text-link" href="/" style={{ fontSize: "11px" }}>
              <ArrowLeft size={14} /> Back to Home
            </a>
            <a className="button button--small button--header" href="/#contact">
              Request a quote <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "60px 0 100px" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* Header intro */}
          <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: "36px", marginBottom: "40px" }}>
            <span className="eyebrow">
              <Shield size={14} /> Legal &amp; Compliance
            </span>
            <h1
              style={{
                font: "700 clamp(2.4rem, 5vw, 3.6rem)/1.05 'Space Grotesk', sans-serif",
                color: "var(--navy)",
                margin: "16px 0 12px",
                letterSpacing: "-0.04em",
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "14px", margin: 0 }}>
              Last updated: October 18, 2026 · Governing jurisdiction: United Arab Emirates
            </p>
          </div>

          {/* Body Content */}
          <div style={{ color: "var(--ink-soft)", fontSize: "15px", lineHeight: "1.8" }}>
            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  font: "700 22px/1.2 'Space Grotesk', sans-serif",
                  color: "var(--navy)",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                1. Introduction
              </h2>
              <p>
                <strong>GULF ORIENT Electromechanical Contracting LLC</strong> ("we", "us", or "our") is committed to
                protecting the personal privacy and data of our website visitors, clients, partners, and contractors in
                accordance with the applicable data protection regulations of the United Arab Emirates, including{" "}
                <strong>UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL)</strong>.
              </p>
              <p>
                This Privacy Policy outlines how we collect, handle, store, and protect information submitted to us
                through our website, email, phone, or direct communications.
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  font: "700 22px/1.2 'Space Grotesk', sans-serif",
                  color: "var(--navy)",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                2. Information We Collect
              </h2>
              <p>We only collect information necessary to provide our electromechanical and contracting services:</p>
              <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
                <li>
                  <strong>Contact Information:</strong> Full name, company name, phone number, email address, and
                  business location.
                </li>
                <li>
                  <strong>Project Details:</strong> Architectural drawings, scope requirements, site location,
                  specifications, and quotation requests submitted through our contact channels.
                </li>
                <li>
                  <strong>Technical Usage Data:</strong> Anonymized browser type, device information, and interaction
                  metrics to maintain site security and optimize performance.
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  font: "700 22px/1.2 'Space Grotesk', sans-serif",
                  color: "var(--navy)",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                3. Purpose of Processing
              </h2>
              <p>Your information is used strictly for legitimate contracting business purposes:</p>
              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  background: "var(--mist)",
                  padding: "20px",
                  borderRadius: "4px",
                  border: "1px solid var(--line)",
                  margin: "16px 0",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                  <Check size={16} color="var(--marine)" /> Preparing and delivering accurate project quotations
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                  <Check size={16} color="var(--marine)" /> Scheduling technical site assessments and scoping visits
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                  <Check size={16} color="var(--marine)" /> Executing electrical, electromechanical, HVAC, and interior
                  works
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                  <Check size={16} color="var(--marine)" /> Responding to WhatsApp, telephone, and email inquiries
                </span>
              </div>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  font: "700 22px/1.2 'Space Grotesk', sans-serif",
                  color: "var(--navy)",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                4. Data Protection &amp; Confidentiality
              </h2>
              <p>
                We maintain appropriate administrative and technical safeguards to protect client records and project
                data against unauthorized access, loss, or disclosure. We do not sell, rent, or trade your personal or
                commercial data with any third parties for marketing purposes.
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  font: "700 22px/1.2 'Space Grotesk', sans-serif",
                  color: "var(--navy)",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                5. Cookies &amp; Analytics
              </h2>
              <p>
                Our website utilizes minimal technical cookies essential for site functionality, page load
                optimization, and anonymous visitor traffic analysis to enhance user experience. You can choose to
                disable cookies in your browser settings without affecting core browsing capabilities.
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2
                style={{
                  font: "700 22px/1.2 'Space Grotesk', sans-serif",
                  color: "var(--navy)",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                6. Your Rights
              </h2>
              <p>
                Under UAE data protection laws, you have the right to request access to the personal data we hold about
                you, request corrections to inaccurate information, or request the deletion of your contact records
                subject to legal and contractual accounting obligations.
              </p>
            </section>

            <section
              style={{
                background: "var(--navy)",
                color: "var(--white)",
                padding: "32px",
                borderRadius: "4px",
                marginTop: "48px",
              }}
            >
              <h3
                style={{
                  font: "700 20px/1.2 'Space Grotesk', sans-serif",
                  color: "#6ee0ef",
                  margin: "0 0 12px",
                }}
              >
                7. Contact Our Data Privacy Officer
              </h3>
              <p style={{ color: "#c5d5e9", fontSize: "14px", margin: "0 0 20px" }}>
                If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact
                us directly:
              </p>
              <div style={{ display: "grid", gap: "10px", fontSize: "14px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ffffff" }}>
                  <MapPin size={16} color="#6ee0ef" /> Abu Dhabi, United Arab Emirates
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ffffff" }}>
                  <Mail size={16} color="#6ee0ef" /> info@gulforientec.ae
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ffffff" }}>
                  <Phone size={16} color="#6ee0ef" /> +971 55 830 8857 / +971 55 311 7251
                </span>
              </div>
            </section>
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
            <a href="/#services" style={{ color: "#77d9ea", marginRight: "16px" }}>
              Services
            </a>
            <a href="/#contact" style={{ color: "#77d9ea" }}>
              Contact
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
