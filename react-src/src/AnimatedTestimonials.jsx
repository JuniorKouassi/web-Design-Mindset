import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
);
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    designation: "CEO, Elevate Ventures",
    quote:
      "Web Design Mindset completely transformed our online presence. The attention to detail and the modern aesthetic they brought to our brand exceeded every expectation. Our conversions jumped 40% within the first month.",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&q=80",
  },
  {
    name: "James Okafor",
    designation: "Founder, NovaTech Solutions",
    quote:
      "The team truly understood our vision and translated it into a stunning website. The animations are fluid, the design is clean, and the site loads blazing fast. Absolutely professional from start to finish.",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&q=80",
  },
  {
    name: "Amara Diallo",
    designation: "Director, Horizon Media",
    quote:
      "Working with Web Design Mindset was a game-changer. They didn't just build a website — they crafted a digital experience that tells our story. The bilingual support was a huge bonus for our international audience.",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop&q=80",
  },
  {
    name: "Luca Bernardi",
    designation: "Product Manager, Corsa Digital",
    quote:
      "Exceptional quality and fast turnaround. The design perfectly captures our brand identity — sleek, modern, and trustworthy. I highly recommend them to any business that wants to stand out online.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80",
  },
];

function randomRotateY() {
  return Math.floor(Math.random() * 21) - 10;
}

export default function AnimatedTestimonials({ autoplay = true }) {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  return (
    <section
      style={{
        background: "var(--bg, #EBF2FA)",
        padding: "80px 0",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "56px", padding: "0 24px" }}>
        <p style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#6b8ec4",
          marginBottom: "12px",
        }}>
          Testimonials
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 5vw, 44px)",
          fontWeight: 800,
          color: "#0d1b3a",
          lineHeight: 1.15,
          margin: 0,
        }}>
          Words that <em style={{ fontStyle: "italic", color: "#6b8ec4" }}>matter</em>
        </h2>
      </div>

      {/* Card */}
      <div style={{
        maxWidth: "880px",
        margin: "0 auto",
        padding: "0 24px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}>
          {/* Image stack */}
          <div style={{ position: "relative", height: "340px" }}>
            <AnimatePresence>
              {TESTIMONIALS.map((t, index) => (
                <motion.div
                  key={t.src}
                  initial={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                  animate={{
                    opacity: index === active ? 1 : 0.6,
                    scale: index === active ? 1 : 0.92,
                    rotate: index === active ? 0 : randomRotateY(),
                    zIndex: index === active ? 999 : TESTIMONIALS.length - index,
                    y: index === active ? [0, -20, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "bottom center",
                  }}
                >
                  <img
                    src={t.src}
                    alt={t.name}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "24px",
                      display: "block",
                      userSelect: "none",
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Quote side */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "320px", padding: "16px 0" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0d1b3a", margin: "0 0 4px" }}>
                  {TESTIMONIALS[active].name}
                </h3>
                <p style={{ fontSize: "14px", color: "#6b8ec4", margin: "0 0 28px", fontWeight: 500 }}>
                  {TESTIMONIALS[active].designation}
                </p>

                {/* Star rating */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#6b8ec4">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </div>

                <motion.p style={{ fontSize: "17px", lineHeight: 1.75, color: "#4a5a78", margin: 0 }}>
                  {TESTIMONIALS[active].quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ filter: "blur(8px)", opacity: 0, y: 4 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{ duration: 0.18, ease: "easeInOut", delay: 0.015 * i }}
                      style={{ display: "inline-block" }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "40px" }}>
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(107,142,196,0.4)",
                  background: "rgba(107,142,196,0.08)",
                  color: "#0d1b3a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(107,142,196,0.2)"; e.currentTarget.style.transform = "scale(1.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(107,142,196,0.08)"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(107,142,196,0.4)",
                  background: "rgba(107,142,196,0.08)",
                  color: "#0d1b3a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(107,142,196,0.2)"; e.currentTarget.style.transform = "scale(1.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(107,142,196,0.08)"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                <ArrowRight />
              </button>

              {/* Dot indicators */}
              <div style={{ display: "flex", gap: "8px", marginLeft: "8px" }}>
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    style={{
                      width: i === active ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === active ? "#6b8ec4" : "rgba(107,142,196,0.3)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "width 0.3s, background 0.3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
