import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  Construction,
  Factory,
  Hammer,
  HardHat,
  Home as HomeIcon,
  Layers,
  LayoutGrid,
  Lightbulb,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  MessageSquare,
  Paintbrush,
  PanelsTopLeft,
  Phone,
  Ruler,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Store,
  Utensils,
  Wrench,
  X,
  Zap,
  AirVent
} from "lucide-react";

const asset = (path: string) => `/images/${path}`;

const siteConfig = {
  name: "GULF ORIENT Electromechanical Contracting LLC",
  shortName: "GULF ORIENT",
  tagline: "Electromechanical Contracting · UAE",
  whatsappNumber: "+971558308857",
  contact: {
    address: "Abu Dhabi, UAE.",
    phone: "+971558308857,+971553117251",
    email: "info@gulforientec.ae",
    hours: "9 AM to 6 PM",
  },
};

const imagePaths = {
  hero: asset("construction-site.jpg"),
  electrical: asset("electrical-installation.jpg"),
  ceiling: asset("ceiling-installation.jpg"),
  office: asset("office-interior.jpg"),
  detail: asset("electrical-detail.jpg"),
  finishing: asset("residential-finishing.jpg")
};

type ProjectCategory = "All" | "Electrical" | "Electromechanical" | "Interior" | "Fit-Out" | "Maintenance";

type Project = {
  title: string;
  location: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  image: string;
  accent: string;
};

const services: { icon: LucideIcon; number: string; title: string; description: string }[] = [
  { icon: Zap, number: "01", title: "Electrical Works", description: "Installation, wiring, lighting and power distribution for dependable building systems." },
  { icon: Settings, number: "02", title: "Electromechanical Works", description: "Coordinated electromechanical installation that keeps building services working together." },
  { icon: AirVent, number: "03", title: "AC Installation & Services", description: "Complete air conditioning solutions for residential and commercial properties, covering split ACs, package units, central AC systems and chillers." },
  { icon: PanelsTopLeft, number: "04", title: "Gypsum Works", description: "Walls, ceilings, bulkheads and architectural details shaped for the space." },
  { icon: Layers, number: "05", title: "False Ceiling Works", description: "Clean, precise ceiling systems for commercial and residential environments." },
  { icon: LayoutGrid, number: "06", title: "Flooring & Tiling", description: "Aligned, durable floor and tile finishes with close attention to the final detail." },
  // { icon: Paintbrush, number: "07", title: "Painting & Finishing", description: "Surface preparation, painting and finishing work that completes the environment." },
  { icon: SlidersHorizontal, number: "07", title: "Partition Works", description: "Practical partition solutions for offices, retail, commercial and residential spaces." },
  { icon: Wrench, number: "08", title: "Maintenance & General Contracting", description: "Responsive repair, improvement, maintenance and general contracting support." },
];

const reasons = [
  { icon: ShieldCheck, title: "Quality workmanship", description: "Attention to workmanship, materials and finishing details at every stage." },
  { icon: Compass, title: "Practical solutions", description: "Scope-led decisions shaped around site conditions and intended use." },
  { icon: Settings, title: "Coordinated execution", description: "Multiple work scopes kept aligned so the project can keep moving." },
  { icon: MessageSquare, title: "Clear communication", description: "Professional communication from first brief through final handover." },
  { icon: Wrench, title: "Reliable support", description: "A practical partner for maintenance, improvements and future requirements." },
];

const industries: { icon: LucideIcon; title: string }[] = [
  { icon: Building2, title: "Commercial Offices" },
  { icon: Store, title: "Retail" },
  { icon: Utensils, title: "Restaurants" },
  { icon: BriefcaseBusiness, title: "Hotels & Hospitality" },
  { icon: HomeIcon, title: "Residential Properties" },
  { icon: HardHat, title: "Villas" },
  { icon: MapPinned, title: "Property Management" },
  { icon: Factory, title: "Facility Management" },
  { icon: PanelsTopLeft, title: "Interior Fit-Out" },
  { icon: Construction, title: "Commercial Developments" },
];

const projects: Project[] = [
  { title: "Business Centre Fit-Out", location: "Dubai", category: "Fit-Out", description: "Demo / placeholder project content — replace with verified project information and photographs.", image: imagePaths.office, accent: "02 / Fit-out" },
  { title: "Electrical Installation Study", location: "UAE", category: "Electrical", description: "Demo / placeholder project content — replace with verified project information and photographs.", image: imagePaths.electrical, accent: "01 / Electrical" },
  { title: "Commercial Ceiling Works", location: "Abu Dhabi", category: "Interior", description: "Demo / placeholder project content — replace with verified project information and photographs.", image: imagePaths.ceiling, accent: "03 / Interior" },
  { title: "Site Coordination & Services", location: "Sharjah", category: "Electromechanical", description: "Demo / placeholder project content — replace with verified project information and photographs.", image: imagePaths.hero, accent: "04 / MEP" },
  { title: "Maintenance Support Scope", location: "UAE", category: "Maintenance", description: "Demo / placeholder project content — replace with verified project information and photographs.", image: imagePaths.detail, accent: "05 / Maintenance" },
  { title: "Residential Finishing Package", location: "Dubai", category: "Interior", description: "Demo / placeholder project content — replace with verified project information and photographs.", image: imagePaths.finishing, accent: "06 / Finishing" },
];

const processSteps = [
  { number: "01", icon: MessageSquare, title: "Consultation", description: "Understand the client requirements and project objectives." },
  { number: "02", icon: Ruler, title: "Site assessment", description: "Review site conditions, scope and technical requirements." },
  { number: "03", icon: ClipboardCheck, title: "Quotation & planning", description: "Define scope, materials, schedule and execution requirements." },
  { number: "04", icon: CheckCircle2, title: "Execution & handover", description: "Complete the work with coordinated execution, finishing and handover." },
];

const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"];
const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#top" className={`brand-lockup ${inverted ? "brand-lockup--inverted" : ""}`} aria-label="GULF ORIENT home">
      <img src="/images/gulf-orient-logo.png" alt="GULF ORIENT Contracting LLC" className="brand-logo"/>
      <span className="brand-name"><span>GULF ORIENT</span><small>ELECTROMECHANICAL CONTRACTING LLC</small></span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? "section-intro--light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  const filteredProjects = useMemo(
    () => activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  const goTo = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappHref = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello GULF ORIENT, I would like to enquire about your contracting services.")}`
    : "#contact";

  return (
    <div className="site-shell" id="top">
      <a
        className={`floating-whatsapp ${siteConfig.whatsappNumber ? "" : "floating-whatsapp--placeholder"}`}
        href={whatsappHref}
        aria-label={
          siteConfig.whatsappNumber
            ? "Chat with GULF ORIENT on WhatsApp"
            : "WhatsApp enquiry — number to be configured"
        }
      >
        <span className="floating-whatsapp-pulse" aria-hidden="true" />
        <span className="floating-whatsapp-copy">
          <strong>WhatsApp</strong>
          <small>
            {siteConfig.whatsappNumber
              ? "Chat with us"
              : "Number to be configured"}
          </small>
        </span>
        <MessageSquare size={19} strokeWidth={2} />
      </a>
      <header
        className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(item => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button--small button--header" href="#contact">
            Request a quote <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(open => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              <ChevronRight size={16} />
            </a>
          ))}
          <a
            className="button button--dark"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Request a quote <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div
            className="hero-media"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(7,18,46,.92) 0%, rgba(9,30,73,.78) 44%, rgba(6,15,37,.28) 100%), url(${imagePaths.hero})`,
            }}
          />
          <div className="hero-gridlines" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" />
                {siteConfig.tagline}
              </span>
              <h1>
                Built with
                <br />
                <em>precision.</em>
                <br />
                Finished with purpose.
              </h1>
              <p>
                Reliable electrical, electromechanical, fit-out and interior
                contracting solutions for commercial, residential and business
                environments across the UAE.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#contact">
                  Request a quote <ArrowUpRight size={16} />
                </a>
                <a className="text-link text-link--light" href="#services">
                  Explore our services <ArrowDownRight size={17} />
                </a>
              </div>
            </div>
            <div className="hero-aside" aria-label="Company focus">
              <div className="hero-aside-line" />
              <span>01</span>
              <p>
                One coordinated partner for the details that make a space work.
              </p>
            </div>
          </div>
          {/* <div className="hero-bottom container">
            <span>UAE-based contracting partner</span>
            <span className="hero-scroll"><span /> Scroll to explore</span>
          </div> */}
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container about-layout">
            <div className="about-visual reveal-frame">
              <img
                src={imagePaths.electrical}
                alt="Electrical installation work in progress"
              />
              <div className="image-caption">
                <span>GULF ORIENT</span>
                <span>01 / FIELD DETAIL</span>
              </div>
              <div className="about-stamp">
                {" "}
                <img
                  src="/images/gulf-orient-logo.png"
                  alt="GULF ORIENT Contracting LLC"
                  className="brand-logo-badge"
                />
                <small>DETAILS MATTER</small>
              </div>
            </div>
            <div className="about-copy">
              <SectionIntro
                eyebrow="About GULF ORIENT"
                title="Engineering the details. Delivering the complete result."
                description="GULF ORIENT provides integrated contracting and finishing services, helping clients manage multiple project requirements through coordinated professional execution."
              />
              <p className="body-copy">
                From electrical and electromechanical scopes to the final
                interior finish, we bring practical thinking and disciplined
                delivery to the work that shapes a building.
              </p>
              <div className="capability-list">
                {[
                  "HVAC & Air Conditioning",
                  "Electrical & electromechanical",
                  "Interior works & fit-out",
                  "Gypsum, ceilings & partitions",
                  "Flooring, painting & maintenance",
                ].map(item => (
                  <span key={item}>
                    <Check size={15} />
                    {item}
                  </span>
                ))}
              </div>
              <a className="text-link" href="#services">
                See our capabilities <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="services-section section-pad section-tint"
          id="services"
        >
          <div className="container">
            <div className="section-heading-row">
              <SectionIntro
                eyebrow="What we do"
                title="Complete contracting solutions, delivered with precision."
                description="A focused range of coordinated services for the environments where people work, live, gather and grow."
              />
              <span className="section-index">
                02 <span>/ Services</span>
              </span>
            </div>
            <div className="featured-ac">
              <div className="featured-ac-content">
                <span className="eyebrow">Featured Specialization</span>
                <h3>Air Conditioning Installation & Services</h3>
                <p>
                  From residential split ACs to commercial package units,
                  central air conditioning systems and chillers, we provide
                  installation, maintenance, repair and replacement services
                  tailored to your project's requirements.
                </p>

                <div className="featured-ac-tags">
                  <span>
                    <Check size={14} /> Residential
                  </span>
                  <span>
                    <Check size={14} /> Commercial
                  </span>
                  <span>
                    <Check size={14} /> Installation
                  </span>
                  <span>
                    <Check size={14} /> Maintenance & Repair
                  </span>
                  <span>
                    <Check size={14} /> Replacement
                  </span>
                </div>

                <a className="button button--primary" href="#contact">
                  Enquire About AC Services <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="featured-ac-systems">
                {[
                  "Split AC Systems",
                  "Package AC Units",
                  "Central AC Systems",
                  "Chillers",
                ].map((system, index) => (
                  <div className="featured-ac-system" key={system}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{system}</strong>
                    <AirVent size={19} strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
            <div className="services-grid">
              {services.map(service => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-card-top">
                      <span className="service-number">{service.number}</span>
                      <Icon size={23} strokeWidth={1.5} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="why-section section-pad section-deep">
          <div className="container">
            <div className="section-heading-row section-heading-row--light">
              <SectionIntro
                light
                eyebrow="Why GULF ORIENT"
                title="A better way to keep the work moving."
                description="Good contracting is not just about doing the work. It is about making the whole process clearer, more coordinated and more dependable."
              />
              <span className="section-index section-index--light">
                03 <span>/ our approach</span>
              </span>
            </div>
            <div className="reasons-grid">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <article className="reason-card" key={reason.title}>
                    <span className="reason-index">0{index + 1}</span>
                    <Icon size={26} strokeWidth={1.4} />
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="industries-section section-pad" id="industries">
          <div className="container industries-layout">
            <div className="industries-copy">
              <SectionIntro
                eyebrow="Sectors we serve"
                title="Built for real-world environments."
                description="Our capabilities adapt to the practical demands of commercial, residential and business spaces."
              />
              <div className="industries-note">
                <Sparkles size={18} />
                <span>Scope-led. Site-aware. Ready to coordinate.</span>
              </div>
            </div>
            <div className="industries-grid">
              {industries.map(industry => {
                const Icon = industry.icon;
                return (
                  <div className="industry-item" key={industry.title}>
                    <Icon size={19} strokeWidth={1.5} />
                    <span>{industry.title}</span>
                    <ArrowUpRight size={14} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="projects-section section-pad section-tint"
          id="projects"
        >
          <div className="container">
            <div className="section-heading-row">
            <SectionIntro
            eyebrow="Our Projects"
            title="Practical solutions. Quality in every detail."
            description="Explore our work across electrical, electromechanical, air conditioning and interior contracting. Every project reflects our commitment to quality workmanship, practical solutions and attention to detail."
            />
              <span className="section-index">
                04 <span>/ portfolio</span>
              </span>
            </div>
            <div
              className="project-toolbar"
              role="group"
              aria-label="Filter projects by category"
            >
              {(
                [
                  "All",
                  "Electrical",
                  "Electromechanical",
                  "Interior",
                  "Fit-Out",
                  "Maintenance",
                ] as ProjectCategory[]
              ).map(category => (
                <button
                  key={category}
                  type="button"
                  className={`filter-button ${activeCategory === category ? "filter-button--active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <article
                  className="project-card"
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={event => {
                    if (event.key === "Enter" || event.key === " ")
                      setSelectedProject(project);
                  }}
                >
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={`${project.title} demo placeholder`}
                    />
                    <span className="project-category">{project.accent}</span>
                    <span className="project-open">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                  <div className="project-card-body">
                    <div>
                      <span className="project-location">
                        <MapPin size={13} /> {project.location}
                      </span>
                      <h3>{project.title}</h3>
                    </div>
                    <ChevronRight size={17} />
                  </div>
                </article>
              ))}
            </div>
            {/* <div className="placeholder-note">
              <span className="placeholder-dot" /> Demo content.
            </div> */}
            {/* <div className="placeholder-note"><span className="placeholder-dot" /> Demo content is temporary. Replace project entries in <code>Home.tsx</code> when verified photographs and information are supplied.</div> */}
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="container">
            <div className="section-heading-row">
              <SectionIntro
                eyebrow="How we work"
                title="A clear path from first conversation to handover."
                description="A practical four-step process designed to create clarity before work begins and confidence as it progresses."
              />
              <span className="section-index">
                05 <span>/ process</span>
              </span>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article className="process-step" key={step.number}>
                    <div className="process-top">
                      <span className="process-number">{step.number}</span>
                      <Icon size={22} strokeWidth={1.4} />
                    </div>
                    <div className="process-connector" aria-hidden="true">
                      {index < processSteps.length - 1 && <span />}
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="coverage-section section-pad section-deep">
          <div className="coverage-texture" aria-hidden="true" />
          <div className="container coverage-layout">
            <div>
              <SectionIntro
                light
                eyebrow="UAE coverage"
                title="Supporting projects across the UAE."
                description="Subject to project scope and location, GULF ORIENT is positioned to support clients across all seven emirates."
              />
              <a className="text-link text-link--light" href="#contact">
                Discuss your location <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="emirates-list">
              {emirates.map((emirate, index) => (
                <div className="emirate" key={emirate}>
                  <span>0{index + 1}</span>
                  <strong>{emirate}</strong>
                  <MapPin size={15} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <span className="eyebrow">Start with a conversation</span>
              <h2>Planning your next project?</h2>
              <p>
                Tell us what you need and our team can discuss the scope,
                requirements and next steps with you.
              </p>
            </div>
            <a className="button button--primary button--large" href="#contact">
              Request a quote <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container contact-layout">
            <div className="contact-intro">
              <SectionIntro
                eyebrow="Contact GULF ORIENT"
                title="Let's discuss your project."
                description="Share a few details about your scope, location or requirements and start a direct conversation with the GULF ORIENT team."
              />
              <div className="contact-details">
                <div className="contact-detail">
                  <MapPin size={19} />
                  <div>
                    <span>Location</span>
                    <strong>{siteConfig.contact.address}</strong>
                  </div>
                </div>
                <div className="contact-detail">
                  <Phone size={19} />
                  <div>
                    <span>Phone</span>
                    <strong>{siteConfig.contact.phone}</strong>
                  </div>
                </div>
                <div className="contact-detail">
                  <Mail size={19} />
                  <div>
                    <span>Email</span>
                    <strong>{siteConfig.contact.email}</strong>
                  </div>
                </div>
                <div className="contact-detail">
                  <HardHat size={19} />
                  <div>
                    <span>Business hours</span>
                    <strong>{siteConfig.contact.hours}</strong>
                  </div>
                </div>
              </div>
              {/* <a
                className="whatsapp-link"
                href={whatsappHref}
                aria-label="WhatsApp enquiry option"
              >
                <span className="whatsapp-icon">◌</span>
                <span>
                  <strong>WhatsApp enquiry</strong>
                  <small>
                    {siteConfig.whatsappNumber
                      ? "Start a quick conversation"
                      : "Start a quick conversation"}
                  </small>
                </span>
                <ArrowUpRight size={17} />
              </a> */}
            </div>
            <div className="contact-quick-panel">
              <span className="eyebrow eyebrow--light">A direct next step</span>
              <h3>Prefer a quick conversation?</h3>
              <p>
                Use WhatsApp to share your project requirements, ask a question
                or request a quotation.
              </p>
              <a className="button button--primary" href={whatsappHref}>
                Start on WhatsApp <ArrowUpRight size={16} />
              </a>
              {/* <span className="contact-quick-note">The verified company WhatsApp number can be added in one place inside <code>siteConfig</code>.</span> */}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <BrandMark inverted />
            <p>
              Integrated electrical, electromechanical, fit-out and interior
              contracting solutions for the UAE.
            </p>
            <a className="footer-mail" href="#contact">
              <Mail size={15} />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Explore</span>
            {navItems.slice(0, 4).map(item => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <span className="footer-label">Services</span>
            {services.slice(0, 5).map(service => (
              <a key={service.title} href="#services">
                {service.title}
              </a>
            ))}
          </div>
          <div className="footer-column footer-contact">
            <span className="footer-label">Contact</span>
            <span>{siteConfig.contact.address}</span>
            <span>{siteConfig.contact.phone}</span>
            <span>{siteConfig.contact.hours}</span>
            <a className="footer-whatsapp" href={whatsappHref}>
              WhatsApp enquiry <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} GULF ORIENT Electromechanical
            Contracting LLC
          </span>
          <span>
            Professional contracting. Clear communication. No shortcuts.
          </span>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={event => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>
            <div className="modal-image">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} demo placeholder`}
              />
            </div>
            <div className="modal-content">
              <span className="project-category">{selectedProject.accent}</span>
              <span className="project-location">
                <MapPin size={13} /> {selectedProject.location}
              </span>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="modal-note">
                <Construction size={16} /> Demo Text.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
