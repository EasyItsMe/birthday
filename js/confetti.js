/**
 * Romantic Visual Effects Engine:
 * - Ambient Twinkling Stars & Shooting Stars
 * - Floating Soft Glow Hearts & Bokeh
 * - Confetti & Golden Sparkle Celebration Cannon
 * - Sky Lantern Flight Physics
 */

class RomanticVisuals {
  constructor() {
    this.bgCanvas = document.getElementById('bg-canvas');
    this.confettiCanvas = document.getElementById('confetti-canvas');
    this.lanternCanvas = document.getElementById('lantern-canvas');

    this.bgCtx = this.bgCanvas ? this.bgCanvas.getContext('2d') : null;
    this.confettiCtx = this.confettiCanvas ? this.confettiCanvas.getContext('2d') : null;
    this.lanternCtx = this.lanternCanvas ? this.lanternCanvas.getContext('2d') : null;

    this.stars = [];
    this.shootingStars = [];
    this.ambientHearts = [];
    this.confettiParticles = [];
    this.lanterns = [];

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Generate static/twinkling stars
    const starCount = Math.floor((this.width * this.height) / 4000);
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.6 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        color: ['#ffffff', '#ffeaa7', '#ffccd5', '#dfe6e9'][Math.floor(Math.random() * 4)]
      });
    }

    // Generate ambient rising hearts / bokeh
    for (let i = 0; i < 16; i++) {
      this.ambientHearts.push(this.createAmbientHeart());
    }

    this.animate();
    this.scheduleShootingStar();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    [this.bgCanvas, this.confettiCanvas, this.lanternCanvas].forEach(canvas => {
      if (canvas) {
        canvas.width = this.width;
        canvas.height = this.height;
      }
    });
  }

  createAmbientHeart() {
    return {
      x: Math.random() * this.width,
      y: this.height + Math.random() * 100,
      size: Math.random() * 14 + 10,
      speedY: Math.random() * 0.6 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      alpha: Math.random() * 0.4 + 0.2,
      color: ['rgba(255, 120, 160, ', 'rgba(255, 182, 193, ', 'rgba(240, 147, 251, ', 'rgba(255, 215, 0, '][Math.floor(Math.random() * 4)]
    };
  }

  scheduleShootingStar() {
    setTimeout(() => {
      this.shootingStars.push({
        x: Math.random() * (this.width * 0.7),
        y: Math.random() * (this.height * 0.4),
        length: Math.random() * 80 + 70,
        speed: Math.random() * 8 + 10,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
        decay: 0.02
      });
      this.scheduleShootingStar();
    }, Math.random() * 4000 + 3000);
  }

  drawHeart(ctx, x, y, size, color, alpha, rotation = 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    // top left curve
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    // bottom left curve
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size);
    // bottom right curve
    ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    // top right curve
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // 1. Draw Background Stars & Ambient Glow
    if (this.bgCtx) {
      this.bgCtx.clearRect(0, 0, this.width, this.height);

      // Stars
      this.stars.forEach(star => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.2) star.twinkleSpeed *= -1;

        this.bgCtx.fillStyle = star.color;
        this.bgCtx.globalAlpha = star.alpha;
        this.bgCtx.beginPath();
        this.bgCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        this.bgCtx.fill();
      });

      // Shooting stars
      for (let i = this.shootingStars.length - 1; i >= 0; i--) {
        const s = this.shootingStars[i];
        const endX = s.x - Math.cos(s.angle) * s.length;
        const endY = s.y - Math.sin(s.angle) * s.length;

        const grad = this.bgCtx.createLinearGradient(s.x, s.y, endX, endY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${s.alpha})`);
        grad.addColorStop(0.4, `rgba(255, 215, 180, ${s.alpha * 0.8})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        this.bgCtx.strokeStyle = grad;
        this.bgCtx.lineWidth = 2.2;
        this.bgCtx.beginPath();
        this.bgCtx.moveTo(s.x, s.y);
        this.bgCtx.lineTo(endX, endY);
        this.bgCtx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= s.decay;

        if (s.alpha <= 0 || s.x > this.width || s.y > this.height) {
          this.shootingStars.splice(i, 1);
        }
      }

      // Ambient rising romantic hearts
      this.ambientHearts.forEach((h, idx) => {
        h.y -= h.speedY;
        h.x += Math.sin(h.y * 0.02) * 0.4;
        h.rotation += h.rotationSpeed;

        this.drawHeart(this.bgCtx, h.x, h.y, h.size, `${h.color}${h.alpha})`, h.alpha, h.rotation);

        if (h.y < -30) {
          this.ambientHearts[idx] = this.createAmbientHeart();
        }
      });
    }

    // 2. Draw Confetti & Celebration Cannons
    if (this.confettiCtx) {
      this.confettiCtx.clearRect(0, 0, this.width, this.height);

      for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
        const p = this.confettiParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.99;
        p.rotation += p.rotationSpeed;
        p.scaleY = Math.sin(p.rotation);
        p.alpha -= p.decay;

        if (p.type === 'heart') {
          this.drawHeart(this.confettiCtx, p.x, p.y, p.size, p.color, Math.max(0, p.alpha), p.rotation);
        } else {
          this.confettiCtx.save();
          this.confettiCtx.translate(p.x, p.y);
          this.confettiCtx.rotate(p.rotation);
          this.confettiCtx.scale(1, p.scaleY);
          this.confettiCtx.globalAlpha = Math.max(0, p.alpha);
          this.confettiCtx.fillStyle = p.color;
          this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * (p.isRibbon ? 2.4 : 1));
          this.confettiCtx.restore();
        }

        if (p.alpha <= 0 || p.y > this.height + 50) {
          this.confettiParticles.splice(i, 1);
        }
      }
    }

    // 3. Draw Rising Sky Lanterns
    if (this.lanternCtx) {
      this.lanternCtx.clearRect(0, 0, this.width, this.height);

      for (let i = this.lanterns.length - 1; i >= 0; i--) {
        const l = this.lanterns[i];
        l.y -= l.speedY;
        l.x += Math.sin(l.y * 0.015 + l.wobblePhase) * 0.8;
        l.size = Math.max(12, l.size * 0.999); // perspective shrinkage
        l.alpha = Math.max(0, l.alpha - l.decay);

        // Draw glowing lantern
        this.drawLantern(this.lanternCtx, l.x, l.y, l.size, l.alpha, l.wishText);

        if (l.y < -100 || l.alpha <= 0) {
          this.lanterns.splice(i, 1);
        }
      }
    }
  }

  drawLantern(ctx, x, y, size, alpha, wishText) {
    ctx.save();
    ctx.globalAlpha = alpha;

    // Outer warm halo glow
    const glowGrad = ctx.createRadialGradient(x, y, size * 0.2, x, y, size * 2.2);
    glowGrad.addColorStop(0, 'rgba(255, 200, 100, 0.45)');
    glowGrad.addColorStop(0.5, 'rgba(255, 120, 50, 0.15)');
    glowGrad.addColorStop(1, 'rgba(255, 100, 50, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(x, y, size * 2.2, 0, Math.PI * 2);
    ctx.fill();

    // Lantern body
    const bodyGrad = ctx.createLinearGradient(x - size / 2, y - size, x + size / 2, y + size);
    bodyGrad.addColorStop(0, '#ffeaa7');
    bodyGrad.addColorStop(0.5, '#fab1a0');
    bodyGrad.addColorStop(1, '#e17055');

    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.roundRect(x - size * 0.6, y - size * 0.8, size * 1.2, size * 1.6, [size * 0.2, size * 0.2, size * 0.1, size * 0.1]);
    ctx.fill();

    // Inner bright flame core
    const flameGrad = ctx.createRadialGradient(x, y + size * 0.4, 0, x, y + size * 0.4, size * 0.5);
    flameGrad.addColorStop(0, '#ffffff');
    flameGrad.addColorStop(0.4, '#fff275');
    flameGrad.addColorStop(1, 'rgba(255, 165, 0, 0)');
    ctx.fillStyle = flameGrad;
    ctx.beginPath();
    ctx.arc(x, y + size * 0.4, size * 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Bottom frame rim
    ctx.strokeStyle = '#d63031';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - size * 0.5, y + size * 0.8);
    ctx.lineTo(x + size * 0.5, y + size * 0.8);
    ctx.stroke();

    // Tag / Wish preview if close
    if (wishText && size > 24) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'italic 11px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(wishText.length > 20 ? wishText.substring(0, 18) + '...' : wishText, x, y - size - 6);
    }

    ctx.restore();
  }

  // Trigger Grand Birthday Confetti Burst
  fireBirthdayCelebration(originX = this.width / 2, originY = this.height / 2) {
    const colors = ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#fbbf24', '#38bdf8', '#ffffff', '#fcd34d'];
    const count = 180;

    for (let i = 0; i < count; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const velocity = Math.random() * 16 + 5;
      const isRibbon = Math.random() > 0.4;
      const isHeart = Math.random() > 0.6;

      this.confettiParticles.push({
        x: originX + (Math.random() - 0.5) * 60,
        y: originY + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - Math.random() * 5,
        gravity: 0.28,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        isRibbon: isRibbon,
        type: isHeart ? 'heart' : 'confetti',
        alpha: 1,
        decay: Math.random() * 0.006 + 0.005
      });
    }

    // Double cannon burst from bottom corners
    this.fireCornerBurst(80, this.height - 50, -Math.PI / 4);
    this.fireCornerBurst(this.width - 80, this.height - 50, -Math.PI * 3 / 4);
  }

  fireCornerBurst(x, y, baseAngle) {
    const colors = ['#ff7675', '#fd79a8', '#ffeaa7', '#a29bfe', '#55efc4', '#ffffff'];
    for (let i = 0; i < 70; i++) {
      const angle = baseAngle + (Math.random() - 0.5) * 0.7;
      const velocity = Math.random() * 20 + 8;
      this.confettiParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        gravity: 0.32,
        size: Math.random() * 11 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.25,
        isRibbon: Math.random() > 0.5,
        type: Math.random() > 0.6 ? 'heart' : 'confetti',
        alpha: 1,
        decay: Math.random() * 0.007 + 0.004
      });
    }
  }

  // Release Sky Lantern
  launchSkyLantern(wishText) {
    const startX = this.width / 2 + (Math.random() - 0.5) * (this.width * 0.4);
    this.lanterns.push({
      x: startX,
      y: this.height + 40,
      size: Math.random() * 8 + 38,
      speedY: Math.random() * 0.8 + 1.2,
      wobblePhase: Math.random() * Math.PI * 2,
      alpha: 1,
      decay: 0.0008,
      wishText: wishText || "My Love Always"
    });
  }
}

window.romanticVisuals = null;
document.addEventListener('DOMContentLoaded', () => {
  window.romanticVisuals = new RomanticVisuals();
});
