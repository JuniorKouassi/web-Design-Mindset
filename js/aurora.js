/* =====================================================
   WEB DESIGN MINDSET — aurora.js
   Full-screen canvas aurora background animation.
   Adapted from design_handoff_animated_background.
   ===================================================== */
(function () {
  const canvas = document.getElementById('aurora-bg');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, DPR = 1;

  const CFG = {
    intensity: 0.45,
    speed:     2.1,
    particles: 63,
    grain:     0.035,
    grid:      true,
  };

  /* ── Resize ─────────────────────────────────────── */
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    rebuildParticles();
  }
  window.addEventListener('resize', resize);

  /* ── Particles ──────────────────────────────────── */
  let particles = [];
  function rebuildParticles() {
    particles = Array.from({ length: Math.round(CFG.particles) }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 1.4 + 0.3,
      vx:    (Math.random() - 0.5) * 0.22,
      vy:    -0.08 - Math.random() * 0.18,
      phase: Math.random() * Math.PI * 2,
      pulse: 0.6 + Math.random() * 0.8,
    }));
  }

  /* ── Tech grid ──────────────────────────────────── */
  function drawGrid(t) {
    if (!CFG.grid) return;
    const spacing = 64;
    const offset  = (t * 0.008 * CFG.speed) % spacing;
    ctx.lineWidth   = 1;
    ctx.strokeStyle = `oklch(0.7 0.15 145 / ${0.05 * CFG.intensity})`;
    ctx.beginPath();
    for (let x = -spacing + offset; x < W + spacing; x += spacing) {
      ctx.moveTo(x, 0); ctx.lineTo(x, H);
    }
    for (let y = -spacing + offset; y < H + spacing; y += spacing) {
      ctx.moveTo(0, y); ctx.lineTo(W, y);
    }
    ctx.stroke();

    for (let i = 0; i < 6; i++) {
      const seed  = i * 137.5;
      const nx    = (Math.sin(seed) * 0.5 + 0.5) * W;
      const ny    = (Math.cos(seed * 1.3) * 0.5 + 0.5) * H;
      const gx    = Math.round((nx - offset) / spacing) * spacing + offset;
      const gy    = Math.round((ny - offset) / spacing) * spacing + offset;
      const pulse = 0.5 + Math.sin(t * 0.0015 + i) * 0.5;
      ctx.fillStyle = `oklch(0.85 0.2 145 / ${0.25 * pulse * CFG.intensity})`;
      ctx.fillRect(gx - 2, gy - 2, 4, 4);
    }
  }

  /* ── Aurora bands ───────────────────────────────── */
  function drawAurora(t) {
    const { speed, intensity } = CFG;
    for (let b = 0; b < 4; b++) {
      const phase      = t * 0.00015 * speed + b * 1.7;
      const yBase      = H * (0.2 + b * 0.18) + Math.sin(phase) * H * 0.05;
      const amp        = H * (0.14 + b * 0.03);
      const wavelength = W * (0.6 + b * 0.15);

      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let x = 0; x <= W + 14; x += 14) {
        const y = yBase
          + Math.sin((x / wavelength) * Math.PI * 2 + phase * 2) * amp
          + Math.sin((x / (wavelength * 0.4)) * Math.PI * 2 - phase * 1.3) * amp * 0.35;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, yBase - amp, 0, yBase + amp + H * 0.3);
      const a    = 0.06 * intensity * (1 - b * 0.15);
      grad.addColorStop(0,   `oklch(0.72 0.18 145 / ${a})`);
      grad.addColorStop(0.4, `oklch(0.55 0.15 145 / ${a * 0.6})`);
      grad.addColorStop(1,   `oklch(0.2 0.04 145 / 0)`);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    ctx.lineWidth = 1.1;
    for (let b = 0; b < 2; b++) {
      const phase      = t * 0.00018 * speed + b * 2.1;
      const yBase      = H * (0.32 + b * 0.22);
      const amp        = H * (0.16 + b * 0.04);
      const wavelength = W * (0.7 + b * 0.2);

      ctx.beginPath();
      for (let x = 0; x <= W; x += 8) {
        const y = yBase
          + Math.sin((x / wavelength) * Math.PI * 2 + phase * 2) * amp
          + Math.sin((x / (wavelength * 0.3)) * Math.PI * 2 - phase) * amp * 0.3;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `oklch(0.85 0.2 145 / ${0.25 * intensity})`;
      ctx.stroke();
    }
  }

  /* ── Floating particles ─────────────────────────── */
  function drawParticles(t) {
    for (const p of particles) {
      p.x += p.vx * CFG.speed * 0.5;
      p.y += p.vy * CFG.speed * 0.5;
      if (p.x < -10)    p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10)    p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
      const tw = 0.6 + Math.sin(t * 0.001 * p.pulse + p.phase) * 0.4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `oklch(0.9 0.18 145 / ${0.55 * tw * CFG.intensity})`;
      ctx.fill();
    }
  }

  /* ── Vignette ───────────────────────────────────── */
  function drawVignette() {
    const grad = ctx.createRadialGradient(
      W / 2, H / 2, Math.min(W, H) * 0.2,
      W / 2, H / 2, Math.max(W, H) * 0.75
    );
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.5)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  /* ── Film grain ─────────────────────────────────── */
  let grainCanvas;
  function buildGrain() {
    grainCanvas = document.createElement('canvas');
    grainCanvas.width = grainCanvas.height = 180;
    const g  = grainCanvas.getContext('2d');
    const id = g.createImageData(180, 180);
    for (let i = 0; i < id.data.length; i += 4) {
      const v = Math.random() * 255;
      id.data[i] = id.data[i+1] = id.data[i+2] = v;
      id.data[i+3] = 18;
    }
    g.putImageData(id, 0, 0);
  }
  function drawGrain() {
    if (CFG.grain <= 0) return;
    ctx.save();
    ctx.globalAlpha = CFG.grain;
    ctx.fillStyle   = ctx.createPattern(grainCanvas, 'repeat');
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  /* ── Main render loop ───────────────────────────── */
  function tick(t) {
    ctx.fillStyle = 'rgba(5, 8, 7, 0.12)';
    ctx.fillRect(0, 0, W, H);
    drawGrid(t);
    drawAurora(t);
    drawParticles(t);
    drawVignette();
    drawGrain();
    requestAnimationFrame(tick);
  }

  /* Respect prefers-reduced-motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  buildGrain();
  resize();
  requestAnimationFrame(tick);
})();
