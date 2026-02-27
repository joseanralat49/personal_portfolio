import { useState } from "react";
import { FaArrowLeft, FaMobileAlt, FaRocket, FaCode, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

export default function WebDesign() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: <FaCode size={26} />,
      title: "Business Websites",
      desc: "Custom 1–5 page sites built around your brand. Clean, fast, and designed to turn visitors into customers.",
      tag: "1–5 Pages",
    },
    {
      icon: <MdDesignServices size={26} />,
      title: "Landing Pages",
      desc: "High-impact single pages crafted to capture leads, promote a product, or launch a campaign.",
      tag: "Single Page",
    },
    {
      icon: <FaMobileAlt size={26} />,
      title: "Mobile Optimization",
      desc: "Every site I build works flawlessly on phones, tablets, and desktops — no extra charge.",
      tag: "Responsive",
    },
    {
      icon: <FaRocket size={26} />,
      title: "Domain & Launch Setup",
      desc: "I handle domain registration, hosting config, and going live so you don't have to worry about a thing.",
      tag: "Full Setup",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "We Talk",
      desc: "Tell me about your business, goals, and style. A quick call or chat is all it takes to get started.",
    },
    {
      num: "02",
      title: "I Build",
      desc: "I design and develop your site with your feedback every step of the way. No surprises.",
    },
    {
      num: "03",
      title: "You Launch",
      desc: "Your site goes live. I handle the technical side — you focus on running your business.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$299",
      desc: "Perfect for getting online fast.",
      features: [
        "1–2 page website",
        "Mobile responsive",
        "Contact section",
        "Basic SEO setup",
        "1 round of revisions",
      ],
      highlight: false,
    },
    {
      name: "Business",
      price: "$599",
      desc: "Everything you need to grow.",
      features: [
        "Up to 5 pages",
        "Mobile responsive",
        "Contact form",
        "Domain + hosting setup",
        "SEO optimized",
        "3 rounds of revisions",
      ],
      highlight: true,
    },
    {
      name: "Custom",
      price: "Let's talk",
      desc: "For unique or larger projects.",
      features: [
        "Fully custom scope",
        "Any number of pages",
        "Advanced integrations",
        "Ongoing support",
        "Flexible pricing",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen text-white bg-tech overflow-x-hidden">

      {/* ── Header ── */}
      <header className="fixed top-0 z-50 w-full bg-black/80 border-b border-white/10 backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-500 transition-colors"
          >
            <FaArrowLeft size={13} />
            Back to Portfolio
          </a>
          <span className="text-white text-sm font-semibold">Web Design Services</span>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="pt-44 pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-5">
            Web Design — Josean Ralat
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
            Your Business,
            <br />
            <span className="text-green-500">Online & Ready.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
            I build modern, fast, mobile-friendly websites for local businesses — from
            design to deployment. No templates. No headaches.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:joseanralat49@gmail.com"
              className="px-7 py-3 rounded-full bg-green-500 text-black font-semibold text-sm hover:bg-green-400 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="https://wa.me/17874206440"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-full border border-zinc-700 text-white text-sm font-medium hover:border-green-500 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={15} />
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">What I Build</h2>
          <p className="text-gray-400 mb-10">
            Services tailored to help your business stand out online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700 cursor-default"
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`mb-4 transition-colors duration-300 ${
                    hoveredService === i ? "text-green-500" : "text-zinc-500"
                  }`}
                >
                  {s.icon}
                </div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs bg-zinc-800 text-gray-400">
                    {s.tag}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">How It Works</h2>
          <p className="text-gray-400 mb-14">
            Simple, fast, and stress-free from start to finish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <span className="text-8xl font-bold text-zinc-800/50 select-none absolute -top-5 -left-1 leading-none">
                  {step.num}
                </span>
                <div className="relative pt-10 pl-1">
                  <div className="w-8 h-px bg-green-500 mb-5" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Pricing</h2>
          <p className="text-gray-400 mb-12">Transparent pricing, no hidden fees.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 transition-all duration-300 flex flex-col ${
                  plan.highlight
                    ? "border-green-500 bg-green-500/5"
                    : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900"
                }`}
              >
                {plan.highlight && (
                  <span className="self-start px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-5">{plan.desc}</p>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <FaCheckCircle size={12} className="text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:joseanralat49@gmail.com"
                  className={`block text-center py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-green-500 text-black hover:bg-green-400"
                      : "border border-zinc-700 text-white hover:border-green-500 hover:text-green-500"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Let's build something great together. Reach out and get a free quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:joseanralat49@gmail.com"
                className="flex items-center gap-2 px-7 py-3 rounded-full bg-green-500 text-black font-semibold text-sm hover:bg-green-400 transition-colors"
              >
                <IoIosMail size={17} />
                joseanralat49@gmail.com
              </a>
              <a
                href="https://wa.me/17874206440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-full border border-zinc-700 text-white text-sm font-medium hover:border-green-500 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={15} />
                +1 (787) 420-6440
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-gray-500 text-sm">© 2025 Josean Ralat</span>
          <a
            href="/"
            className="text-gray-500 text-sm hover:text-green-500 transition-colors"
          >
            Back to Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}
