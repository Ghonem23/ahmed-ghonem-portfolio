import Image from "next/image";
import { personalInfo, services, qaCaseStudies, devFoundations } from "@/data/portfolio";
import { CheckCircle2, ShieldCheck, Terminal, Send, Mail, Clock, FileText, ArrowRight, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-lg tracking-tight text-white flex items-center gap-2">
            Ahmed Ghonem<span className="text-blue-500 font-mono text-xs px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">QA / SDET</span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#qa-work" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#engineering" className="hover:text-white transition-colors">Technical Edge</a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-sm"
            >
              Get a QA Audit
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Junior QA Engineer @ Sarmady (Vodafone Company) • B.Sc. Software Engineering</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.15]">
              Ship clean software with a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-200">
                code-aware QA engineer.
              </span>
            </h1>
            
            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              I help product teams and technical founders catch race conditions, broken API contracts, and critical defects before users ever do. I validate systems down to the database and network layer.
            </p>

            {/* Quick Highlights Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl text-xs text-slate-400 border-y border-slate-800/80 py-4">
              <div>
                <span className="block text-white font-semibold">48h Sprint Audits</span>
                <span>Fast MVP sanity checks</span>
              </div>
              <div>
                <span className="block text-white font-semibold">Deep API Validation</span>
                <span>Postman & Newman suites</span>
              </div>
              <div>
                <span className="block text-white font-semibold">Zero Ambiguity</span>
                <span>Actionable bug logs + logs</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 text-sm"
              >
                Hire for a QA Sprint <Send className="w-4 h-4" />
              </a>
              <a
                href="#qa-work"
                className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 font-medium hover:bg-slate-800 transition-colors text-sm"
              >
                View Sample Defect Logs
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl shadow-blue-500/10">
              <Image
                src={personalInfo.image}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 border-t border-slate-900 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Freelance Services</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Testing Solutions Ready to Integrate
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-right mt-2 sm:mt-0">
              Clear scope • Fixed sprint deliverables • Continuous communication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <Clock className="w-4 h-4 text-slate-500" />
                  </div>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-5 space-y-2.5">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Client Deliverables
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {service.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Case Studies & Deliverable Evidence */}
      <section id="qa-work" className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Sample Work & Methodology</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Real Test Artifacts & Defect Reports
          </h2>
          <p className="text-slate-400 mt-2 text-sm max-w-xl">
            The exact structure and technical rigor delivered on every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {qaCaseStudies.map((study, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-blue-400">{study.category}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <FileText className="w-3.5 h-3.5" /> Case Study
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{study.title}</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{study.overview}</p>
              
              <div className="mt-4 space-y-2">
                {study.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {study.artifacts.map((artifact, aIdx) => (
                  <span
                    key={aIdx}
                    className="text-xs font-medium px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/40 text-blue-300"
                  >
                    {artifact}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Defect Preview Box */}
        <div className="mt-10 p-6 rounded-xl border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
            <span className="text-red-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500"></span> SAMPLE DEFECT LOG: [HIGH] Stock Allocation Race Condition
            </span>
            <span className="text-slate-500">Format: Production Bug Ticket</span>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
            <div>
              <p className="text-slate-500 uppercase text-[10px]">Steps to Reproduce</p>
              <p className="mt-1">1. Dispatch parallel POST /api/v1/orders with payload quantity = remaining stock.</p>
              <p>2. Execute within 20ms delta window.</p>
              <p className="text-slate-500 uppercase text-[10px] mt-3">Expected Result</p>
              <p className="mt-1">HTTP 409 Conflict on second call; stock locked via transactional isolation.</p>
            </div>
            <div>
              <p className="text-slate-500 uppercase text-[10px]">Actual Result & Logs</p>
              <p className="mt-1 text-red-300">Both requests return 200 OK. Database inventory column decrements to -1.</p>
              <p className="text-slate-500 uppercase text-[10px] mt-3">Root Cause Trace</p>
              <p className="mt-1 text-slate-400">Missing optimistic lock annotation (@Version) in order management entity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Backend & Technical Edge */}
      <section id="engineering" className="py-20 border-t border-slate-900 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Architectural Literacy</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Why a Software Engineering Degree Matters for QA
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xl">
              I don't just click buttons. Having built REST APIs and databases, I reproduce bugs with exact server state and payload details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {devFoundations.map((dev, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  <Terminal className="w-4 h-4" />
                  <span>{dev.stack}</span>
                </div>
                <h3 className="text-base font-medium text-white mt-2">{dev.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{dev.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact / Client Onboarding Section */}
      <section id="contact" className="py-24 max-w-6xl mx-auto px-6 border-t border-slate-900">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Direct Inquiries</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Ready to Test Your Release?</h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Send me a note with your staging URL, API spec, or release deadline. I will reply within 24 hours with an actionable test scope and availability.
          </p>

          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}?subject=QA%20Testing%20Inquiry%20-%20Project%20Review`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white font-medium block">Email</span>
                  <span className="text-slate-400 text-xs">{personalInfo.email}</span>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white font-medium block">Phone / WhatsApp</span>
                  <span className="text-slate-400 text-xs">{personalInfo.phone}</span>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900"
              >
                <div className="p-2 rounded-lg bg-slate-800 text-blue-400 shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                </div>
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900"
              >
                <div className="p-2 rounded-lg bg-slate-800 text-blue-400 shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                </div>
                <span>Technical Repositories</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Ahmed Ghonem. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}