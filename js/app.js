/**
 * ROMANTIC BIRTHDAY SURPRISE - LUXURY KEEPSAKE CONTROLLER
 * Full English Content, Typewriter Engine, 3D Gift Box, Wish Vault & WhatsApp
 */

const RomanticConfig = {
  partnerName: "My Dearest Love",
  partnerNickname: "My Sunshine",
  senderName: "Forever & Always Yours",
  whatsAppNumber: "6281999947412", // Clean E.164 without leading 0
  
  // Default anniversary / relationship start date (YYYY-MM-DDTHH:MM:SS)
  anniversaryDate: "2023-06-18T00:00:00",

  // Typewriter Messages
  heroTagline: "To the one who holds my heart, illuminates my darkest skies, and turns ordinary moments into pure magic. Today and every day, you are my favorite blessing.",
  wishRevealQuote: "“I wished for happiness, and the universe gave me you. May this new year of your life bring you as much joy, peace, and wonder as you bring into mine every single day.”",

  // 6 Heartfelt Reasons Why I Love You (With Luxury Vector Icons)
  reasons: [
    {
      number: "01",
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>`,
      title: "Your Radiant Smile",
      body: "The effortless way you light up any room without even trying. Every time you smile at me, all my worries simply melt away.",
      quote: "My favorite sight in this whole universe."
    },
    {
      number: "02",
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
      title: "Your Gentle Soul",
      body: "The endless kindness, empathy, and patience you shower on those around you. You have a heart that is purely genuine and gold.",
      quote: "A pure heart that makes me want to be better."
    },
    {
      number: "03",
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,
      title: "Our Sweet Moments",
      body: "From cozy little dates to late-night conversations about everything and nothing. With you, even ordinary silence feels like home.",
      quote: "Home is never a place, it’s you."
    },
    {
      number: "04",
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
      title: "How Safe I Feel With You",
      body: "In a chaotic world, your embrace is my peaceful sanctuary. I can always be my truest, most vulnerable self by your side.",
      quote: "My sweetest comfort and calm."
    },
    {
      number: "05",
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>`,
      title: "The Joy We Share",
      body: "Your silly jokes, contagious laughs, and the playful magic between us. Life with you is a journey I want to live over and over.",
      quote: "Endless laughter in our own universe."
    },
    {
      number: "06",
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      title: "Simply Everything You Are",
      body: "Your quirks, your passion, your dreams, and your embrace. I love every chapter of who you were, who you are, and who you will become.",
      quote: "Loved you yesterday, love you still, always will."
    }
  ],

  // Polaroid Gallery Data - Using your authentic photos
  memories: [
    {
      img: "assets/images/image1.jpeg",
      title: "Holding Hands Together",
      date: "Walking by Your Side",
      description: "Holding your hand and walking beside you is where I always feel at peace. Every simple path turns into my favorite memory when I'm with you."
    },
    {
      img: "assets/images/image2.jpeg",
      title: "Our Cute Little Companion",
      date: "Warm Smiles & Sweet Treasures",
      description: "This adorable little fluffy friend that always brings a gentle smile, reminding me of your soft heart and cheerful warmth."
    },
    {
      img: "assets/images/image3.jpeg",
      title: "Adoring Cute Plushies",
      date: "Sweet & Playful Moments",
      description: "Watching you light up and admire cute toys is the sweetest sight in the world. Your genuine happiness and joyful eyes are my greatest treasure."
    }
  ],

  // Love Letter
  letter: {
    salutation: "To My Favorite Person in the World,",
    dateStamp: "On Your Special Birthday",
    paragraphs: [
      "Today is a celebration of the day the universe became an infinitely better place because you were born into it.",
      "Meeting you changed my perspective on what love, warmth, and genuine happiness really mean. You have this quiet magic about you — the ability to turn mundane days into unforgettable adventures, to heal heavy hearts with a gentle hug, and to make every tomorrow feel like something worth looking forward to.",
      "As you blow out your birthday candles today, I want you to remember how deeply cherished, admired, and loved you are. Not just for the big moments, but for the little things — your laugh, your sleepy voice, your kindness, and the way your hand fits perfectly in mine.",
      "May this year bring you all the success, peace, laughter, and sweet adventures that your beautiful heart deserves. I promise to stand by your side, cheer for your dreams, hold you when it storms, and love you more with every passing sunrise."
    ],
    signOff: "Forever cheering for you & loving you deeply,",
    signature: "Yours Always"
  }
};

class BirthdayApp {
  constructor() {
    this.candleBlown = false;
    this.anniversary = new Date(localStorage.getItem('hbd_anniversary') || RomanticConfig.anniversaryDate);
    this.selectedMood = "Loved every second of this! 💕";

    this.initDOM();
    this.bindEvents();
    this.startCounter();
    this.renderReasons();
    this.renderMemories();
    this.renderLetter();
  }

  initDOM() {
    this.entranceOverlay = document.getElementById('entrance-overlay');
    this.giftBox3D = document.getElementById('gift-box-3d');
    this.btnOpenGift = document.getElementById('btn-open-gift');
    
    this.cakeStage = document.getElementById('cake-stage');
    this.candle = document.getElementById('candle');
    this.wishRevealBox = document.getElementById('wish-reveal-box');
    this.wishTypewriterText = document.getElementById('wish-typewriter-text');
    this.heroTypewriterText = document.getElementById('hero-typewriter-text');

    this.musicBar = document.getElementById('floating-music-bar');
    this.musicToggleBtn = document.getElementById('music-toggle-btn');
    this.musicPlayIcon = document.getElementById('music-play-icon');
    this.musicPauseIcon = document.getElementById('music-pause-icon');
    this.musicTrackTitle = document.getElementById('music-track-title');
    this.musicNextBtn = document.getElementById('music-next-btn');

    this.lanternWishInput = document.getElementById('lantern-wish-input');
    this.btnLaunchLantern = document.getElementById('btn-launch-lantern');

    this.replyMessageInput = document.getElementById('reply-message-input');
    this.btnSendWhatsapp = document.getElementById('btn-send-whatsapp');
    this.moodChips = document.querySelectorAll('.mood-chip');

    this.lightbox = document.getElementById('lightbox-modal');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.lightboxTitle = document.getElementById('lightbox-title');
    this.lightboxDesc = document.getElementById('lightbox-desc');
    this.lightboxClose = document.getElementById('lightbox-close');

    // Mobile Navigation Drawer DOM
    this.mobileNavToggle = document.getElementById('mobile-nav-toggle');
    this.mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    this.mobileDrawerClose = document.getElementById('mobile-drawer-close');
    this.mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Partner name injection
    document.querySelectorAll('.partner-name-text').forEach(el => {
      el.textContent = RomanticConfig.partnerName;
    });
  }

  bindEvents() {
    // Mobile Navigation Drawer Events
    if (this.mobileNavToggle && this.mobileNavDrawer) {
      this.mobileNavToggle.addEventListener('click', () => {
        this.mobileNavDrawer.classList.add('active');
        window.romanticAudio.playSparkle();
      });
    }

    const closeDrawer = () => {
      if (this.mobileNavDrawer) {
        this.mobileNavDrawer.classList.remove('active');
      }
    };

    if (this.mobileDrawerClose) this.mobileDrawerClose.addEventListener('click', closeDrawer);
    if (this.mobileDrawerBackdrop) this.mobileDrawerBackdrop.addEventListener('click', closeDrawer);

    if (this.mobileNavLinks) {
      this.mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => closeDrawer());
      });
    }

    // 3D Gift Box Entrance Unlock
    const unlock = () => this.unlockSurprise();
    if (this.giftBox3D) this.giftBox3D.addEventListener('click', unlock);
    if (this.btnOpenGift) this.btnOpenGift.addEventListener('click', unlock);

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

    // Sky Lantern Wish Launch
    if (this.btnLaunchLantern) {
      this.btnLaunchLantern.addEventListener('click', () => this.handleLaunchLantern());
    }
    if (this.lanternWishInput) {
      this.lanternWishInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.handleLaunchLantern();
      });
    }

    // Mood chips selection
    this.moodChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.moodChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.selectedMood = chip.dataset.mood;
        window.romanticAudio.playSparkle();
      });
    });

    // Send WhatsApp Message Button
    if (this.btnSendWhatsapp) {
      this.btnSendWhatsapp.addEventListener('click', () => this.handleSendWhatsApp());
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
    // Isometric Gift box lid lift animation
    const giftBox = document.querySelector('.gift-box-stage');
    if (giftBox) giftBox.classList.add('opened');

    // Play Sparkle sound & start music
    window.romanticAudio.playSparkle();
    window.romanticAudio.play();
    this.updateMusicUI(true);

    // Initial celebratory sparkle explosion
    if (window.romanticVisuals) {
      window.romanticVisuals.fireBirthdayCelebration();
    }

    setTimeout(() => {
      if (this.entranceOverlay) {
        this.entranceOverlay.classList.add('unlocked');
      }
      // Start Typewriter for Hero Tagline
      this.typeWriter(this.heroTypewriterText, RomanticConfig.heroTagline, 22);
    }, 600);
  }

  updateMusicUI(isPlaying) {
    if (this.musicBar) {
      if (isPlaying) {
        this.musicBar.classList.add('playing');
        if (this.musicPlayIcon) this.musicPlayIcon.style.display = 'none';
        if (this.musicPauseIcon) this.musicPauseIcon.style.display = 'block';
      } else {
        this.musicBar.classList.remove('playing');
        if (this.musicPlayIcon) this.musicPlayIcon.style.display = 'block';
        if (this.musicPauseIcon) this.musicPauseIcon.style.display = 'none';
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

    window.romanticAudio.playBlowCandle();

    if (window.romanticVisuals) {
      window.romanticVisuals.fireBirthdayCelebration();
    }

    if (this.wishRevealBox) {
      setTimeout(() => {
        this.wishRevealBox.classList.add('show');
        this.wishRevealBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        // Typewriter on blessing
        this.typeWriter(this.wishTypewriterText, RomanticConfig.wishRevealQuote, 25);
      }, 700);
    }
  }

  handleLaunchLantern() {
    const wishText = this.lanternWishInput ? this.lanternWishInput.value.trim() : "";
    const finalWish = wishText || "Forever happiness and love with you";

    // Launch glowing lantern into the starry sky
    if (window.romanticVisuals) {
      window.romanticVisuals.launchSkyLantern(finalWish);
    }
    window.romanticAudio.playLanternWhoosh();

    if (this.lanternWishInput) {
      this.lanternWishInput.value = "";
      this.lanternWishInput.placeholder = "Your wish is floating to the stars! Write another?";
    }

    setTimeout(() => {
      window.romanticAudio.playSparkle();
    }, 700);
  }

  handleSendWhatsApp() {
    const userMessage = this.replyMessageInput ? this.replyMessageInput.value.trim() : "";
    const mood = this.selectedMood || "Loved every second of this! 💕";

    let text = `*Birthday Surprise Reply* ❤️\n\n`;
    text += `*Mood:* ${mood}\n`;
    if (userMessage) {
      text += `*Message:* "${userMessage}"\n\n`;
    } else {
      text += `*Message:* Thank you so much for the wonderful birthday surprise! You made my day so special.\n\n`;
    }
    text += `— From ${RomanticConfig.partnerName}`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${RomanticConfig.whatsAppNumber}?text=${encoded}`;

    window.romanticAudio.playSparkle();
    window.open(waUrl, '_blank');
  }

  typeWriter(element, text, speed = 30, callback) {
    if (!element) return;
    element.innerHTML = "";
    let i = 0;
    
    // Create cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    element.appendChild(cursor);

    function type() {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text.charAt(i));
        i++;
        setTimeout(type, speed + (Math.random() * 15 - 7));
      } else {
        setTimeout(() => cursor.remove(), 2500);
        if (callback) callback();
      }
    }
    type();
  }

  renderReasons() {
    const container = document.getElementById('reasons-grid');
    if (!container) return;

    container.innerHTML = RomanticConfig.reasons.map((r) => `
      <div class="reason-card" onclick="this.classList.toggle('flipped'); window.romanticAudio.playHeartPop();">
        <div class="reason-inner">
          <div class="reason-front">
            <div>
              <span class="reason-number">REASON ${r.number}</span>
              <div class="reason-svg-icon">${r.iconSvg}</div>
              <h3 class="reason-front-title">${r.title}</h3>
            </div>
            <div class="reason-front-hint">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
              </svg>
              <span>Tap to reveal note</span>
            </div>
          </div>
          <div class="reason-back">
            <div>
              <span class="reason-number">REASON ${r.number}</span>
              <p class="reason-body" style="margin-top: 12px;">${r.body}</p>
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
