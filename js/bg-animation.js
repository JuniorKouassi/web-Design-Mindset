/* =====================================================
   Vyra Breathing Constellation — site-wide background
   Canvas dots that breathe and flow across the sky
   ===================================================== */
(function () {
  'use strict';

  const CFG = {
    dotCols:      34,
    dotMinAlpha:  0.10,
    dotMaxAlpha:  0.45,
    dotBaseRadius: 1.0,
    dotPeakRadius: 2.0,
    breathPeriod: 6400,   // ms
    waveAmpX:     14,
    waveAmpY:     22,
    waveSpeed:    0.00018,
    waveFreqX:    0.0042,
    waveFreqY:    0.0035,
  };

  const canvas = document.getElementById('bg-dots');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0, DPR = 1;
  let dots = [];

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildDots();
  }
  window.addEventListener('resize', resize);

  function buildDots() {
    dots = [];
    const spacing = W / CFG.dotCols;
    const rows = Math.ceil(H / spacing) + 1;
    for (let i = 0; i < CFG.dotCols; i++) {
      for (let j = 0; j < rows; j++) {
        const hx = i * spacing + spacing / 2;
        const hy = j * spacing + spacing / 2;
        dots.push({
          hx, hy, x: hx, y: hy,
          phase: Math.random() * Math.PI * 2,
          tone:  Math.random(),
        });
      }
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const ts = t * CFG.waveSpeed;

    for (const d of dots) {
      const wave =
        Math.sin(d.hx * CFG.waveFreqX + ts * 1.0) +
        Math.sin(d.hy * CFG.waveFreqY - ts * 0.7) * 0.8 +
        Math.sin((d.hx + d.hy) * CFG.waveFreqX * 0.6 + ts * 0.5) * 0.5;

      const wave2 =
        Math.cos(d.hy * CFG.waveFreqY + ts * 0.9) +
        Math.cos(d.hx * CFG.waveFreqX * 0.7 - ts * 0.6) * 0.6;

      d.x = d.hx + wave  * CFG.waveAmpX * 0.5;
      d.y = d.hy + wave2 * CFG.waveAmpY * 0.5;

      const local = 0.5 + 0.5 * Math.sin(
        d.hx * CFG.waveFreqX + d.hy * CFG.waveFreqY * 0.8 + ts * 1.1
      );
      const a = CFG.dotMinAlpha + (CFG.dotMaxAlpha - CFG.dotMinAlpha) * local;
      const r = CFG.dotBaseRadius + (CFG.dotPeakRadius - CFG.dotBaseRadius) * local;

      ctx.beginPath();
      ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
      ctx.fillStyle = d.tone > 0.82
        ? `rgba(107,142,196,${a})`
        : `rgba(13,27,58,${a * 0.85})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  // Respect prefers-reduced-motion — static frame only
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  resize();
  if (reduced) {
    draw(0);
  } else {
    requestAnimationFrame(draw);
  }
})();
