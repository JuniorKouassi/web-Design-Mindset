import React, { useState, useEffect } from "react";
import TubesBackground from "./TubesBackground";
import {
  ArrowRight,
  Play,
  Target,
  Crown,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu
} from "lucide-react";

const CLIENTS = [
  { name: "CryptoPromo", img: "img/cryptopromo.jpg" },
  { name: "Pinksale",    img: "img/Pinksale-Finance.webp" },
  { name: "Acme Corp",   icon: Hexagon  },
  { name: "Quantum",     icon: Triangle },
  { name: "Command+Z",   icon: Command  },
  { name: "Phantom",     icon: Ghost    },
  { name: "Ruby",        icon: Gem      },
  { name: "Chipset",     icon: Cpu      },
];

const T = {
  en: {
    heading1:     "Crafting Digital",
    headingAccent:"Experiences",
    heading3:     "That Matter",
    desc:         "We design interfaces that combine beauty with functionality, creating seamless experiences that users love and businesses thrive on.",
    cta1:         "View Portfolio",
    cta2:         "Start a Project",
    delivered:    "Projects Delivered",
    satisfaction: "Client Satisfaction",
    years:        "Years",
    support:      "Support",
    quality:      "Quality",
    active:       "ACTIVE",
    premium:      "PREMIUM",
    trusted:      "Trusted by Industry Leaders",
  },
  fr: {
    heading1:     "Des Expériences",
    headingAccent:"Digitales",
    heading3:     "Qui Marquent",
    desc:         "Nous concevons des interfaces alliant beauté et fonctionnalité, créant des expériences fluides que les utilisateurs adorent et qui font prospérer les entreprises.",
    cta1:         "Voir le Portfolio",
    cta2:         "Démarrer un Projet",
    delivered:    "Projets Livrés",
    satisfaction: "Satisfaction Client",
    years:        "Ans",
    support:      "Support",
    quality:      "Qualité",
    active:       "ACTIF",
    premium:      "PREMIUM",
    trusted:      "Approuvé par des Leaders",
  },
};

const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span
      className="text-[10px] uppercase tracking-wider font-medium sm:text-xs"
      style={{ color: "rgba(168,192,224,0.65)" }}
    >
      {label}
    </span>
  </div>
);

export default function HeroSection() {
  const [lang, setLang] = useState(
    () => (typeof localStorage !== "undefined" && localStorage.getItem("wdm-lang")) || "en"
  );

  useEffect(() => {
    const handler = (e) => setLang(e.detail.lang);
    window.addEventListener("wdm-lang-change", handler);
    return () => window.removeEventListener("wdm-lang-change", handler);
  }, []);

  const tx = T[lang] || T.en;

  return (
    <TubesBackground>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-fade-in  { animation: fadeSlideIn 0.8s ease-out forwards; opacity: 0; }
        .animate-marquee  { animation: marquee 40s linear infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(107,142,196,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">

            {/* Heading */}
            <h1
              className="animate-fade-in delay-100 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]"
              style={{
                color: "#f0f4fa",
                maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              {tx.heading1}<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #c8d8ea 50%, #6b8ec4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {tx.headingAccent}
              </span>
              <br />
              {tx.heading3}
            </h1>

            {/* Description */}
            <p
              className="animate-fade-in delay-200 max-w-xl text-lg leading-relaxed"
              style={{ color: "rgba(168,192,224,0.80)" }}
            >
              {tx.desc}
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-300 flex flex-col sm:flex-row gap-4">
              <a
                href="portfolio.html"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#6b8ec4", color: "#0d1b3a" }}
              >
                {tx.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="contact.html"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:scale-[1.02]"
                style={{
                  border: "1px solid rgba(107,142,196,0.30)",
                  background: "rgba(13,27,58,0.40)",
                  color: "#a8c0e0",
                }}
              >
                <Play className="w-4 h-4 fill-current" />
                {tx.cta2}
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">

            {/* Stats Card */}
            <div
              className="animate-fade-in delay-400 relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
              style={{
                background: "linear-gradient(145deg, rgba(13,27,58,0.92) 0%, rgba(26,47,94,0.88) 100%)",
                border: "1px solid rgba(107,142,196,0.45)",
                boxShadow: "0 0 0 1px rgba(107,142,196,0.2), 0 24px 56px rgba(13,27,58,0.5)",
              }}
            >
              <div
                className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(107,142,196,0.08)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background: "rgba(107,142,196,0.15)",
                      border: "1px solid rgba(107,142,196,0.30)",
                    }}
                  >
                    <Target className="h-6 w-6" style={{ color: "#6b8ec4" }} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">50+</div>
                    <div style={{ color: "rgba(168,192,224,0.70)", fontSize: "0.875rem" }}>
                      {tx.delivered}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "rgba(168,192,224,0.70)" }}>{tx.satisfaction}</span>
                    <span className="text-white font-medium">98%</span>
                  </div>
                  <div
                    className="h-2 w-full overflow-hidden rounded-full"
                    style={{ background: "rgba(13,27,58,0.60)" }}
                  >
                    <div
                      className="h-full w-[98%] rounded-full"
                      style={{ background: "linear-gradient(to right, #6b8ec4, #a8c0e0)" }}
                    />
                  </div>
                </div>

                <div className="h-px w-full mb-6" style={{ background: "rgba(107,142,196,0.18)" }} />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="5+" label={tx.years} />
                  <div className="w-px h-full mx-auto" style={{ background: "rgba(107,142,196,0.18)" }} />
                  <StatItem value="24/7" label={tx.support} />
                  <div className="w-px h-full mx-auto" style={{ background: "rgba(107,142,196,0.18)" }} />
                  <StatItem value="100%" label={tx.quality} />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium tracking-wide"
                    style={{
                      border: "1px solid rgba(107,142,196,0.25)",
                      background: "rgba(13,27,58,0.50)",
                      color: "#a8c0e0",
                    }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ background: "#4ade80" }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ background: "#22c55e" }}
                      />
                    </span>
                    {tx.active}
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium tracking-wide"
                    style={{
                      border: "1px solid rgba(107,142,196,0.25)",
                      background: "rgba(13,27,58,0.50)",
                      color: "#a8c0e0",
                    }}
                  >
                    <Crown className="w-3 h-3" style={{ color: "#6b8ec4" }} />
                    {tx.premium}
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div
              className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl py-8 backdrop-blur-xl"
              style={{
                background: "linear-gradient(145deg, rgba(13,27,58,0.88) 0%, rgba(26,47,94,0.82) 100%)",
                border: "1px solid rgba(107,142,196,0.35)",
              }}
            >
              <h3
                className="mb-6 px-8 text-sm font-medium"
                style={{ color: "rgba(168,192,224,0.70)" }}
              >
                {tx.trusted}
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 transition-all hover:scale-105 cursor-default"
                      style={{ opacity: 0.5 }}
                      onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                      onMouseLeave={e => e.currentTarget.style.opacity = "0.5"}
                    >
                      {client.img ? (
                        <img
                          src={client.img}
                          alt={client.name}
                          style={{
                            width: "28px", height: "28px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <client.icon className="h-6 w-6 fill-current" style={{ color: "#6b8ec4" }} />
                      )}
                      <span className="text-lg font-bold tracking-tight" style={{ color: "#a8c0e0" }}>
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </TubesBackground>
  );
}
