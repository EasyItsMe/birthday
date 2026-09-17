/**
 * ROMANTIC BIRTHDAY SURPRISE - MAIN APPLICATION CONTROLLER
 * Fully customizable romantic content in pure English
 */

const RomanticConfig = {
  partnerName: "My Dearest Love",
  partnerNickname: "My Sunshine & My Everything",
  senderName: "Forever & Always Yours",
  
  // Default anniversary / relationship start date (YYYY-MM-DDTHH:MM:SS)
  anniversaryDate: "2023-06-18T00:00:00",

  // Birthday Wishes & Candle Blow message
  birthdayWish: "Happy Birthday to the one who makes my whole world brighter, warmer, and infinitely more beautiful! ✨🎂",
  wishRevealQuote: "“I wished for happiness, and the universe gave me you. May this new year of your life bring you as much joy and wonder as you bring into mine every single day.”",

  // 6 Heartfelt Reasons Why I Love You
  reasons: [
    {
      number: "01",
      icon: "✨",
      title: "Your Radiant Smile",
      body: "The effortless way you light up any room without even trying. Every time you smile at me, all my worries simply melt away.",
      quote: "My favorite sight in this whole universe."
    },
    {
      number: "02",
      icon: "🕊️",
      title: "Your Gentle Heart",
      body: "The endless kindness, empathy, and patience you shower on those around you. You have a soul that is purely genuine and gold.",
      quote: "A pure heart that makes me want to be better."
    },
    {
      number: "03",
      icon: "☕",
      title: "Our Sweet Moments",
      body: "From cozy little dates to late-night conversations about everything and nothing. With you, even ordinary silence feels like home.",
      quote: "Home is never a place, it’s you."
    },
    {
      number: "04",
      icon: "🌙",
      title: "How Safe I Feel With You",
      body: "In a chaotic world, your embrace is my peaceful sanctuary. I can always be my truest, most vulnerable self by your side.",
      quote: "My sweetest comfort and calm."
    },
    {
      number: "05",
      icon: "💫",
      title: "The Way You Make Me Laugh",
      body: "Your silly jokes, contagious giggles, and the playful joy we share together. Life with you is an adventure I never want to end.",
      quote: "Endless laughter in our own little world."
    },
    {
      number: "06",
      icon: "🌹",
      title: "Simply Everything You Are",
      body: "Your quirks, your passion, your dreams, and your embrace. I love all the chapters of who you were, who you are, and who you will become.",
      quote: "Loved you yesterday, love you still, always will."
    }
  ],

  // Polaroid Gallery Data - Configured with user's photos
  memories: [
    {
      img: "assets/images/image1.jpeg",
      title: "Hand in Hand Together",
      date: "Walking by Your Side",
      description: "Holding your hand and walking beside you is where I always want to be. Every simple walk turns into my favorite adventure when I'm with you."
    },
    {
      img: "assets/images/image2.jpeg",
      title: "Heart of Sparks",
      date: "Warm Glowing Love",
      description: "Our hands shaping a heart around a bright sparkler. You light up every corner of my soul with your warmth and affection."
    },
    {
      img: "assets/images/image3.jpeg",
      title: "Cute & Playful Soul",
      date: "Sweet Little Moments",
      description: "Your adorable, sweet innocence when looking at plushies. Seeing you genuinely happy and smiling is the greatest gift in my world."
    },
    {
      img: "assets/images/image4.jpeg",
      title: "Midnight Sparkler",
      date: "Under The Night Sky",
      description: "Holding a glowing spark in the midnight calm. No matter how dark the world feels, your love is the guiding light that keeps me inspired."
    }
  ],

  // Love Letter
  letter: {
    salutation: "To My Favorite Person in the World,",
    dateStamp: "On Your Special Birthday",
    paragraphs: [
      "Today is a celebration of the day the universe became a infinitely better place because you were born into it.",
      "Meeting you changed my perspective on what love, warmth, and genuine happiness really mean. You have this quiet magic about you — the ability to turn mundane days into unforgettable adventures, to heal heavy hearts with a gentle hug, and to make every tomorrow feel like something worth looking forward to.",
      "As you blow out your birthday candles today, I want you to remember how deeply cherished, admired, and loved you are. Not just for the big moments, but for the little things — your laugh, your sleepy voice, your kindness, and the way your hand fits perfectly in mine.",
      "May this year bring you all the success, peace, laughter, and sweet adventures that your beautiful heart deserves. I promise to stand by your side, cheer for your dreams, hold you when it storms, and love you more with every passing sunrise."
    ],
    signOff: "Forever cheering for you & loving you deeply,",
    signature: "Yours Always ❤️"
  },

  // Kisses Milestones
  milestones: {
    10: "10 Kisses! You're so sweet ❤️",
    25: "25 Kisses! My heart is melting 🥰",
    50: "50 Kisses! Infinite love for you! 💖",
    100: "100 Kisses! You unlocked endless hugs & pampering! 👑✨",
    200: "200 Kisses! You are officially the most loved human alive! 🌹"
  }
};

class BirthdayApp {
  constructor() {
    this.kissCount = parseInt(localStorage.getItem('hbd_kiss_count') || '0', 10);
    this.candleBlown = false;
    this.anniversary = new Date(localStorage.getItem('hbd_anniversary') || RomanticConfig.anniversaryDate);

    this.initDOM();
    this.bindEvents();
    this.startCounter();
    this.renderReasons();
    this.renderMemories();
    this.renderLetter();
  }

  initDOM() {
    // Elements
    this.entranceOverlay = document.getElementById('entrance-overlay');
    this.btnOpenGift = document.getElementById('btn-open-gift');
    this.envelopeSeal = document.getElementById('envelope-seal');
    
    this.cakeStage = document.getElementById('cake-stage');
    this.candle = document.getElementById('candle');
    this.wishRevealBox = document.getElementById('wish-reveal-box');
    
    this.musicBar = document.getElementById('floating-music-bar');
    this.musicToggleBtn = document.getElementById('music-toggle-btn');
    this.musicTrackTitle = document.getElementById('music-track-title');
    this.musicNextBtn = document.getElementById('music-next-btn');

    this.kissesCounter = document.getElementById('kisses-counter');
    this.loveTapBtn = document.getElementById('love-tap-btn');
    this.loveMilestoneToast = document.getElementById('love-milestone-toast');

    this.lanternWishInput = document.getElementById('lantern-wish-input');
    this.btnLaunchLantern = document.getElementById('btn-launch-lantern');

    this.lightbox = document.getElementById('lightbox-modal');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.lightboxTitle = document.getElementById('lightbox-title');
    this.lightboxDesc = document.getElementById('lightbox-desc');
    this.lightboxClose = document.getElementById('lightbox-close');

    // Partner name injection
    document.querySelectorAll('.partner-name-text').forEach(el => {
      el.textContent = RomanticConfig.partnerName;
    });

    if (this.kissesCounter) {
      this.kissesCounter.textContent = this.kissCount;
    }
  }

  bindEvents() {
    // Entrance Unlock
    const unlock = () => this.unlockSurprise();
    if (this.btnOpenGift) {
      this.btnOpenGift.addEventListener('click', unlock);
      this.btnOpenGift.addEventListener('touchstart', (e) => { e.preventDefault(); unlock(); }, { passive: false });
    }
    if (this.envelopeSeal) {
      this.envelopeSeal.addEventListener('click', unlock);
      this.envelopeSeal.addEventListener('touchstart', (e) => { e.preventDefault(); unlock(); }, { passive: false });
    }

    // Audio Controller
    if (this.musicToggleBtn) {
      this.musicToggleBtn.addEventListener('click', () => {
        const isPlaying = window.romanticAudio.toggle();
        this.updateMusicUI(isPlaying);
      });
    }

    if (this.musicNextBtn) {
      this.musicNextBtn.addEventListener('click', () => {
        const trackName = window.romanticAudio.nextTrack();
        if (this.musicTrackTitle) this.musicTrackTitle.textContent = trackName;
        window.romanticAudio.playSparkle();
      });
    }

    // Cake Candle Blow
    if (this.cakeStage) {
      this.cakeStage.addEventListener('click', () => this.blowCandle());
    }

    // Love Tap Button
    if (this.loveTapBtn) {
      this.loveTapBtn.addEventListener('click', (e) => this.handleLoveTap(e));
      this.loveTapBtn.addEventListener('touchstart', (e) => {
        this.handleLoveTap(e.touches[0] || e);
      }, { passive: true });
    }

    // Sky Lantern Wish Launch
    if (this.btnLaunchLantern) {
      this.btnLaunchLantern.addEventListener('click', () => this.handleLaunchLantern());
    }
    if (this.lanternWishInput) {
      this.lanternWishInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.handleLaunchLantern();
      });
    }

    // Lightbox Close
    if (this.lightboxClose) {
      this.lightboxClose.addEventListener('click', () => this.closeLightbox());
    }
    if (this.lightbox) {
      this.lightbox.addEventListener('click', (e) => {
        if (e.target === this.lightbox) this.closeLightbox();
      });
    }

    // Custom Date Picker for Anniversary
    const editToggle = document.getElementById('counter-edit-toggle');
    const datePickerContainer = document.getElementById('counter-date-picker');
    const anniversaryInput = document.getElementById('anniversary-input');
    const saveDateBtn = document.getElementById('save-date-btn');

    if (editToggle && datePickerContainer) {
      editToggle.addEventListener('click', () => {
        datePickerContainer.classList.toggle('show');
      });
    }

    if (saveDateBtn && anniversaryInput) {
      saveDateBtn.addEventListener('click', () => {
        if (anniversaryInput.value) {
          this.anniversary = new Date(anniversaryInput.value);
          localStorage.setItem('hbd_anniversary', this.anniversary.toISOString());
          datePickerContainer.classList.remove('show');
          window.romanticAudio.playSparkle();
        }
      });
    }
  }

  unlockSurprise() {
    if (this.entranceOverlay) {
      this.entranceOverlay.classList.add('unlocked');
    }
    // Start music
    window.romanticAudio.play();
    this.updateMusicUI(true);

    // Initial celebratory sparkle
    setTimeout(() => {
      window.romanticAudio.playSparkle();
      if (window.romanticVisuals) {
        window.romanticVisuals.fireBirthdayCelebration();
      }
    }, 400);
  }

  updateMusicUI(isPlaying) {
    if (this.musicBar) {
      if (isPlaying) {
        this.musicBar.classList.add('playing');
        if (this.musicToggleBtn) this.musicToggleBtn.innerHTML = '❚❚';
      } else {
        this.musicBar.classList.remove('playing');
        if (this.musicToggleBtn) this.musicToggleBtn.innerHTML = '▶';
      }
    }
    if (this.musicTrackTitle) {
      this.musicTrackTitle.textContent = window.romanticAudio.getCurrentTrackName();
    }
  }

  blowCandle() {
    if (this.candleBlown) {
      window.romanticAudio.playSparkle();
      if (window.romanticVisuals) {
        window.romanticVisuals.fireBirthdayCelebration();
      }
      return;
    }

    this.candleBlown = true;
    if (this.candle) {
      this.candle.classList.add('extinguished');
    }

    // Audio SFX
    window.romanticAudio.playBlowCandle();

    // Confetti Explosion
    if (window.romanticVisuals) {
      window.romanticVisuals.fireBirthdayCelebration();
    }

    // Reveal Birthday Wish Box
    if (this.wishRevealBox) {
      setTimeout(() => {
        this.wishRevealBox.classList.add('show');
        this.wishRevealBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 700);
    }
  }

  handleLoveTap(e) {
    this.kissCount++;
    localStorage.setItem('hbd_kiss_count', this.kissCount.toString());
    if (this.kissesCounter) {
      this.kissesCounter.textContent = this.kissCount;
    }

    // Audio Pop
    window.romanticAudio.playHeartPop();

    // Floating Emoji Animation
    const emojis = ['💖', '💕', '🌹', '✨', '🥰', '💋', '💌', '🌸'];
    const heart = document.createElement('div');
    heart.className = 'floating-particle-heart';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const rect = this.loveTapBtn.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width / 2);
    const y = e.clientY || (rect.top + rect.height / 2);

    heart.style.left = `${x - 12}px`;
    heart.style.top = `${y - 12}px`;
    heart.style.setProperty('--randX', `${(Math.random() - 0.5) * 60}px`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1400);

    // Check milestones
    if (RomanticConfig.milestones[this.kissCount]) {
      if (this.loveMilestoneToast) {
        this.loveMilestoneToast.textContent = RomanticConfig.milestones[this.kissCount];
        window.romanticAudio.playSparkle();
        if (window.romanticVisuals) {
          window.romanticVisuals.fireBirthdayCelebration(x, y);
        }
      }
    }
  }

  handleLaunchLantern() {
    const wishText = this.lanternWishInput ? this.lanternWishInput.value.trim() : "";
    const finalWish = wishText || "Forever happiness with you ❤️";

    if (window.romanticVisuals) {
      window.romanticVisuals.launchSkyLantern(finalWish);
    }
    window.romanticAudio.playLanternWhoosh();

    if (this.lanternWishInput) {
      this.lanternWishInput.value = "";
      this.lanternWishInput.placeholder = "✨ Your wish is floating to the stars! Make another?";
    }

    // Extra sparkle
    setTimeout(() => {
      window.romanticAudio.playSparkle();
    }, 800);
  }

  renderReasons() {
    const container = document.getElementById('reasons-grid');
    if (!container) return;

    container.innerHTML = RomanticConfig.reasons.map((r, idx) => `
      <div class="reason-card" onclick="this.classList.toggle('flipped'); window.romanticAudio.playHeartPop();">
        <div class="reason-inner">
          <div class="reason-front">
            <div>
              <span class="reason-number">REASON ${r.number}</span>
              <div class="reason-icon">${r.icon}</div>
              <h3 class="reason-front-title">${r.title}</h3>
            </div>
            <div class="reason-front-hint">
              <span>✦ Tap to discover why</span>
            </div>
          </div>
          <div class="reason-back">
            <div>
              <span class="reason-number">REASON ${r.number}</span>
              <p class="reason-body" style="margin-top: 14px;">${r.body}</p>
            </div>
            <div class="reason-quote-footer">"${r.quote}"</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderMemories() {
    const container = document.getElementById('polaroid-wall');
    if (!container) return;

    container.innerHTML = RomanticConfig.memories.map((m, idx) => `
      <div class="polaroid-card" onclick="window.birthdayApp.openLightbox(${idx})">
        <div class="washi-tape"></div>
        <div class="polaroid-img-box">
          <img src="${m.img}" alt="${m.title}" loading="lazy" />
        </div>
        <div class="polaroid-caption">
          <h4 class="polaroid-caption-title">${m.title}</h4>
          <p class="polaroid-date">${m.date}</p>
        </div>
      </div>
    `).join('');
  }

  openLightbox(idx) {
    const memory = RomanticConfig.memories[idx];
    if (!memory || !this.lightbox) return;

    this.lightboxImg.src = memory.img;
    this.lightboxTitle.textContent = memory.title;
    this.lightboxDesc.textContent = memory.description;
    this.lightbox.classList.add('active');
    window.romanticAudio.playSparkle();
  }

  closeLightbox() {
    if (this.lightbox) {
      this.lightbox.classList.remove('active');
    }
  }

  renderLetter() {
    const headerEl = document.getElementById('letter-salutation');
    const dateStampEl = document.getElementById('letter-date-stamp');
    const bodyEl = document.getElementById('letter-body');
    const signOffEl = document.getElementById('letter-sign-off');
    const signatureEl = document.getElementById('letter-signature');

    if (headerEl) headerEl.textContent = RomanticConfig.letter.salutation;
    if (dateStampEl) dateStampEl.textContent = RomanticConfig.letter.dateStamp;
    if (signOffEl) signOffEl.textContent = RomanticConfig.letter.signOff;
    if (signatureEl) signatureEl.textContent = RomanticConfig.letter.signature;

    if (bodyEl) {
      bodyEl.innerHTML = RomanticConfig.letter.paragraphs
        .map(p => `<p class="letter-text">${p}</p>`)
        .join('');
    }
  }

  startCounter() {
    const daysEl = document.getElementById('days-count');
    const hoursEl = document.getElementById('hours-count');
    const minutesEl = document.getElementById('minutes-count');
    const secondsEl = document.getElementById('seconds-count');

    const update = () => {
      const now = new Date();
      const diff = now - this.anniversary;

      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
      }
    };

    update();
    setInterval(update, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.birthdayApp = new BirthdayApp();
});
