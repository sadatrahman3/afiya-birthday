const BIRTH_MONTH = 5, BIRTH_DAY = 13, BIRTH_YEAR = 2005;

// ===== TRANSLATIONS =====
const i18n = {
  en: {
    cdTitle: 'Afiya Mubassira',
    cdBorn: 'Born',
    cdCurrently: 'Currently',
    cdYearsOld: 'years old',
    cdTurning: 'Turning',
    cdGiftArrives: 'Her gift arrives in...',
    cdDays: 'Days', cdHours: 'Hours', cdMins: 'Minutes', cdSecs: 'Seconds',
    cdMessage: 'Something beautiful is being wrapped just for her.\nCome back on her special day to unwrap it.',
    cdPreview: 'Preview the surprise',
    bdTitle: 'Happy Birthday!',
    bdYouAre: 'You are',
    bdToday: 'today!',
    bdBadge: '🎂 June 13',
    bdOpenGift: 'Open Your Gift',
    cardsTitle: 'Pick a card, any card...',
    cardGrace: 'Grace', cardRadiant: 'Radiant', cardDreamer: 'Dreamer', cardJoy: 'Joy',
    wishGrace: 'Like a flower in full bloom, your grace touches everyone around you. May your year be filled with beauty, love, and boundless joy.',
    wishRadiant: 'You shine brighter than the stars. Your energy, your laugh, your heart — the world is luckier because you are in it. Keep glowing.',
    wishDreamer: 'Dream big, beautiful soul. Every door you knock on will open, every path you take will lead to something extraordinary.',
    wishJoy: 'Happiness looks beautiful on you. May your 21st year bring belly laughs, late-night talks, surprise adventures, and all the cake!',
    signoff1: '— With love & admiration',
    signoff2: '— Forever proud of you',
    signoff3: '— Chase every star',
    signoff4: '— Cheers to you!',
    wishName: 'Happy Birthday, Afiya!',
    wishSub: "You're",
    wishSub2: 'today — June 13',
    btnGallery: 'View Memories',
    btnCake: 'Blow Candles',
    btnShare: 'Share Card',
    galleryTitle: "Afiya's Memories",
    cakeTitle: 'Blow the Candles!',
    cakeSub: 'Click each candle to make a wish ✨',
    cakeLeft: 'Candles left:',
    cakeDone: 'Your wish has been made!',
    cpTitle: 'Settings',
    cpLang: 'Language',
    cpFireworks: 'Fireworks',
    cpSparkles: 'Sparkles',
    shareLoading: 'Preparing your card...',
    shareFail: 'Share not supported on this device',
    galleryOf: 'of',
  },
  bn: {
    cdTitle: 'আফিয়া মুবাসসিরা',
    cdBorn: 'জন্ম',
    cdCurrently: 'বর্তমানে বয়স',
    cdYearsOld: 'বছর',
    cdTurning: 'হবে',
    cdGiftArrives: 'তার উপহার আসছে...',
    cdDays: 'দিন', cdHours: 'ঘন্টা', cdMins: 'মিনিট', cdSecs: 'সেকেন্ড',
    cdMessage: 'তার জন্য কিছু সুন্দর মোড়ানো হচ্ছে।\nতার বিশেষ দিনে এসে উপহার খোলো।',
    cdPreview: 'চমকটি দেখো',
    bdTitle: 'শুভ জন্মদিন!',
    bdYouAre: 'তুমি আজ',
    bdToday: 'বছরের!',
    bdBadge: '🎂 ১৩ জুন',
    bdOpenGift: 'তোমার উপহার খোলো',
    cardsTitle: 'একটা কার্ড বাছো...',
    cardGrace: 'সৌন্দর্য', cardRadiant: 'উজ্জ্বল', cardDreamer: 'স্বপ্নবাজ', cardJoy: 'আনন্দ',
    wishGrace: 'ফুলের মতো তোমার সৌন্দর্য সবার মন ছুঁয়ে যায়। তোমার বছরটি সুন্দরতা, ভালোবাসা এবং আনন্দে ভরে উঠুক।',
    wishRadiant: 'তুমি তারাদের চেয়েও উজ্জ্বল। তোমার হাসি, তোমার মন—পৃথিবী তোমার জন্য ধন্য। সবসময় জ্বলজ্বল করো।',
    wishDreamer: 'বড় স্বপ্ন দেখো, সুন্দর আত্মা। তুমি যে দরজায় কড়া নাড়বে, সেটাই খুলবে। অসাধারণ কিছু তোমার জন্যই অপেক্ষা করছে।',
    wishJoy: 'সুখ তোমাকে খুব মানায়। তোমার ২১তম বছর হাসি, গল্প আর কেকএ ভরে উঠুক!',
    signoff1: '— ভালোবাসা ও শ্রদ্ধায়',
    signoff2: '— তোমার জন্য গর্বিত',
    signoff3: '— সব তারার পিছে ছুটো',
    signoff4: '— তোমার জন্য শুভকামনা!',
    wishName: 'শুভ জন্মদিন, আফিয়া!',
    wishSub: 'তুমি আজ',
    wishSub2: 'বছরের — ১৩ জুন',
    btnGallery: 'স্মৃতি দেখো',
    btnCake: 'মোমবাতি নিভাও',
    btnShare: 'শেয়ার করো',
    galleryTitle: 'আফিয়ার স্মৃতি',
    cakeTitle: 'মোমবাতি নিভাও!',
    cakeSub: 'প্রতিটি মোমবাতিতে ক্লিক করে ইচ্ছে করো ✨',
    cakeLeft: 'বাকি মোমবাতি:',
    cakeDone: 'তোমার ইচ্ছে পূরণ হয়েছে! 🎉',
    cpTitle: 'সেটিংস',
    cpLang: 'ভাষা',
    cpFireworks: 'আতশবাজি',
    cpSparkles: 'চমক',
    shareLoading: 'তোমার কার্ড তৈরি হচ্ছে...',
    shareFail: 'এই ডিভাইসে শেয়ার সমর্থিত নয়',
    galleryOf: 'এর',
  }
};

// ===== CARD DATA =====
const cardData = [
  {
    icon: '🌸', labelKey: 'cardGrace', bg: 'linear-gradient(135deg, #ff6b9d, #c44dff)', wishIcon: '🌸',
    wishKey: 'wishGrace', signoffKey: 'signoff1'
  },
  {
    icon: '🌟', labelKey: 'cardRadiant', bg: 'linear-gradient(135deg, #ffd700, #ff8c42)', wishIcon: '🌟',
    wishKey: 'wishRadiant', signoffKey: 'signoff2'
  },
  {
    icon: '💫', labelKey: 'cardDreamer', bg: 'linear-gradient(135deg, #00d4ff, #7c5cff)', wishIcon: '💫',
    wishKey: 'wishDreamer', signoffKey: 'signoff3'
  },
  {
    icon: '🌺', labelKey: 'cardJoy', bg: 'linear-gradient(135deg, #ff6b9d, #ff3c6f)', wishIcon: '🌺',
    wishKey: 'wishJoy', signoffKey: 'signoff4'
  }
];

const photos = [
  'photos/1781294950083.jpg',
  'photos/Messenger_creation_64DA5B69-0607-4C82-AF5B-554CD3E01859.jpeg',
  'photos/Messenger_creation_174C40C3-9BE3-4BBA-8556-1989732F442E.jpeg',
  'photos/Messenger_creation_135E22A6-D009-43FB-B451-BCA75E7B9ACB.jpeg',
  'photos/Messenger_creation_DE44ABE9-5A45-4AD4-AB1F-22AF198B37F0.jpeg',
  'photos/Messenger_creation_5D24168D-CE0B-4F5F-BD6E-189F2F3458E5.jpeg',
  'photos/Messenger_creation_B48CDC05-6DE7-4C48-BA49-CEB2189E6694.jpeg'
];

// ===== STATE =====
let currentLang = 'en';
let settings = { lang: 'en', fireworks: true, sparkles: true };
let navHistory = [];
let galleryIdx = 0, galleryInterval = null;
let cardsBuilt = false;
let fireworksActive = false;
let sparklesEnabled = true;
let candlesLeft = 5;
let fwCanvas, fwCtx, fwAnimId = null;
let fireworksLaunched = [];

// ===== DATE HELPERS =====
function getToday() { const t = new Date(); return { year: t.getFullYear(), month: t.getMonth(), day: t.getDate(), date: t }; }
function isBirthday(today) { return today.month === BIRTH_MONTH && today.day === BIRTH_DAY; }
function getAge() {
  const t = new Date(); let age = t.getFullYear() - BIRTH_YEAR;
  const mDiff = t.getMonth() - BIRTH_MONTH;
  if (mDiff < 0 || (mDiff === 0 && t.getDate() < BIRTH_DAY)) age--;
  return age;
}
function getNextBirthday(now) {
  let by = now.getFullYear();
  if (now.getMonth() > BIRTH_MONTH || (now.getMonth() === BIRTH_MONTH && now.getDate() > BIRTH_DAY)) by++;
  return new Date(by, BIRTH_MONTH, BIRTH_DAY);
}

// ===== SCREEN NAVIGATION =====
function showScreen(id, direction) {
  const all = document.querySelectorAll('.screen');
  const dir = direction || 'fade';

  all.forEach(s => {
    s.classList.remove('visible');
    s.setAttribute('data-trans', 'none');
  });

  const target = document.getElementById(id);
  target.setAttribute('data-trans', dir);
  void target.offsetWidth;
  target.classList.add('visible');

  const backBtn = document.getElementById('backBtn');
  if (id === 'countdownScreen' || id === 'birthdayScreen') {
    backBtn.classList.add('hidden');
  } else {
    backBtn.classList.remove('hidden');
  }

  if (id !== 'galleryScreen') stopGalleryAutoPlay();

  // sparkles disabled on gallery
  sparklesEnabled = (id !== 'galleryScreen') && settings.sparkles;
}

function goBack() {
  if (navHistory.length < 2) return;
  navHistory.pop();
  const prev = navHistory[navHistory.length - 1];
  showScreen(prev, 'slide-right');
}

document.getElementById('backBtn').addEventListener('click', goBack);

// ===== COUNTDOWN =====
function updateCountdown() {
  const now = new Date(); const next = getNextBirthday(now);
  const diff = next.getTime() - now.getTime(); if (diff <= 0) return;
  const totalSec = Math.floor(diff / 1000);
  document.getElementById('cdDays').textContent  = String(Math.floor(totalSec / 86400)).padStart(2,'0');
  document.getElementById('cdHours').textContent = String(Math.floor((totalSec % 86400) / 3600)).padStart(2,'0');
  document.getElementById('cdMins').textContent  = String(Math.floor((totalSec % 3600) / 60)).padStart(2,'0');
  document.getElementById('cdSecs').textContent  = String(totalSec % 60).padStart(2,'0');
}
function initCountdown() {
  const currentAge = getAge();
  document.getElementById('cdCurrentAge').textContent = currentAge;
  document.getElementById('cdNextAge').textContent = currentAge + 1;
  updateCountdown(); setInterval(updateCountdown, 1000);
}

// ===== BIRTHDAY =====
function initBirthdayScreen() {
  const age = getAge();
  const bdAge = document.getElementById('bdAge');
  const bdYear = document.getElementById('bdYear');
  if (bdAge) bdAge.textContent = age;
  if (bdYear) bdYear.textContent = new Date().getFullYear();
  if (settings.fireworks) launchFireworksBurst();
}
function goToCardSelection() {
  const box = document.getElementById('giftBox');
  if (!box) return;
  box.classList.add('pulse');
  setTimeout(() => {
    navHistory.push('cardScreen');
    showScreen('cardScreen', 'slide-left');
    buildCards();
  }, 400);
}

// ===== EVENT LISTENERS =====
function bindListeners() {
  const $ = id => document.getElementById(id);
  const previewBtn = $('previewBtn');
  const giftBtn = $('giftBtn');
  const giftBox = $('giftBox');

  if (previewBtn) previewBtn.addEventListener('click', () => {
    showScreen('birthdayScreen', 'fade');
    initBirthdayScreen();
  });

  if (giftBtn) giftBtn.addEventListener('click', goToCardSelection);
  if (giftBox) giftBox.addEventListener('click', goToCardSelection);
}

// ===== CARDS =====
function buildCards() {
  if (cardsBuilt) return; cardsBuilt = true;
  const deck = document.getElementById('cardsDeck');
  cardData.forEach((data, idx) => {
    const card = document.createElement('div'); card.className = 'folded-card';
    card.innerHTML = `<div class="card-front" style="background:${data.bg}"><div class="card-ribbon">🎀</div><div class="card-icon">${data.icon}</div><div class="card-label" data-i18n="${data.labelKey}"></div><div class="card-shine"></div></div>`;
    card.addEventListener('click', () => openCard(idx));
    deck.appendChild(card);
  });
  applyLanguage(currentLang);
}

// ===== OPEN CARD =====
function openCard(index) {
  const data = cardData[index];
  const container = document.getElementById('unfoldedCard');
  burstConfetti();
  if (settings.fireworks) launchFireworksBurst();

  const age = getAge();
  container.innerHTML = `
    <div class="unfolded-card-inner" style="background:${data.bg};">
      <button class="close-btn" id="closeUnfolded">✕</button>
      <div class="wish-icon">${data.wishIcon}</div>
      <div class="wish-name" data-i18n="wishName">Happy Birthday, Afiya!</div>
      <div class="wish-sub"><span data-i18n="wishSub">You're</span> ${age} <span data-i18n="wishSub2">today — June 13</span></div>
      <div class="wish-msg" data-i18n="${data.wishKey}">${i18n.en[data.wishKey]}</div>
      <div class="wish-signoff" data-i18n="${data.signoffKey}">${i18n.en[data.signoffKey]}</div>
      <div class="unfolded-card-buttons">
        <button class="gallery-btn" id="galleryBtn" data-i18n="btnGallery">📸 View Memories</button>
        <button class="cake-btn" id="cakeBtn" data-i18n="btnCake">🎂 Blow Candles</button>
        <button class="share-btn" id="shareBtn" data-i18n="btnShare">📤 Share Card</button>
      </div>
    </div>`;

  navHistory.push('unfoldScreen');
  showScreen('unfoldScreen', 'slide-left');
  applyLanguage(currentLang);

  document.getElementById('closeUnfolded').addEventListener('click', goBack);
  document.getElementById('galleryBtn').addEventListener('click', openGallery);
  document.getElementById('cakeBtn').addEventListener('click', openCakeScreen);
  document.getElementById('shareBtn').addEventListener('click', shareCard);

  setTimeout(() => {
    const inner = container.querySelector('.unfolded-card-inner'); if (!inner) return;
    for (let i = 0; i < 16; i++) {
      const s = document.createElement('div'); s.className = 'unfolded-sparkle';
      const angle = Math.random() * 360; const dist = 70 + Math.random() * 100;
      s.style.setProperty('--dx', Math.cos(angle * Math.PI / 180) * dist + 'px');
      s.style.setProperty('--dy', Math.sin(angle * Math.PI / 180) * dist + 'px');
      s.style.left = '50%'; s.style.top = '50%';
      s.style.background = ['#ffd700','#ff6b9d','#fff','#c44dff'][Math.floor(Math.random()*4)];
      s.style.width = (4 + Math.random() * 5) + 'px'; s.style.height = s.style.width;
      inner.appendChild(s); setTimeout(() => s.remove(), 1000);
    }
  }, 500);
}

// ===== CAKE / BLOW CANDLES =====
function openCakeScreen() {
  navHistory.push('cakeScreen');
  showScreen('cakeScreen', 'slide-up');
  initCake();
}

function initCake() {
  candlesLeft = 5;
  const stage = document.getElementById('cakeStage');
  const msg = document.getElementById('cakeMsg');
  msg.classList.remove('show');
  msg.textContent = '';

  const sprinklesColors = ['#ff6b9d','#ffd700','#00d4ff','#7cff7c','#c44dff','#fff'];
  const sprinklesHtml = [];
  for (let i = 0; i < 30; i++) {
    sprinklesHtml.push(`<div class="cake-sprinkle" style="top:${Math.random()*90}%;left:${Math.random()*90}%;background:${sprinklesColors[i%sprinklesColors.length]};width:${4+Math.random()*4}px;height:${4+Math.random()*4}px;border-radius:${Math.random()>0.5?'50%':'2px'};"></div>`);
  }

  stage.innerHTML = `
    <div class="cake-base">
      <div class="cake-tier cake-tier-3">
        <div class="cake-frosting-wavy"></div>
        <div class="cake-sprinkles">${sprinklesHtml.slice(0,12).join('')}</div>
      </div>
      <div class="cake-tier cake-tier-2">
        <div class="cake-frosting"></div>
        <div class="cake-sprinkles">${sprinklesHtml.slice(12,22).join('')}</div>
      </div>
      <div class="cake-tier cake-tier-1">
        <div class="cake-frosting"></div>
        <div class="cake-sprinkles">${sprinklesHtml.slice(22).join('')}</div>
      </div>
      <div class="candles-row" id="candlesRow">
        <div class="candle" data-candle="0"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div>
        <div class="candle" data-candle="1"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div>
        <div class="candle" data-candle="2"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div>
        <div class="candle" data-candle="3"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div>
        <div class="candle" data-candle="4"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div>
      </div>
    </div>`;

  document.querySelectorAll('.candle').forEach(c => {
    c.addEventListener('click', () => extinguishCandle(c));
  });

  updateCandleCounter();
}

function extinguishCandle(el) {
  if (el.classList.contains('extinguished')) return;
  el.classList.add('extinguished');
  candlesLeft--;
  updateCandleCounter();
  if (candlesLeft <= 0) {
    burstConfetti();
    if (settings.fireworks) launchFireworksBurst();
    setTimeout(() => {
      document.getElementById('cakeMsg').textContent = i18n[currentLang].cakeDone;
      document.getElementById('cakeMsg').classList.add('show');
    }, 400);
    setTimeout(() => {
      if (navHistory.length >= 2) {
        const prev = navHistory[navHistory.length - 2];
        showScreen(prev, 'slide-down');
        navHistory.pop();
      }
    }, 2500);
  }
}

function updateCandleCounter() {
  const el = document.getElementById('candleCounter');
  if (el) el.innerHTML = `${i18n[currentLang].cakeLeft} <span>${candlesLeft}/5</span>`;
}

// ===== GALLERY =====
function openGallery() {
  galleryIdx = 0;
  navHistory.push('galleryScreen');
  showScreen('galleryScreen', 'slide-left');
  buildGalleryDots();
  showGallerySlide(0);
  startGalleryAutoPlay();
}

function buildGalleryDots() {
  const container = document.getElementById('galleryDots');
  container.innerHTML = '';
  photos.forEach((_, i) => {
    const dot = document.createElement('div'); dot.className = 'gallery-dot';
    dot.addEventListener('click', () => { showGallerySlide(i); resetGalleryAutoPlay(); });
    container.appendChild(dot);
  });
}

function showGallerySlide(idx) {
  galleryIdx = (idx + photos.length) % photos.length;
  const img = document.getElementById('galleryImg');
  img.classList.remove('active');
  void img.offsetWidth;
  img.src = photos[galleryIdx];
  setTimeout(() => img.classList.add('active'), 50);
  document.querySelectorAll('.gallery-dot').forEach((d, i) => d.classList.toggle('active', i === galleryIdx));
  document.getElementById('galleryCounter').textContent = `${galleryIdx + 1} / ${photos.length}`;
}

document.getElementById('galleryPrev').addEventListener('click', () => { showGallerySlide(galleryIdx - 1); resetGalleryAutoPlay(); });
document.getElementById('galleryNext').addEventListener('click', () => { showGallerySlide(galleryIdx + 1); resetGalleryAutoPlay(); });
document.getElementById('galleryClose').addEventListener('click', goBack);

document.addEventListener('keydown', (e) => {
  const gal = document.getElementById('galleryScreen');
  if (gal.classList.contains('visible')) {
    if (e.key === 'ArrowLeft') { showGallerySlide(galleryIdx - 1); resetGalleryAutoPlay(); }
    else if (e.key === 'ArrowRight') { showGallerySlide(galleryIdx + 1); resetGalleryAutoPlay(); }
    else if (e.key === 'Escape') { goBack(); }
  }
});

(function() {
  let startX = 0;
  document.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
  document.addEventListener('touchend', (e) => {
    const gal = document.getElementById('galleryScreen');
    if (!gal.classList.contains('visible')) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) { showGallerySlide(galleryIdx + 1); resetGalleryAutoPlay(); }
      else { showGallerySlide(galleryIdx - 1); resetGalleryAutoPlay(); }
    }
  });
})();

function startGalleryAutoPlay() { stopGalleryAutoPlay(); galleryInterval = setInterval(() => showGallerySlide(galleryIdx + 1), 3500); }
function stopGalleryAutoPlay() { if (galleryInterval) { clearInterval(galleryInterval); galleryInterval = null; } }
function resetGalleryAutoPlay() { startGalleryAutoPlay(); }

// ===== SHARE CARD =====
async function shareCard() {
  const loading = document.getElementById('shareLoading');
  loading.classList.add('show');

  try {
    const card = document.querySelector('.unfolded-card-inner');
    if (!card) return;

    if (typeof html2canvas === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      await new Promise((res, rej) => { script.onload = res; script.onerror = rej; document.head.appendChild(script); });
    }

    const canvas = await html2canvas(card, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
      allowTaint: false
    });
    loading.classList.remove('show');

    canvas.toBlob(async (blob) => {
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], 'birthday-wish.png', { type: 'image/png' })] })) {
        try {
          await navigator.share({ title: 'Happy Birthday Afiya!', files: [new File([blob], 'birthday-wish.png', { type: 'image/png' })] });
        } catch (e) { if (e.name !== 'AbortError') downloadBlob(blob); }
      } else {
        downloadBlob(blob);
      }
    }, 'image/png');
  } catch (e) {
    loading.classList.remove('show');
    alert(i18n[currentLang].shareFail);
  }
}

function downloadBlob(blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'birthday-wish-afiya.png';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

// ===== SPARKLE TRAIL =====
(function() {
  let timeout;

  document.addEventListener('mousemove', (e) => {
    if (!sparklesEnabled) return;
    clearTimeout(timeout);
    timeout = setTimeout(() => spawnSparkle(e.clientX, e.clientY), 30);
  });

  document.addEventListener('touchmove', (e) => {
    if (!sparklesEnabled) return;
    const touch = e.touches[0];
    spawnSparkle(touch.clientX, touch.clientY);
  }, { passive: true });
})();

let sparkleCount = 0;
function spawnSparkle(x, y) {
  if (sparkleCount > 20) return;
  sparkleCount++;

  const el = document.createElement('div');
  el.className = 'sparkle-particle';
  const colors = ['#ffd700','#ff6b9d','#c44dff','#00d4ff','#fff','#7cff7c'];
  const size = 3 + Math.random() * 6;
  const angle = Math.random() * Math.PI * 2;
  const dist = 20 + Math.random() * 40;

  el.style.left = x + 'px';
  el.style.top = y + 'px';
  el.style.width = size + 'px';
  el.style.height = size + 'px';
  el.style.background = colors[Math.floor(Math.random() * colors.length)];
  el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
  el.style.setProperty('--sx', Math.cos(angle) * dist + 'px');
  el.style.setProperty('--sy', Math.sin(angle) * dist - 30 + 'px');
  el.style.boxShadow = `0 0 6px ${el.style.background}`;

  document.body.appendChild(el);
  setTimeout(() => { el.remove(); sparkleCount--; }, 800);
}

// ===== FIREWORKS =====
function initFireworks() {
  fwCanvas = document.getElementById('fireworksCanvas');
  fwCtx = fwCanvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
  if (!fwCanvas) return;
  fwCanvas.width = window.innerWidth;
  fwCanvas.height = window.innerHeight;
}

function launchFireworksBurst() {
  if (!settings.fireworks) return;
  if (!fwCanvas) return;
  lastFwTime = Date.now();
  const count = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const x = fwCanvas.width * (0.15 + Math.random() * 0.7);
      const y = fwCanvas.height * (0.1 + Math.random() * 0.3);
      createExplosion(x, y);
    }, i * 300);
  }
  if (!fireworksActive) { fireworksActive = true; animateFireworks(); }
}

function createExplosion(x, y) {
  const colors = ['#ff6b9d','#ffd700','#c44dff','#00d4ff','#ff8c42','#7cff7c','#fff','#ff4444'];
  const count = 50 + Math.floor(Math.random() * 30);
  const particles = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 80 + Math.random() * 200;
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: 0.008 + Math.random() * 0.012,
      size: 2 + Math.random() * 3,
      color
    });
  }
  // rocket trail
  for (let i = 0; i < 10; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 20 + Math.random() * 50;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: 0.02 + Math.random() * 0.03,
      size: 1 + Math.random() * 2,
      color: '#ffd700'
    });
  }
  fireworksLaunched.push(...particles);
}

function animateFireworks() {
  fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);

  fireworksLaunched = fireworksLaunched.filter(p => p.life > 0);

  fireworksLaunched.forEach(p => {
    p.x += p.vx * 0.016;
    p.y += p.vy * 0.016;
    p.vy += 120 * 0.016;
    p.life -= p.decay;

    fwCtx.globalAlpha = p.life;
    fwCtx.beginPath();
    fwCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
    fwCtx.fillStyle = p.color;
    fwCtx.fill();
  });
  fwCtx.globalAlpha = 1;

  if (fireworksLaunched.length > 0 || Date.now() - lastFwTime < 3000) {
    fwAnimId = requestAnimationFrame(animateFireworks);
  } else {
    fireworksActive = false;
    fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
  }
}

let lastFwTime = Date.now();

document.getElementById('fwBtn').addEventListener('click', () => {
  lastFwTime = Date.now();
  if (!fireworksActive) { fireworksActive = true; animateFireworks(); }
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      lastFwTime = Date.now();
      const x = fwCanvas.width * (0.1 + Math.random() * 0.8);
      const y = fwCanvas.height * (0.1 + Math.random() * 0.3);
      createExplosion(x, y);
    }, i * 400);
  }
});

// ===== BURST CONFETTI =====
function burstConfetti() {
  const colors = ['#ffd700','#ff6b9d','#c44dff','#ff8c42','#00d4ff','#7cff7c','#fff'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div'); el.className = 'burst-confetti';
    const angle = Math.random() * 360; const dist = 80 + Math.random() * 200;
    el.style.setProperty('--bx', Math.cos(angle * Math.PI / 180) * dist + 'px');
    el.style.setProperty('--by', Math.sin(angle * Math.PI / 180) * dist + 'px');
    el.style.left = '50%'; el.style.top = '50%';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    const s = 4 + Math.random() * 8; el.style.width = s + 'px'; el.style.height = s + 'px';
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(el); setTimeout(() => el.remove(), 1300);
  }
}

// ===== CONTROL PANEL =====
function initControlPanel() {
  const saved = localStorage.getItem('afiya_settings');
  if (saved) {
    try { settings = JSON.parse(saved); } catch(e) {}
    currentLang = settings.lang;
  }

  applyLanguage(currentLang);
  updateSwitches();

  document.getElementById('cpToggle').addEventListener('click', () => {
    document.getElementById('cpDrawer').classList.toggle('open');
    document.getElementById('cpToggle').classList.toggle('active');
  });
  document.getElementById('cpClose').addEventListener('click', closePanel);

  document.getElementById('switchLang').addEventListener('click', () => {
    settings.lang = settings.lang === 'en' ? 'bn' : 'en';
    currentLang = settings.lang;
    saveSettings();
    applyLanguage(currentLang);
    updateSwitches();
  });

  document.getElementById('switchFw').addEventListener('click', () => {
    settings.fireworks = !settings.fireworks;
    saveSettings();
    updateSwitches();
    if (settings.fireworks) launchFireworksBurst();
  });

  document.getElementById('switchSparkles').addEventListener('click', () => {
    settings.sparkles = !settings.sparkles;
    sparklesEnabled = settings.sparkles;
    saveSettings();
    updateSwitches();
  });
}

function closePanel() {
  document.getElementById('cpDrawer').classList.remove('open');
  document.getElementById('cpToggle').classList.remove('active');
}

function saveSettings() {
  localStorage.setItem('afiya_settings', JSON.stringify(settings));
}

function updateSwitches() {
  document.getElementById('switchLang').classList.toggle('on', settings.lang === 'bn');
  document.getElementById('switchFw').classList.toggle('on', settings.fireworks);
  document.getElementById('switchSparkles').classList.toggle('on', settings.sparkles);
  const langLabel = document.getElementById('cpLangLabel');
  if (langLabel) langLabel.textContent = settings.lang === 'en' ? 'EN' : 'বাংলা';
}

// ===== MULTI-LANGUAGE =====
function applyLanguage(lang) {
  const t = i18n[lang] || i18n.en;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[key];
      else el.textContent = t[key];
    }
  });

  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';

  // update countdown text
  document.querySelectorAll('[data-i18n-dynamic]').forEach(el => {
    const key = el.dataset.i18nDynamic;
    if (t[key]) el.textContent = t[key];
  });

  updateCandleCounter();
}

// ===== DECORATIONS =====
(function() {
  const decos = ['🎈','🎉','🎊','✨','🌟','💖','🎀','🌸','⭐','💫'];
  const container = document.getElementById('floatingDeco');
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div'); el.className = 'deco';
    el.textContent = decos[Math.floor(Math.random() * decos.length)];
    el.style.setProperty('--x', Math.random() * 100 + '%');
    el.style.setProperty('--dur', (8 + Math.random() * 8) + 's');
    el.style.setProperty('--delay', Math.random() * 12 + 's');
    el.style.fontSize = (1.2 + Math.random() * 1.8) + 'rem';
    container.appendChild(el);
  }
})();
(function() {
  const colors = ['#ff6b9d','#ffd700','#c44dff','#f8b4d9','#00d4ff','#ff6b35','#7cff7c','#ff4444'];
  const container = document.getElementById('confettiContainer');
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div'); el.className = 'confetti-piece';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = Math.random() * 100 + '%';
    const w = 4 + Math.random() * 7; el.style.width = w + 'px';
    el.style.height = (4 + Math.random() * 7) + 'px';
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    el.style.setProperty('--delay', Math.random() * 8 + 's');
    el.style.setProperty('--fall-duration', (3 + Math.random() * 5) + 's');
    container.appendChild(el);
  }
})();

// ===== PWA REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ===== INIT =====
(function() {
  const today = getToday();

  // HACK: force today as birthday for demo (June 13)
  // Remove this line after June 13, 2026:
  // today.month = 5; today.day = 13;

  initFireworks();

  if (isBirthday(today)) {
    navHistory.push('birthdayScreen');
    showScreen('birthdayScreen', 'fade');
    initBirthdayScreen();
  } else {
    navHistory.push('countdownScreen');
    showScreen('countdownScreen', 'fade');
    initCountdown();
  }

  initControlPanel();
  bindListeners();
})();
