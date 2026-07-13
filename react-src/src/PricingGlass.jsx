import React from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { Check } from "lucide-react";

const NOISE = 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")';

const TELEGRAM_LINKS = {
  "Package 1": "https://t.me/terryjunior?text=Hi%2C%20I'm%20interested%20in%20Press%20Release%20Package%201%20(%24900)",
  "Package 2": "https://t.me/terryjunior?text=Hi%2C%20I'm%20interested%20in%20Press%20Release%20Package%202%20(%24600)",
  "Package 3": "https://t.me/terryjunior?text=Hi%2C%20I'm%20interested%20in%20Press%20Release%20Package%203%20(%24300)",
};

const childVariant = {
  hidden:  { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 25 } },
};

function PricingCard({ tier }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isPopular = tier.isPopular;
  const telegramUrl = TELEGRAM_LINKS[tier.name] || "#";

  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0,  scale: 1,
          transition: { type: "spring", stiffness: 300, damping: 24,
            staggerChildren: 0.08, delayChildren: 0.1 } },
      }}
      onMouseMove={handleMouseMove}
      className={`group relative w-full overflow-hidden rounded-[32px] flex flex-col transition-all duration-500 ${
        isPopular
          ? "border shadow-[inset_0_1px_1px_rgba(107,142,196,0.4),0_32px_64px_-12px_rgba(13,27,58,0.8),0_0_80px_rgba(107,142,196,0.1)] md:-translate-y-4"
          : "border shadow-[inset_0_1px_1px_rgba(107,142,196,0.15),0_32px_64px_-12px_rgba(13,27,58,0.6)]"
      }`}
      style={{
        backdropFilter: "blur(24px) saturate(180%) brightness(110%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%) brightness(110%)",
        background: isPopular
          ? "linear-gradient(145deg, rgba(26,47,94,0.70) 0%, rgba(13,27,58,0.85) 100%)"
          : "linear-gradient(145deg, rgba(13,27,58,0.55) 0%, rgba(6,17,31,0.70) 100%)",
        borderColor: isPopular
          ? "rgba(107,142,196,0.45)"
          : "rgba(107,142,196,0.15)",
        boxShadow: isPopular
          ? "inset 0 1px 1px rgba(107,142,196,0.4), 0 0 0 1px rgba(107,142,196,0.2), 0 32px 64px -12px rgba(13,27,58,0.8)"
          : "inset 0 1px 1px rgba(107,142,196,0.12), 0 32px 64px -12px rgba(13,27,58,0.5)",
      }}
    >
      {/* Mouse-follow glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(500px at ${mouseX}px ${mouseY}px, rgba(107,142,196,0.18), transparent)`,
        }}
      />

      {/* Spinning border for popular card */}
      {isPopular && (
        <div
          className="absolute inset-0 z-0 rounded-[32px] pointer-events-none p-px"
          style={{
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        >
          <div
            className="absolute -inset-full animate-[spin_4s_linear_infinite]"
            style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(107,142,196,0.9) 100%)" }}
          />
        </div>
      )}

      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: NOISE }}
      />

      {/* Popular badge */}
      {isPopular && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-b-xl"
          style={{
            background: "rgba(107,142,196,0.20)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(107,142,196,0.30)",
            borderTop: "none",
            color: "#a8c0e0",
          }}
        >
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex flex-col p-8 md:p-10 flex-1 pointer-events-none">
        {/* Name */}
        <motion.h3
          variants={childVariant}
          className="text-xl font-semibold tracking-wide"
          style={{ color: "#a8c0e0" }}
        >
          {tier.name}
        </motion.h3>

        {/* Price */}
        <motion.div variants={childVariant} className="flex items-baseline gap-1 mt-4 mb-2">
          <span className="text-2xl font-medium" style={{ color: "rgba(168,192,224,0.5)" }}>$</span>
          <span
            className="text-[60px] font-bold tracking-tighter leading-none"
            style={{ color: "#f0f4fa" }}
          >
            {tier.price}
          </span>
          <span className="text-lg font-medium ml-1" style={{ color: "rgba(168,192,224,0.5)" }}>
            one-time
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={childVariant}
          className="text-sm leading-relaxed mb-8 min-h-[40px]"
          style={{ color: "rgba(168,192,224,0.55)" }}
        >
          {tier.description}
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={childVariant}
          className="w-full h-px mb-8"
          style={{ background: "rgba(107,142,196,0.18)" }}
        />

        {/* Features */}
        <div className="flex flex-col gap-4 mb-10 flex-1">
          {tier.features.map((feat, i) => (
            <motion.div key={i} variants={childVariant} className="flex items-start gap-3">
              <div
                className="shrink-0 flex items-center justify-center w-5 h-5 mt-0.5 rounded-full"
                style={{
                  background: "rgba(107,142,196,0.15)",
                  border: "1px solid rgba(107,142,196,0.30)",
                  boxShadow: "inset 0 1px 1px rgba(107,142,196,0.2)",
                }}
              >
                <Check className="w-3 h-3" strokeWidth={3} style={{ color: "#6b8ec4" }} />
              </div>
              <span className="font-medium text-[14px] leading-tight" style={{ color: "rgba(220,232,248,0.75)" }}>
                {feat}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={childVariant} className="pointer-events-auto">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener"
            className="block w-full text-center py-4 rounded-[16px] font-semibold text-[15px] transition-all duration-300 hover:scale-[1.02]"
            style={
              isPopular
                ? {
                    background: "#6b8ec4",
                    color: "#0d1b3a",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25)",
                  }
                : {
                    background: "rgba(107,142,196,0.12)",
                    color: "#a8c0e0",
                    border: "1px solid rgba(107,142,196,0.25)",
                    boxShadow: "inset 0 1px 1px rgba(107,142,196,0.12)",
                  }
            }
          >
            Order Now
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

const TIERS = [
  {
    name: "Package 1",
    price: "900",
    description: "800+ media outlets. Maximum reach for your brand.",
    isPopular: true,
    features: [
      "Article writing included",
      "Globenewswire",
      "Streetinsider",
      "AP News",
      "Business Insider",
      "Benzinga",
      "CoinMarketCap",
      "Binance Square",
      "X Article",
      "+ 800 other sites",
      "Full coverage report",
    ],
  },
  {
    name: "Package 2",
    price: "600",
    description: "350+ media outlets. Strong coverage across finance & crypto.",
    isPopular: false,
    features: [
      "Article writing included",
      "Streetinsider",
      "Coinchapter",
      "Digital Journal",
      "Coindaily",
      "Binance Square",
      "CoinMarketCap",
      "+ 350 other sites",
    ],
  },
  {
    name: "Package 3",
    price: "300",
    description: "Crypto essentials. The perfect entry point.",
    isPopular: false,
    features: [
      "Article writing included",
      "CoinMarketCap",
      "Binance Square",
      "X Article",
    ],
  },
];

export default function PricingGlass() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      className="w-full flex flex-col items-center justify-center px-4 py-16 gap-12 relative"
    >
      {/* Background glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(107,142,196,0.06)", filter: "blur(120px)" }}
      />

      {/* Header */}
      <div className="text-center space-y-4 px-4 relative z-10">
        <motion.p
          variants={childVariant}
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#6b8ec4" }}
        >
          Pricing
        </motion.p>
        <motion.h2
          variants={childVariant}
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: "#f0f4fa" }}
        >
          Choose your <em style={{ fontStyle: "italic", color: "#6b8ec4" }}>package</em>
        </motion.h2>
        <motion.p
          variants={childVariant}
          className="text-lg md:text-xl max-w-2xl mx-auto"
          style={{ color: "rgba(168,192,224,0.60)" }}
        >
          Every package includes professional article writing. Delivery within 1–2 business days. No hidden fees.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch z-10 max-w-6xl mx-auto">
        {TIERS.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>

    </motion.div>
  );
}
