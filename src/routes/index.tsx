import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  ChevronDown,
  GraduationCap,
  Heart,
  Code2,
  Terminal,
  Palette,
  Brain,
  Sparkles,
  User,
  Phone,
  Download,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import ninjaRun from "@/assets/ninja-run.png";
import profileAsset from "@/assets/yuvraj-pareek.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Yuvraj Pareek | B.Tech CSE Student Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Yuvraj Pareek, a B.Tech CSE 1st-year student at JECRC University, from Bikaner, Rajasthan.",
      },
      { property: "og:title", content: "Yuvraj Pareek | B.Tech CSE Student Portfolio" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Yuvraj Pareek, a B.Tech CSE 1st-year student at JECRC University.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [dashing, setDashing] = useState(false);
  const [dashKey, setDashKey] = useState(0);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<{
    name?: string | undefined;
    email?: string | undefined;
    message?: string | undefined;
  }>({});

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formState.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formState.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. name@example.com).";
    }
    if (!formState.message.trim()) {
      errors.message = "Please write a message.";
    }
    return errors;
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const next = href.replace("#", "");
    if (next === activeSection || dashing) return;
    setDashing(true);
    setDashKey((k) => k + 1);
    setTimeout(() => {
      setActiveSection(next);
      window.scrollTo({ top: 0 });
    }, 550);
    setTimeout(() => setDashing(false), 1200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setFormStatus("error");
      return;
    }
    setFormStatus("success");
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setFormErrors({});
      setFormStatus("idle");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-lg font-bold tracking-tight text-navy transition-colors hover:text-sky"
          >
            Yuvraj<span className="text-sky">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sky" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <div
          className={`overflow-hidden border-t border-border/60 bg-background transition-all duration-300 md:hidden ${
            mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Home Section */}
      {activeSection === "home" && (<section
        key="home"
        id="home"
        className="section-enter pt-28 relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-sky/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1 fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-4 w-4 text-sky" />
              B.Tech CSE Student
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-navy to-sky bg-clip-text text-transparent">
                Yuvraj Pareek
              </span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A curious and motivated 1st-year Computer Science student at JECRC University,
              passionate about technology, coding, and building a strong foundation for my
              engineering journey.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                Get in Touch
                <Send className="h-4 w-4" />
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#about");
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
              >
                Know More
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                <MapPin className="h-3.5 w-3.5 text-sky" />
                Bikaner, Rajasthan
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                <GraduationCap className="h-3.5 w-3.5 text-sky" />
                JECRC University
              </span>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 fade-in-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-sky/30 to-primary/20 blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-card bg-gradient-to-br from-secondary to-background shadow-2xl shadow-primary/10 sm:h-80 sm:w-80">
                <img
                  src={profileAsset.url}
                  alt="Yuvraj Pareek"
                  className="h-full w-full object-cover object-[center_25%]"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full bg-card p-3 shadow-lg">
                <Code2 className="h-6 w-6 text-sky" />
              </div>
            </div>
          </div>
        </div>
      </section>)}

      {/* About Section */}
      {activeSection === "about" && (<section
        key="about"
        id="about"
        className="section-enter pt-28 relative px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center fade-in-up">
            <span className="text-sm font-semibold uppercase tracking-wider text-sky">About Me</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Education, Interests & Journey
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* About Text */}
            <div className="fade-in-up delay-100 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10">
                <User className="h-6 w-6 text-sky" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I am Yuvraj Pareek, a first-year B.Tech Computer Science and Engineering student at
                JECRC University. Coming from the beautiful city of Bikaner, Rajasthan, I have
                always been fascinated by how technology shapes the world around us. I am eager to
                learn new concepts, explore programming, and develop skills that will help me grow
                as a future engineer.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                  <Heart className="h-3.5 w-3.5 text-sky" />
                  Coding
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                  <Heart className="h-3.5 w-3.5 text-sky" />
                  Reading Tech Blogs
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                  <Heart className="h-3.5 w-3.5 text-sky" />
                  Cricket
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                  <Heart className="h-3.5 w-3.5 text-sky" />
                  Music
                </span>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="fade-in-up delay-200 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10">
                <GraduationCap className="h-6 w-6 text-sky" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education Timeline</h3>
              <div className="relative mt-6 space-y-8 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-border">
                <div className="relative">
                  <span className="absolute -left-6 top-1 h-4 w-4 rounded-full border-2 border-background bg-sky" />
                  <h4 className="font-semibold text-foreground">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-sm text-muted-foreground">JECRC University</p>
                  <span className="mt-1 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                    2026 – Present
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute -left-6 top-1 h-4 w-4 rounded-full border-2 border-background bg-muted-foreground" />
                  <h4 className="font-semibold text-foreground">Senior Secondary Education</h4>
                  <p className="text-sm text-muted-foreground">School in Bikaner, Rajasthan</p>
                  <span className="mt-1 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)}

      {/* Skills Section */}
      {activeSection === "skills" && (<section
        key="skills"
        id="skills"
        className="section-enter pt-28 relative px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-sky/[0.03] to-transparent" />
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center fade-in-up">
            <span className="text-sm font-semibold uppercase tracking-wider text-sky">My Skills</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technologies I&apos;m Exploring
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              As a first-year student, I am continuously learning and improving. Here is where I
              currently stand with different skills — no percentages, just honest progress labels.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "C / C++", level: "Learning", icon: Terminal },
              { name: "Python", level: "Beginner", icon: Code2 },
              { name: "HTML & CSS", level: "Developing", icon: Palette },
              { name: "JavaScript", level: "Learning", icon: Code2 },
              { name: "Problem Solving", level: "Beginner", icon: Brain },
              { name: "Communication", level: "Developing", icon: Sparkles },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="fade-in-up group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky/30 hover:shadow-lg"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/10 text-sky transition-colors group-hover:bg-sky group-hover:text-white">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      skill.level === "Learning"
                        ? "bg-sky/10 text-sky"
                        : skill.level === "Beginner"
                          ? "bg-primary/10 text-primary"
                          : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{skill.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {skill.level === "Learning"
                    ? "Currently building the basics and practicing regularly."
                    : skill.level === "Beginner"
                      ? "Comfortable with fundamentals and building simple projects."
                      : "Gaining confidence and working on more complex tasks."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* Contact Section */}
      {activeSection === "contact" && (<section
        key="contact"
        id="contact"
        className="section-enter pt-28 relative px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center fade-in-up">
            <span className="text-sm font-semibold uppercase tracking-wider text-sky">Contact</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Whether you want to discuss tech, collaborate on a project, or just say hello, feel
              free to reach out. I would love to hear from you!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="fade-in-up delay-100 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
                <p className="mt-2 text-muted-foreground">
                  Here is how you can get in touch with me.
                </p>
                <div className="mt-6 space-y-4">
                  <a
                    href="mailto:pareekyuvraj977@gmail.com"
                    className="flex items-center gap-4 rounded-xl bg-secondary p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">pareekyuvraj977@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+917231885170"
                    className="flex items-center gap-4 rounded-xl bg-secondary p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">7231885170</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 rounded-xl bg-secondary p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Bikaner, Rajasthan, India</p>
                    </div>
                  </div>
                </div>

                <a
                  href="/Yuvraj_Pareek_Resume.pdf"
                  download
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <p className="mt-2 text-xs text-muted-foreground">
                  * Resume is a placeholder PDF — the final resume file will replace it.
                </p>

                <div className="mt-8">
                  <p className="text-sm font-medium text-muted-foreground">Social Profiles</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground opacity-70 transition-colors hover:bg-accent disabled:cursor-not-allowed"
                      title="LinkedIn URL to be added"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </button>
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground opacity-70 transition-colors hover:bg-accent disabled:cursor-not-allowed"
                      title="GitHub URL to be added"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    * LinkedIn and GitHub links are placeholders — URLs will be added when available.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-up delay-200 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and I will get back to you as soon as possible.
              </p>
              <form
                onSubmit={handleFormSubmit}
                noValidate
                className="mt-6 space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState({ ...formState, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                    }}
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                    className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-sky focus:ring-2 focus:ring-sky/20 ${
                      formErrors.name ? "border-red-500" : "border-input"
                    }`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => {
                      setFormState({ ...formState, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                    }}
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                    className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-sky focus:ring-2 focus:ring-sky/20 ${
                      formErrors.email ? "border-red-500" : "border-input"
                    }`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                    }}
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                    className={`mt-1.5 w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-sky focus:ring-2 focus:ring-sky/20 ${
                      formErrors.message ? "border-red-500" : "border-input"
                    }`}
                    placeholder="Write your message here..."
                  />
                  {formErrors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
                {formStatus === "success" && (
                  <p role="status" className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {formStatus === "error" && (
                  <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-500">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Your message could not be sent. Please fix the errors above and try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>)}

      {dashing && (
        <div key={dashKey} className="pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
          <div className="ninja-wipe absolute inset-0" />
          <div className="speed-lines absolute inset-0" />
          <img
            src={ninjaRun}
            alt=""
            width={1024}
            height={1024}
            className="ninja-dash absolute top-1/2 h-64 w-64 -translate-y-1/2 sm:h-80 sm:w-80"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-medium text-foreground">
            © 2026 Yuvraj Pareek | B.Tech CSE Student | JECRC University
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Built with care for a college assignment.
          </p>
        </div>
      </footer>
    </div>
  );
}
