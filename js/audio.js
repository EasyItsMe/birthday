/**
 * Romantic Audio System:
 * - Plays user's custom romantic music track (music.mp3) with HTML5 Audio
 * - Web Audio API fallback & atmospheric chord synth
 * - Interactive Sound FX (Candle Blow, Heart Pop, Sparkle, Sky Lantern Whoosh)
 */

class RomanticAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.analyser = null;
    this.synthTimer = null;
    this.synthStep = 0;

    // Track index: 0 is User's Custom Music, 1 & 2 are Ambient Synthesizer Melodies
    this.currentTrackIndex = 0;
    
    // HTML5 Audio element for custom MP3
    this.audioElement = new Audio();
    this.audioElement.loop = true;
    this.audioElement.preload = 'auto';
    this.audioElement.volume = 0.7;

    // Try multiple possible paths for the mp3 file
    const potentialPaths = ['assets/music.mp3', 'js/music.mp3', 'music.mp3'];
    this.mp3Src = potentialPaths[0];
    this.audioElement.src = this.mp3Src;

    this.tracks = [
      {
        name: "Our Favorite Song 🎵",
        type: "audio-file",
        src: "assets/music.mp3"
      },
      {
        name: "Moonlit Melody ✨",
        type: "synth",
        tempo: 68,
        progression: [
          { bass: 174.61, chord: [349.23, 440.0, 523.25, 659.25], melody: [659.25, 523.25, 440.0, 523.25] },
          { bass: 196.00, chord: [392.00, 493.88, 587.33, 659.25], melody: [587.33, 493.88, 392.00, 493.88] },
          { bass: 164.81, chord: [329.63, 392.00, 493.88, 587.33], melody: [587.33, 493.88, 392.00, 440.00] },
          { bass: 220.00, chord: [329.63, 440.00, 523.25, 659.25], melody: [659.25, 783.99, 659.25, 523.25] }
        ]
      },
      {
        name: "Warm Velvet Glow 🌹",
        type: "synth",
        tempo: 60,
        progression: [
          { bass: 138.59, chord: [277.18, 349.23, 415.30, 523.25], melody: [523.25, 415.30, 349.23, 415.30] },
          { bass: 116.54, chord: [233.08, 277.18, 349.23, 415.30], melody: [415.30, 349.23, 277.18, 349.23] },
          { bass: 155.56, chord: [311.13, 369.99, 466.16, 554.37], melody: [554.37, 466.16, 369.99, 466.16] },
          { bass: 207.65, chord: [329.63, 415.30, 523.25, 622.25], melody: [622.25, 523.25, 415.30, 349.23] }
        ]
      }
    ];

    // Handle mp3 error fallback
    this.audioElement.addEventListener('error', () => {
      console.warn('MP3 load failed, attempting fallback path or synth...');
      if (this.currentTrackIndex === 0) {
        this.currentTrackIndex = 1; // Fallback to synth
        if (this.isPlaying) this.playCurrentTrack();
      }
    });
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  play() {
    this.initContext();
    this.isPlaying = true;
    this.playCurrentTrack();
  }

  playCurrentTrack() {
    const track = this.tracks[this.currentTrackIndex];
    if (track.type === 'audio-file') {
      // Pause any ongoing synth
      if (this.synthTimer) {
        clearTimeout(this.synthTimer);
        this.synthTimer = null;
      }
      this.audioElement.play().catch(e => {
        console.log("Audio autoplay prevented or file loading issue:", e);
      });
    } else {
      // Pause audio element and start Web Audio synth
      this.audioElement.pause();
      this.synthStep = 0;
      this.scheduleNextSynthBar();
    }
  }

  pause() {
    this.isPlaying = false;
    this.audioElement.pause();
    if (this.synthTimer) {
      clearTimeout(this.synthTimer);
      this.synthTimer = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  setVolume(val) {
    const clamped = Math.max(0, Math.min(1, val));
    this.audioElement.volume = clamped;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(clamped * 0.5, this.ctx.currentTime, 0.05);
    }
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    if (this.isPlaying) {
      this.playCurrentTrack();
    }
    return this.tracks[this.currentTrackIndex].name;
  }

  getCurrentTrackName() {
    return this.tracks[this.currentTrackIndex].name;
  }

  scheduleNextSynthBar() {
    if (!this.isPlaying || !this.ctx) return;

    const track = this.tracks[this.currentTrackIndex];
    if (!track.progression) return;

    const bar = track.progression[this.synthStep % track.progression.length];
    const barDuration = (60 / track.tempo) * 4;
    const now = this.ctx.currentTime;

    this.playTone(bar.bass, now, barDuration * 0.9, 'triangle', 0.25, 0.04, 0.8);

    bar.chord.forEach((freq, idx) => {
      const offset = idx * 0.06;
      this.playTone(freq, now + offset, barDuration * 0.85, 'sine', 0.14, 0.08, 0.6);
    });

    const noteTime = barDuration / bar.melody.length;
    bar.melody.forEach((freq, idx) => {
      const noteStart = now + idx * noteTime;
      this.playTone(freq, noteStart, noteTime * 0.8, 'sine', 0.16, 0.02, 0.4);
    });

    this.synthStep++;
    const nextTimeout = (barDuration - 0.1) * 1000;
    this.synthTimer = setTimeout(() => {
      this.scheduleNextSynthBar();
    }, nextTimeout);
  }

  playTone(freq, startTime, duration, type = 'sine', gainLevel = 0.2, attack = 0.05, decay = 0.5) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel, startTime + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }

  playSparkle() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, i) => {
      this.playTone(freq, now + i * 0.06, 0.3, 'sine', 0.12, 0.01, 0.15);
    });
  }

  playBlowCandle() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    try {
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.6);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(120, now + 0.5);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.4, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(now);
    } catch (e) {
      console.log('Noise buffer error', e);
    }

    setTimeout(() => {
      this.playSparkle();
    }, 400);
  }

  playHeartPop() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const pitch = 440 + Math.random() * 200;
    this.playTone(pitch, now, 0.25, 'sine', 0.15, 0.01, 0.1);
    this.playTone(pitch * 1.5, now + 0.05, 0.25, 'sine', 0.12, 0.01, 0.1);
  }

  playLanternWhoosh() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 1.2);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.3);
  }
}

window.romanticAudio = new RomanticAudio();
