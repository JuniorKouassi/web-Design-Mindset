/* =====================================================
   WEB DESIGN MINDSET — main.js
   Lenis + GSAP + hamburger + stats counter + card tilt
   ===================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ─── Lenis Smooth Scroll ──────────────────────────── */
const lenis = new Lenis({
  duration: 1.25,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
lenis.on('scroll', ScrollTrigger.update);

/* ─── Nav scrolled state ───────────────────────────── */
const nav = document.querySelector('.nav');
if (nav) {
  lenis.on('scroll', ({ scroll }) => {
    nav.classList.toggle('scrolled', scroll > 60);
  });
}

/* ─── Hamburger ────────────────────────────────────── */
const hamburger  = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}

/* ─── Active nav link ──────────────────────────────── */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ─── Reduced-motion gate ──────────────────────────── */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {

  /* ── Hero entrance ─── */
  if (document.querySelector('.hero__headline')) {
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.hero__eyebrow',          { opacity: 0, y: 18, duration: 0.55 }, 0.15)
      .from('.hero__headline',         { opacity: 0, y: 30, duration: 0.70 }, 0.30)
      .from('.hero__sub, .hero__founder',{ opacity: 0, y: 18, duration: 0.55, stagger: 0.1 }, 0.68)
      .from('.hero__ctas',             { opacity: 0, y: 16, duration: 0.50 }, 0.88)
      .from('.hero__photo',            { opacity: 0, x: 26, scale: 0.97, duration: 0.85 }, 0.38);
  }

  /* ── Scroll fade-ups ─── */
  gsap.utils.toArray('.fade-up').forEach(el => {
    gsap.from(el, {
      opacity: 0, y: 46, duration: 0.75, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
    });
  });

  /* ── Stat counters ─── */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target    = parseFloat(el.dataset.count);
    const suffix    = el.dataset.suffix  ?? '';
    const isDecimal = el.dataset.decimal === 'true';
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter() {
        gsap.fromTo({ v: 0 }, { v: target }, {
          duration: 1.85, ease: 'power2.out',
          onUpdate() {
            el.textContent = isDecimal
              ? this.targets()[0].v.toFixed(1) + suffix
              : Math.round(this.targets()[0].v) + suffix;
          },
        });
      },
    });
  });

  /* ── Card 3-D tilt ─── */
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      gsap.to(card, { rotateX: -y * 7, rotateY: x * 7, duration: 0.35, ease: 'power2.out', transformPerspective: 900 });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
    });
  });

} /* end !prefersReduced */

/* ─── Contact form ─────────────────────────────────── */
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(f => {
      f.style.borderColor = '';
      if (!f.value.trim()) { f.style.borderColor = '#ff4444'; valid = false; }
    });
    if (!valid) return;
    const emailEl = form.querySelector('[type="email"]');
    if (emailEl && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.style.borderColor = '#ff4444';
      return;
    }
    const successEl = document.querySelector('.form-success');
    if (successEl) { form.style.display = 'none'; successEl.classList.add('visible'); }
    form.submit();
  });
}
