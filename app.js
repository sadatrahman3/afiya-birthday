// ===== CONFIGURATION =====
const BIRTH_YEAR = 2005;
const BIRTH_MONTH = 5; // June (0-indexed, so 5 = June)
const BIRTH_DAY = 13;
const TOTAL_CARDS = 100;

// 100 Unique Wishes
// The {year} placeholder will dynamically be replaced by the JS (e.g., "21st", "22nd")
const wishTemplates = [
    "May your {year} be a masterpiece of joy and discovery.",
    "Step into your {year} with the confidence of someone who can move mountains.",
    "This is your {year} to shine brighter than ever before.",
    "May the {year} bring you peace that flows like a river and joy that never ends.",
    "Welcome to the {year}—a blank canvas waiting for your beautiful colors.",
    "May your heart find its rhythm and your soul find its song in your {year}.",
    "Here’s to a {year} of laughing often, loving deeply, and living fully.",
    "May your {year} be filled with late-night talks and morning peace.",
    "Let your {year} be the chapter where you fall in love with your own story.",
    "Wishing you a {year} where every day feels like a small victory.",
    "May your {year} be an adventure that takes your breath away.",
    "Explore boldly in your {year}; the world needs your unique light.",
    "Here’s to the {year} and all the uncharted territories waiting for you.",
    "May your {year} be a journey of a thousand wonderful steps.",
    "Pack your dreams and courage for the {year}; it’s going to be epic.",
    "In your {year}, may you find roads that lead to beautiful sunsets.",
    "May the winds of the {year} always blow you toward new horizons.",
    "Step into the {year} like it’s an open field—run free and wild.",
    "May your {year} be a compass pointing toward your truest self.",
    "Here’s to the {year}—may it be your greatest adventure yet.",
    "In your {year}, may you learn something new and wonderful every single day.",
    "May the {year} bring the kind of wisdom that only comes from living bravely.",
    "Here’s to outgrowing old versions of yourself in the best way possible this {year}.",
    "May your {year} be a garden of growth, watered by grace.",
    "Welcome the {year} as a teacher, and let it make you brilliant.",
    "May the {year} give you the clarity to see your worth and the courage to claim it.",
    "In your {year}, may you bloom fiercely, even in the storms.",
    "Here’s to the {year}—a year of becoming more of who you truly are.",
    "May your mind expand and your spirit soften in this beautiful {year}.",
    "Let the {year} be the season you finally realize how powerful you are.",
    "In your {year}, may you be surrounded by people who feel like home.",
    "May the {year} bring deep connections and soul-nourishing friendships.",
    "Here’s to a {year} of loving without fear and being loved without condition.",
    "May your {year} be a warm embrace from the universe.",
    "In the {year}, may you find beauty in the eyes of those who love you.",
    "May your {year} be a symphony of laughter shared with the best of friends.",
    "Here’s to the {year}—may your circle be small, but your love be vast.",
    "In your {year}, may you be the anchor for others and the sail for yourself.",
    "May the {year} bring you letters, calls, and visits that fill your cup.",
    "Wishing you a {year} of heart-to-hearts and soul-deep connections.",
    "May your {year} give you the strength to overcome any obstacle in your path.",
    "In the {year}, may you find out just how resilient you truly are.",
    "Here’s to a {year} of standing tall, even when the winds blow hard.",
    "May the {year} be the year you rewrite the rules and conquer the game.",
    "In your {year}, may you be a warrior of grace and a pillar of strength.",
    "May the {year} bring you victories, both big and unnoticed.",
    "Here’s to the {year}—may you rise from every stumble stronger than before.",
    "In your {year}, may you find the courage to fight for what matters most.",
    "May the {year} be a testament to your unbreakable spirit.",
    "Wishing you a {year} where you conquer mountains with quiet grace.",
    "May the {year} open doors you never even knew existed.",
    "Here’s to the {year} and the incredible success waiting for you.",
    "In your {year}, may your hard work bloom into brilliant achievements.",
    "May the {year} be the season your dreams finally get their wings.",
    "Welcome to the {year}—your time to thrive, not just survive.",
    "May your {year} be filled with promotions, celebrations, and proud moments.",
    "Here’s to a {year} of unlocking new levels of your own potential.",
    "In your {year}, may you build something that outlasts you.",
    "May the {year} bring you the breakthrough you’ve been praying for.",
    "Wishing you a {year} where your passions turn into your purpose.",
    "May the {year} bring you quiet mornings and a peaceful heart.",
    "In your {year}, may you discover the serenity of letting go.",
    "Here’s to a {year} of breathing deeply and living intentionally.",
    "May the {year} be a sanctuary of calm in a busy world.",
    "In your {year}, may you find stillness that speaks louder than the chaos.",
    "May the {year} bring you the peace that surpasses all understanding.",
    "Here’s to the {year}—may your spirit be anchored and your mind be free.",
    "In your {year}, may your home be your haven and your heart be at rest.",
    "May the {year} be a gentle reminder that you are exactly where you need to be.",
    "Wishing you a {year} of harmony, balance, and quiet grace.",
    "May the {year} be a burst of creative energy and brilliant ideas.",
    "In your {year}, may you paint your life with the boldest colors imaginable.",
    "Here’s to a {year} of writing your own story and singing your own song.",
    "May the {year} be the canvas, and may you be the masterpiece.",
    "In your {year}, may your imagination run wild and your creativity flow free.",
    "May the {year} bring you inspiration in the smallest of moments.",
    "Here’s to the {year}—a time to create, to build, and to dream awake.",
    "In your {year}, may you find art in the everyday and poetry in the ordinary.",
    "May the {year} be a beautiful expression of your inner world.",
    "Wishing you a {year} where your creativity changes the world around you.",
    "In your {year}, may you never lose your sense of wonder and childlike awe.",
    "May the {year} be sprinkled with fairy dust and unexpected magic.",
    "Here’s to a {year} of believing in the impossible and making it happen.",
    "May your {year} be as enchanting as a starlit sky.",
    "In your {year}, may you find magic in the mundane and miracles in the ordinary.",
    "May the {year} bring you moments so beautiful they take your breath away.",
    "Here’s to the {year}—may it be a fairytale written just for you.",
    "In your {year}, may you dance under the moon and howl at the stars.",
    "May the {year} be a magical journey through everything you’ve ever hoped for.",
    "Wishing you a {year} where every day feels like a little bit of magic.",
    "May your {year} be a bridge to a future even brighter than you can imagine.",
    "In your {year}, may you plant seeds that will bloom for generations.",
    "Here’s to the {year}—a time to build a legacy of love and kindness.",
    "May the {year} bring you the wisdom to look forward and the grace to look back.",
    "In your {year}, may you be a lighthouse for those who follow.",
    "May the {year} be the chapter where your wildest dreams become your reality.",
    "Here’s to a {year} of honoring the past while stepping boldly into the future.",
    "In your {year}, may your light shine so brightly that it guides others home.",
    "May the {year} bring you the deep satisfaction of a life well-lived.",
    "Wishing you a {year} of completion, fulfillment, and endless love. You did it!"
];

const cardIcons = ['🌸', '🌟', '💫', '🌺', '🦋', '🌈', '🕊️', '🎂', '✨', '💖', '🎁', '🎈', '🎀', '🎶', '🌙', '🔮', '🦊', '🍀', '🌺', '☄️'];

// ===== CORE LOGIC =====

// Calculates exact age based on local device time
function getCurrentAge() {
    const now = new Date();
    let age = now.getFullYear() - BIRTH_YEAR;
    const m = now.getMonth() - BIRTH_MONTH;
    if (m < 0 || (m === 0 && now.getDate() < BIRTH_DAY)) {
        age--;
    }
    return age;
}

// Get the next upcoming birthday
function getNextBirthday() {
    const now = new Date();
    let year = now.getFullYear();
    let bday = new Date(year, BIRTH_MONTH, BIRTH_DAY);
    
    // If birthday has passed this year, target next year
    if (now > bday) {
        bday = new Date(year + 1, BIRTH_MONTH, BIRTH_DAY);
    }
    return bday;
}

// Helper for formatting "21st", "22nd", etc.
function getOrdinalSuffix(i) {
    const j = i % 10, k = i % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
}

// Generate the 100 card data objects
function generateCards() {
    const cards = [];
    for (let i = 1; i <= TOTAL_CARDS; i++) {
        // With exactly 100 wishes, (i - 1) maps directly 1-to-1!
        const template = wishTemplates[i - 1];
        const wishText = template.replace(/{year}/g, i + getOrdinalSuffix(i));
        
        cards.push({
            id: i,
            year: i,
            icon: cardIcons[(i - 1) % cardIcons.length],
            wish: wishText
        });
    }
    return cards;
}

// ===== UI RENDERING =====

function renderCards() {
    const grid = document.getElementById('cardsGrid');
    const currentAge = getCurrentAge();
    
    // Update Progress Bar
    const unlockedCount = Math.min(currentAge, TOTAL_CARDS);
    document.getElementById('progressText').textContent = `${unlockedCount} / ${TOTAL_CARDS} Unlocked`;
    document.getElementById('progressFill').style.width = `${(unlockedCount / TOTAL_CARDS) * 100}%`;

    // Handle if it's exactly her birthday today
    const now = new Date();
    const isBirthday = (now.getMonth() === BIRTH_MONTH && now.getDate() === BIRTH_DAY);
    const cdTitle = document.getElementById('cdTitle');
    const cdTimer = document.getElementById('countdownTimer');
    
    if (isBirthday) {
        cdTitle.textContent = `🎂 Happy ${currentAge}${getOrdinalSuffix(currentAge)} Birthday Afiya! 🎂`;
        cdTimer.style.display = 'none';
    } else {
        cdTitle.textContent = 'Next birthday in...';
        cdTimer.style.display = 'flex';
    }

    const cardsData = generateCards();

    cardsData.forEach(card => {
        const el = document.createElement('div');
        el.className = 'card-item';
        
        const isUnlocked = card.year <= currentAge;
        const isNewest = card.year === currentAge;

        if (isUnlocked) {
            el.classList.add('unlocked');
            if (isNewest && !isBirthday) el.classList.add('new-card'); // Highlight newest if not birthday
            
            // Unlock animation stagger
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 30 * card.year); // Sped up stagger slightly for 100 cards

            el.innerHTML = `
                <div class="card-icon">${card.icon}</div>
                <div class="card-action">Open</div>
            `;
            el.addEventListener('click', () => openModal(card));
        } else {
            el.classList.add('locked');
            el.innerHTML = `
                <div class="card-icon">🔒</div>
                <div class="card-year">Year ${card.year}</div>
            `;
        }

        grid.appendChild(el);
    });
}

// ===== MODAL LOGIC =====

function openModal(card) {
    const overlay = document.getElementById('modalOverlay');
    document.getElementById('modalIcon').textContent = card.icon;
    document.getElementById('modalYear').textContent = `Year ${card.year}`;
    document.getElementById('modalWish').textContent = card.wish;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent bg scroll
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal(); // Click outside to close
});


// ===== COUNTDOWN LOGIC =====

function updateCountdown() {
    const now = new Date();
    const isBirthday = (now.getMonth() === BIRTH_MONTH && now.getDate() === BIRTH_DAY);
    
    if (isBirthday) return; // Stop countdown on the birthday

    const bday = getNextBirthday();
    const diff = bday.getTime() - now.getTime();

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cdDays').textContent = String(days).padStart(2, '0');
    document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cdMins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cdSecs').textContent = String(secs).padStart(2, '0');
}


// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    updateCountdown();
    setInterval(updateCountdown, 1000); // Update countdown every second
});