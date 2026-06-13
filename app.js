// ===== CONFIGURATION =====
const BIRTH_MONTH = 5, BIRTH_DAY = 13, BIRTH_YEAR = 2005;
const TOTAL_CARDS = 100;

// ===== INTERNATIONALIZATION =====
const i18n = { en: {
cdTitle:'Afiya Mubassira',cdBorn:'Born',cdCurrently:'Currently',cdYearsOld:'years old',cdTurning:'Turning',cdGiftArrives:'Her gift arrives in...',cdNextArrives:'Next birthday in...',cdTurned:'Turned',cdNext:'Next:',
cdDays:'Days',cdHours:'Hours',cdMins:'Minutes',cdSecs:'Seconds',
cdMessage:'Something beautiful is being wrapped just for her.\nCome back on her special day to unwrap it.',cdPreview:'Preview the surprise',
bdTitle:'Happy Birthday!',bdYouAre:'You are',bdToday:'today!',bdBadge:'🎂 June 13',bdOpenGift:'Open Your Gift',
cardLocked:'🔒 Unlocks on your',cardLockedYear:'th birthday',
btnGallery:'View Memories',btnCake:'Blow Candles',btnShare:'Share Card',btnNextWish:'💫 Another Wish',
cakeTitle:'Blow the Candles!',cakeSub:'Click each candle to make a wish ✨',cakeLeft:'Candles left:',cakeDone:'Your wish has been made!',
galleryTitle:'Afiya\'s Memories',
cpTitle:'Settings',cpLang:'Language',cpTheme:'Dark/Light',cpFireworks:'Fireworks',cpSparkles:'Sparkles',cpConfetti:'Confetti',
installText:'📲 Install App',
shareLoading:'Preparing your card...',shareFail:'Share not supported on this device',galleryOf:'of',
}, bn: {
cdTitle:'আফিয়া মুবাসসিরা',cdBorn:'জন্ম',cdCurrently:'বর্তমানে বয়স',cdYearsOld:'বছর',cdTurning:'হবে',cdGiftArrives:'তার উপহার আসছে...',cdNextArrives:'পরবর্তী জন্মদিন...',cdTurned:'হয়েছে',cdNext:'পরবর্তী:',
cdDays:'দিন',cdHours:'ঘন্টা',cdMins:'মিনিট',cdSecs:'সেকেন্ড',
cdMessage:'তার জন্য কিছু সুন্দর মোড়ানো হচ্ছে।\nতার বিশেষ দিনে এসে উপহার খোলো।',cdPreview:'চমকটি দেখো',
bdTitle:'শুভ জন্মদিন!',bdYouAre:'তুমি আজ',bdToday:'বছরের!',bdBadge:'🎂 ১৩ জুন',bdOpenGift:'তোমার উপহার খোলো',
cardLocked:'🔒 আনলক হবে তোমার',cardLockedYear:'তম জন্মদিনে',
btnGallery:'স্মৃতি দেখো',btnCake:'মোমবাতি নিভাও',btnShare:'শেয়ার করো',btnNextWish:'💫 আরেকটা শুভেচ্ছা',
cakeTitle:'মোমবাতি নিভাও!',cakeSub:'প্রতিটি মোমবাতিতে ক্লিক করে ইচ্ছে করো ✨',cakeLeft:'বাকি মোমবাতি:',cakeDone:'তোমার ইচ্ছে পূরণ হয়েছে! 🎉',
galleryTitle:'আফিয়ার স্মৃতি',
cpTitle:'সেটিংস',cpLang:'ভাষা',cpTheme:'ডার্ক/লাইট',cpFireworks:'আতশবাজি',cpSparkles:'চমক',cpConfetti:'কনফেটি',
installText:'📲 অ্যাপ ইন্সটল করো',
shareLoading:'তোমার কার্ড তৈরি হচ্ছে...',shareFail:'এই ডিভাইসে শেয়ার সমর্থিত নয়',galleryOf:'এর',
}};

// ===== WISHES =====
const yearlyW = [
'Welcome to the world, little star. You were born to shine.',
'One year of joy — and a lifetime left to go. Keep glowing, little one.',
'Two years of wonder, curiosity, and tiny steps toward big dreams.',
'Three years of laughter, sticky fingers, and the purest heart.',
'Four years of magic — every day a new discovery with you.',
'Five years of growing, learning, and filling the world with light.',
'Six years of sparkle — your smile has already changed so many lives.',
'Seven years of grace. Even then, your kindness was everyone\'s favorite.',
'Eight years of big dreams in a little heart. Nothing could stop you.',
'Nine years of courage, curiosity, and that beautiful light in your eyes.',
'Ten years — a whole decade of being extraordinary. And you\'re just getting started.',
'Eleven years of blooming. Like a flower reaching for the sun, you grew taller every day.',
'Twelve years of becoming. Your personality, your laugh — all becoming the wonderful you.',
'Thirteen — the teenage years begin. Your sparkle only got brighter.',
'Fourteen years of finding yourself. And what a beautiful self you found.',
'Fifteen years of strength, grace, and quiet confidence. So proud of you.',
'Sixteen — sweet sixteen. Your light reached everyone around you.',
'Senenteen years of becoming who you are. And who you are is magnificent.',
'Eighteen — an adult in the world, but always our Afiya. Shine on.',
'Nineteen years of wisdom beyond your years. You inspire everyone you meet.',
'Twenty years of amazing. A whole life of love, growth, and beautiful memories.',
];
const yearlyWbn = [
'পৃথিবীতে স্বাগতম, ছোট তারা। তুমি জ্বলজ্বল করার জন্যই জন্মেছ।',
'এক বছর আনন্দ — আর বাকি জীবন তোমার জন্য। জ্বলজ্বল করতে থাকো, ছোট্ট সোনা।',
'দুই বছর বিস্ময়, কৌতূহল আর বড় স্বপ্নের দিকে ছোট ছোট পা।',
'তিন বছর হাসি, মিষ্টি হাত আর সবচেয়ে খাঁটি মন।',
'চার বছর জাদু — প্রতিটি দিন তোমার সাথে একটা নতুন আবিষ্কার।',
'পাঁচ বছর বেড়ে ওঠা, শেখা আর পৃথিবীকে আলোয় ভরে দেওয়া।',
'ছয় বছর চমক — তোমার হাসি ইতিমধ্যে কত মানুষের জীবন বদলে দিয়েছে।',
'সাত বছর সৌন্দর্য। তখনও তোমার মিষ্টতা সবার প্রিয় ছিল।',
'আট বছর ছোট মনে বড় স্বপ্ন। কিছুই তোমাকে থামাতে পারেনি।',
'নয় বছর সাহস, কৌতূহল আর তোমার চোখের সেই সুন্দর আলো।',
'দশ বছর — পুরো এক দশক অসাধারণ। আর তুমি সবেমাত্র শুরু করেছ।',
'এগারো বছর ফুলের মতো ফোটা। সূর্যের দিকে তাকিয়ে তুমি প্রতিদিন বড় হয়েছ।',
'বারো বছর হয়ে ওঠার। তোমার ব্যক্তিত্ব, তোমার হাসি—সবই চমৎকার হচ্ছিল।',
'তেরো — টিনএজ শুরু। তোমার চমক তখনও আরও উজ্জ্বল হয়েছে।',
'চৌদ্দ বছর নিজেকে খুঁজে পাওয়ার। আর কী সুন্দর নিজেকে তুমি পেয়েছ।',
'পনরো বছর শক্তি, সৌন্দর্য আর নীরব আত্মবিশ্বাস। তোমার জন্য গর্বিত।',
'ষোলো — সুইট সোলো। তোমার আলো চারপাশের সবাইকে ছুঁয়েছে।',
'সতেরো বছর তুমি যা তা হয়ে ওঠার। আর তুমি যা তা অসাধারণ।',
'আঠারো — পৃথিবীতে একজন প্রাপ্তবয়স্ক, কিন্তু সবসময় আমাদের আফিয়া। জ্বলজ্বল করো।',
'উনিশ বছর বয়সের চেয়ে বেশি জ্ঞান। তুমি যাকে দেখো তাকেই অনুপ্রাণিত করো।',
'বিশ বছর অসাধারণ। ভালোবাসা, বৃদ্ধি আর সুন্দর স্মৃতিতে ভরা এক জীবন।',
];
const bonusW = [
"You are stronger than any storm. Keep standing tall.",
"Courage lives in your heart. Every challenge makes you braver.",
"You've survived every hard day so far — and you're still smiling.",
"Tough times don't last, but tough people like you do.",
"Your strength inspires everyone who knows you. Never doubt that.",
"Fall down seven times, stand up eight. You've always known this dance.",
"The strongest hearts have the kindest souls. You prove this every day.",
"You are a warrior in a beautiful disguise. Keep fighting for your dreams.",
"Every scar tells a story of survival. Yours are stories of grace.",
"Bravery isn't the absence of fear — it's doing it anyway. You do this daily.",
"Dream without limits. The universe has no ceiling for someone like you.",
"Your potential is infinite. Don't let anyone convince you otherwise.",
"The world needs what only you can bring. Don't hold back.",
"Every great dream begins with a dreamer. You have everything it takes.",
"Your ambition is your superpower. Channel it and watch miracles happen.",
"The road to your dreams is paved with small steps. Keep walking.",
"Don't wait for permission to shine. The stage is yours.",
"You were born to stand out, not to fit in. Own every bit of who you are.",
"Reach for the stars — even if you miss, you'll land among them.",
"Success is not where you start, but how high you aim. Aim high, always.",
"Your beauty is not just in your face — it's in your heart, your words, your kindness.",
"Grace isn't about being perfect. It's about being real. And you are beautifully real.",
"You carry elegance like a second skin. It's simply who you are.",
"True beauty radiates from within, and yours lights up every room.",
"Your presence is a gift. You make ordinary moments feel special.",
"There is a quiet magic in the way you move through the world.",
"You don't need to change a thing. You are already exactly as you should be.",
"Like a perfectly cut diamond, every facet of you reflects light differently.",
"Your elegance is effortless because it comes from an authentic heart.",
"Beauty fades, but the kind of beautiful you are — that lasts forever.",
"You love deeply and truly. That is your greatest gift to the world.",
"Friendship with you is like finding a rare treasure — precious and irreplaceable.",
"Your heart is a home for everyone who needs one. That's rare and beautiful.",
"The love you give comes back to you multiplied. Always.",
"You are the friend everyone wishes they had. Loyal, kind, and real.",
"Your capacity to care for others is limitless. Don't forget to care for yourself.",
"Some people make the world warmer just by being in it. That's you.",
"The bonds you create last a lifetime. You build connections that truly matter.",
"Your love language is kindness, and the whole world understands it.",
"Thank you for being you — the world is better because of your heart.",
"Hope is the anchor of the soul. You hold yours steady through every wave.",
"Your laughter is contagious. Spread it everywhere you go.",
"Joy lives in the small moments — and you know exactly how to find them.",
"You radiate positivity like sunshine on a cloudy day.",
"Even on dark days, you find a way to smile. That's your superpower.",
"Hope looks beautiful on you. Wear it proudly.",
"Your optimism is a light that guides not just you, but everyone around you.",
"Happiness isn't a destination — you carry it with you wherever you go.",
"You find joy in the journey, not just the destination. That's wisdom.",
"Your energy is electric. It lifts spirits and brightens lives.",
"Life is an adventure — and you are the hero of your own story.",
"Every corner of the world holds something for you to discover. Go explore.",
"You were made for more than just existing. You were made for living fully.",
"Adventure awaits everywhere — you just have to say yes to it.",
"Your curiosity is your compass. Follow it wherever it leads.",
"The best stories belong to those who take risks. Go write yours.",
"There is so much waiting for you out there. Open your arms and receive it.",
"You have a traveler's soul and a homebody's heart. That's a beautiful balance.",
"Every new experience shapes you. Stay open, stay curious, stay wild.",
"The world is your classroom. Every person you meet has something to teach you.",
"You grow not despite your struggles, but because of them.",
"Wisdom comes from experience, and you have lived more than most.",
"Every season of life prepares you for the next. Trust the process.",
"You are constantly evolving into a more beautiful version of yourself.",
"Growth is painful. But you've shown that pain can produce something beautiful.",
"The person you are becoming is worth every step of the journey.",
"You're not the same person you were a year ago — and that's a good thing.",
"Maturity isn't about age. It's about how you handle what life gives you.",
"Your growth inspires growth in others. That's the ripple effect of your life.",
"Keep blooming. The world needs more of who you are becoming.",
"You are made of stardust and dreams. Never forget how magical you are.",
"There is something extraordinary about the ordinary moments when you're in them.",
"The universe conspires to help those who believe. And you believe so beautifully.",
"You are a walking miracle — don't ever underestimate your own magic.",
"Life is mysterious and wonderful, and you are one of its best creations.",
"Wonder is the beginning of wisdom. Keep your childlike awe alive.",
"You bring wonder to everything you touch. That's pure magic.",
"Stars don't compete. They just shine. And you shine brighter than any star.",
"The most magical thing in the world is a kind heart. And yours is the kindest.",
"That thing you're afraid of? Do it anyway. Courage is on the other side.",
"Not every storm comes to disrupt your life — some come to clear your path.",
"You are not your worst day. You are not your worst mistake. You are a masterpiece in progress.",
"Some flowers bloom in the rain. You are that flower.",
"Let go of who you were to become who you are meant to be.",
"The sun doesn't forget to rise. And you shouldn't forget to shine.",
"Your voice matters. Your story matters. You matter.",
"Be soft. Do not let the world make you hard. Do not let the pain make you hate.",
"You are the sky. Everything else — it's just the weather.",
"Sometimes the bravest thing you can do is just keep going.",
"Remember to be gentle with yourself. You're doing the best you can.",
];
const bonusWbn = [
'তুমি যেকোনো ঝড়ের চেয়েও শক্তিশালী। মাথা উঁচু করে দাঁড়িয়ে থাকো।',
'তোমার মনে সাহস বাসা বাঁধে। প্রতিটি চ্যালেঞ্জ তোমাকে আরও শক্তিশালী করে।',
'তুমি প্রতিটি কঠিন দিন পেরিয়ে এসেছ — আর এখনও হাসছ। এটাই শক্তি।',
'কঠিন সময় চিরস্থায়ী নয়, কিন্তু কঠিন মানুষরা যেমন তুমি — চিরস্থায়ী।',
'তোমার শক্তি যারা তোমাকে জানে তাদের সবাইকে অনুপ্রাণিত করে। কখনো সন্দেহ করো না।',
'সাতবার পড়ো, আটবার উঠো। তুমি এই নাচটা সবসময় জানো।',
'শক্তিশালী মনে থাকে সবচেয়ে দয়ালু আত্মা। তুমি প্রতিদিন এটা প্রমাণ করো।',
'তুমি একটি সুন্দর ছদ্মবেশে একজন যোদ্ধা। তোমার স্বপ্নের জন্য লড়াই চালিয়ে যাও।',
'প্রতিটি দাগ বেঁচে থাকার গল্প বলে। তোমার গল্পগুলো সৌন্দর্যের।',
'সাহস মানে ভয় না পাওয়া নয় — ভয় থাকা সত্ত্বেও করা। তুমি প্রতিদিন এটা করো।',
'সীমাহীন স্বপ্ন দেখো। তোমার মতো কারও জন্য আকাশেরও সীমা নেই।',
'তোমার সম্ভাবনা অসীম। কাউকে তোমাকে অন্যথা বোঝাতে দিও না।',
'পৃথিবীর যা দরকার, তা কেবল তুমিই আনতে পারো। পিছিয়ে থেকো না।',
'প্রত্যেকটি বড় স্বপ্ন শুরু হয় একজন স্বপ্নবাজ দিয়ে। তোমার মধ্যে সবকিছু আছে।',
'তোমার উচ্চাকাঙ্ক্ষা তোমার সুপারপাওয়ার। এটা কাজে লাগাও আর অলৌকিক ঘটনা দেখো।',
'স্বপ্নের পথ ছোট ছোট পদক্ষেপে তৈরি। হাঁটতে থাকো।',
'চমকানোর অনুমতি নেওয়ার অপেক্ষা করো না। মঞ্চ তোমার।',
'তুমি আলাদা হওয়ার জন্য জন্মেছ, মিশে যাওয়ার জন্য নয়। নিজেকে পুরোপুরি নিজের মতো করে রাখো।',
'তারাদের ছোঁয়ার জন্য হাত বাড়াও — মিস করলেও তাদের মাঝে পড়বে।',
'সফলতা শুরু কোথায় সেটা নয়, কত উঁচুতে লক্ষ্য রাখো সেটা। সবসময় উঁচুতে লক্ষ্য রাখো।',
'তোমার সৌন্দর্য শুধু মুখে নয় — এটা তোমার মনে, তোমার কথায়, তোমার দয়ায়।',
'সৌন্দর্য পারফেক্ট হওয়া নয় — এটা সত্যিকারের হওয়া। আর তুমি চমৎকারভাবে সত্যিকারের।',
'তুমি মাধুর্যকে দ্বিতীয় ত্বকের মতো ধারণ করো। এটা শুধু তুমি।',
'প্রকৃত সৌন্দর্য ভেতর থেকে আসে, আর তোমার আলো প্রতিটি ঘর উজ্জ্বল করে।',
'তোমার উপস্থিতি একটা উপহার। তুমি সাধারণ মুহূর্তগুলোকে বিশেষ করে তোলো।',
'তোমার চলাফেরায় এক নীরব জাদু আছে।',
'তোমার কিছু পরিবর্তনের দরকার নেই। তুমি ইতিমধ্যে ঠিক যেমন হওয়া উচিত তেমনই।',
'একটি হীরার মতো, তোমার প্রতিটি দিক আলো ভিন্নভাবে প্রতিফলিত করে।',
'তোমার মাধুর্য অনায়াস, কারণ এটা একটি খাঁটি হৃদয় থেকে আসে।',
'সৌন্দর্য ম্লান হয়, কিন্তু তুমি যে সৌন্দর্যের — তা চিরস্থায়ী।',
'তুমি গভীরভাবে এবং সত্যিকারভাবে ভালোবাসো। এটাই পৃথিবীতে তোমার সবচেয়ে বড় উপহার।',
'তোমার সাথে বন্ধুত্ব বিরল ধন খোঁজার মতো — মূল্যবান এবং অপরিবর্তনীয়।',
'তোমার মন সবার জন্য একটি বাড়ি। এটা বিরল এবং সুন্দর।',
'তুমি যে ভালোবাসা দাও, তা বহুগুণে ফিরে আসে। সবসময়।',
'তুমি সেই বন্ধু যাকে সবাই চায়। অনুগত, দয়ালু এবং সত্যিকারের।',
'অন্যদের যত্ন নেওয়ার তোমার ক্ষমতা অসীম। নিজের যত্ন নিতেও ভুলো না।',
'কিছু মানুষ পৃথিবীকে উষ্ণ করে তোলে শুধু এতে থাকার মাধ্যমে। তুমি সেই মানুষ।',
'তুমি যে বন্ধন তৈরি করো তা আজীবন স্থায়ী। তুমি সত্যিকারের গুরুত্বপূর্ণ সম্পর্ক গড়ে তোলো।',
'তোমার ভালোবাসার ভাষা হলো দয়া, আর পুরো পৃথিবী এটা বোঝে।',
'তুমি যারা তুমি হওয়ার জন্য ধন্যবাদ — তোমার হৃদয়ের কারণে পৃথিবী ভালো।',
'আশা আত্মার নোঙ্গর। তুমি নিজের আশা প্রতিটি তরঙ্গের মধ্যে স্থির রাখো।',
'তোমার হাসি সংক্রামক। তুমি যেখানেই যাও সেখানে ছড়িয়ে দাও।',
'আনন্দ ছোট মুহূর্তে বাস করে — আর তুমি জানো কীভাবে সেগুলো খুঁজে বের করতে হয়।',
'তুমি মেঘলা দিনে সূর্যের আলোর মতো ইতিবাচকতা ছড়াও।',
'অন্ধকার দিনেও তুমি হাসার উপায় খুঁজে পাও। এটাই তোমার সুপারপাওয়ার।',
'আশা তোমাকে খুব মানায়। গর্বের সাথে পরিধান করো।',
'তোমার আশাবাদ এমন এক আলো যা শুধু তোমাকে নয়, তোমার চারপাশের সবাইকে পথ দেখায়।',
'সুখ কোনো গন্তব্য নয় — তুমি এটা তোমার সাথে সব জায়গায় নিয়ে যাও।',
'তুমি যাত্রায় আনন্দ খুঁজে পাও, শুধু গন্তব্যে নয়। এটাই প্রজ্ঞা।',
'তোমার শক্তি বিদ্যুতের মতো। এটা মন উঁচু করে এবং জীবন উজ্জ্বল করে।',
'জীবন একটি দুঃসাহস — আর তুমি নিজের গল্পের নায়ক।',
'পৃথিবীর প্রতিটি কোণে তোমার জন্য কিছু আবিষ্কার রয়েছে। যাও অন্বেষণ করো।',
'তুমি শুধু থাকার জন্য তৈরি হওনি। তুমি পুরোপুরি বেঁচে থাকার জন্য তৈরি।',
'দুঃসাহস সব জায়গায় অপেক্ষা করছে — তুমি শুধু হ্যাঁ বলো।',
'তোমার কৌতূহল তোমার কম্পাস। যেদিকে নিয়ে যায় সেদিকে অনুসরণ করো।',
'সেরা গল্পগুলো তাদের যারা ঝুঁকি নেয়। যাও তোমার গল্প লেখো।',
'তোমার জন্য বাইরে অনেক কিছু অপেক্ষা করছে। বাহু খুলে নাও।',
'তোমার ভ্রমণকারীর আত্মা আর ঘরোয়া মন আছে। এটা একটি সুন্দর ভারসাম্য।',
'প্রত্যেকটি নতুন অভিজ্ঞতা তোমাকে গঠন করে। খোলা থাকো, কৌতূহলী থাকো, মুক্ত থাকো।',
'পৃথিবী তোমার ক্লাসরুম। তুমি যার সাথে দেখা করো, তার কাছ থেকে কিছু না কিছু শেখার আছে।',
'তুমি তোমার সংগ্রাম সত্ত্বেও বড় হও না, বরং তাদের কারণে বড় হও।',
'প্রজ্ঞা অভিজ্ঞতা থেকে আসে, আর তুমি অধিকাংশের চেয়ে বেশি বেঁচে থাকো।',
'জীবনের প্রতিটি মৌসুম তোমাকে পরবর্তীটির জন্য প্রস্তুত করে। প্রক্রিয়ায় বিশ্বাস রাখো।',
'তুমি ক্রমাগত নিজের আরও সুন্দর সংস্করণে বিবর্তিত হচ্ছ।',
'বৃদ্ধি বেদনাদায়ক। কিন্তু তুমি দেখিয়েছ যে ব্যথা থেকেও সুন্দর কিছু তৈরি হতে পারে।',
'তুমি যে মানুষটি হয়ে উঠছ, সে যাত্রার প্রতিটি পদক্ষেপের মূল্য।',
'তুমি এক বছর আগের মতো একই মানুষ নও — আর এটা ভালো জিনিস।',
'পরিপক্কতা বয়সের বিষয় নয় — এটা কীভাবে জীবন যা দেয় তা মোকাবেলা করো তার বিষয়।',
'তোমার বৃদ্ধি অন্যদের মধ্যে বৃদ্ধি প্রেরণা দেয়। এটা তোমার জীবনের তরঙ্গ প্রভাব।',
'ফুলতে থাকো। পৃথিবীর তুমি যা হয়ে উঠছ তার আরও বেশি প্রয়োজন।',
'তুমি তারার ধুলো এবং স্বপ্ন দিয়ে তৈরি। কখনো ভুলো না তুমি কত জাদুকর।',
'সাধারণ মুহূর্তেও অসাধারণ কিছু আছে যখন তুমি তাদের মধ্যে থাকো।',
'মহাবিশ্ব তাদের সাহায্য করে যারা বিশ্বাস করে। আর তুমি এত সুন্দরভাবে বিশ্বাস করো।',
'তুমি একটি চলমান অলৌকিক ঘটনা — কখনো নিজের জাদুকে অবমূল্যায়ন করো না।',
'জীবন রহস্যময় এবং চমৎকার, আর তুমি তার সেরা সৃষ্টিগুলোর একটি।',
'বিস্ময় প্রজ্ঞার শুরু। তোমার শিশুসুলভ বিস্ময় বাঁচিয়ে রাখো।',
'তুমি যা কিছু স্পর্শ করো তাতে বিস্ময় নিয়ে আসো। এটা খাঁটি জাদু।',
'তারা প্রতিযোগিতা করে না। তারা শুধু জ্বলে। আর তুমি যেকোনো তারার চেয়ে উজ্জ্বল।',
'পৃথিবীর সবচেয়ে জাদুকর জিনিস হলো দয়ালু হৃদয়। আর তোমার হৃদয় সবচেয়ে দয়ালু।',
'তুমি যে জিনিসটাকে ভয় পাও — সেটা করো। সাহস উল্টো পাশে অপেক্ষা করছে।',
'প্রতি ঝড় তোমার জীবন নষ্ট করতে আসে না — কিছু ঝড় তোমার পথ পরিষ্কার করতে আসে।',
'তুমি তোমার সবচেয়ে খারাপ দিন নও। তুমি তোমার সবচেয়ে বড় ভুল নও। তুমি একটি চলমান মাস্টারপিস।',
'কিছু ফুল বৃষ্টিতেও ফোটে। তুমি সেই ফুল।',
'তুমি যা ছিলে তা ছেড়ে দাও, তুমি যা হওয়ার তা হওয়ার জন্য।',
'সূর্য উঠতে ভোলে না। আর তোমার জ্বলতে ভোলা উচিত নয়।',
'তোমার কণ্ঠস্বর গুরুত্বপূর্ণ। তোমার গল্প গুরুত্বপূর্ণ। তুমি গুরুত্বপূর্ণ।',
'নরম থাকো। পৃথিবীকে তোমাকে শক্ত করতে দিও না। ব্যথাকে তোমাকে ঘৃণা করতে দিও না।',
'তুমি আকাশ। বাকি সবকিছু — শুধু আবহাওয়া।',
'মাঝে মাঝে সবচেয়ে সাহসী কাজ হলো শুধু চলতে থাকা।',
'নিজের সাথে নম্র হতে মনে রেখো। তুমি তোমার সর্বোচ্চ চেষ্টা করছ।',
];

const signoffsEn = ['— With love & admiration','— Forever proud of you','— Chase every star','— Cheers to you!','— Fly high','— Stay colorful','— With peace & love','— Always believe','— You are magic','— Keep shining'];
const signoffsBn = ['— ভালোবাসা ও শ্রদ্ধায়','— তোমার জন্য গর্বিত','— সব তারার পিছে ছুটো','— তোমার জন্য শুভকামনা!','— উড়ে যাও উঁচুতে','— রঙিন থাকো','— শান্তি ও ভালোবাসায়','— সবসময় বিশ্বাস করো','— তুমি জাদু','— জ্বলজ্বল করতে থাকো'];
const cardIcons = ['🌸','🌟','💫','🌺','🦋','🌈','🕊️','🎀','⭐','💖','✨','🌙','🍀','🌻','🎈'];
const cardBgs = ['linear-gradient(135deg,#ff6b9d,#c44dff)','linear-gradient(135deg,#ffd700,#ff8c42)','linear-gradient(135deg,#00d4ff,#7c5cff)','linear-gradient(135deg,#f093fb,#f5576c)','linear-gradient(135deg,#4facfe,#00f2fe)','linear-gradient(135deg,#a8edea,#fed6e3)','linear-gradient(135deg,#ffecd2,#fcb69f)','linear-gradient(135deg,#89f7fe,#66a6ff)'];

// ===== CARD DATA =====
let cardData = [];
function initCards() {
  cardData = [];
  for (let i = 0; i < TOTAL_CARDS; i++) {
    const y = i < 21;
    cardData.push({
      icon: cardIcons[i % cardIcons.length], bg: cardBgs[i % cardBgs.length], wishIcon: cardIcons[i % cardIcons.length],
      year: y ? i : -1, lockYear: y ? i + 1 : i + 1,
      labelEn: y ? 'Year ' + (i + 1) : '✨ Wish ' + (i - 20), labelBn: y ? 'বছর ' + (i + 1) : '✨ শুভেচ্ছা ' + (i - 20),
      wishIdx: y ? i : (i - 21) % bonusW.length, type: y ? 'yearly' : 'bonus',
      signoffEn: signoffsEn[i % signoffsEn.length], signoffBn: signoffsBn[i % signoffsBn.length]
    });
  }
}
initCards();

const photos = [
'photos/1781294950083.jpg','photos/Messenger_creation_64DA5B69-0607-4C82-AF5B-554CD3E01859.jpeg',
'photos/Messenger_creation_174C40C3-9BE3-4BBA-8556-1989732F442E.jpeg','photos/Messenger_creation_135E22A6-D009-43FB-B451-BCA75E7B9ACB.jpeg',
'photos/Messenger_creation_DE44ABE9-5A45-4AD4-AB1F-22AF198B37F0.jpeg','photos/Messenger_creation_5D24168D-CE0B-4F5F-BD6E-189F2F3458E5.jpeg',
'photos/Messenger_creation_B48CDC05-6DE7-4C48-BA49-CEB2189E6694.jpeg'];

// ===== STATE =====
let cl = 'en', st = { lang: 'en', fireworks: true, sparkles: true, cc: false, dark: true };
let nh = [], gi = 0, ci = 0, gint = null, ccint = null, cb = false, fa = false, se = true, cl5 = 5, fwc, fwx, fl = [], sc = 0, lft = Date.now();
let dP = null;

// ===== UTILITIES =====
function ha() { try { navigator.vibrate && navigator.vibrate(20) } catch (e) {} }
function gt() { const t = new Date(); return { y: t.getFullYear(), m: t.getMonth(), d: t.getDate() }; }
function ib(t) { return t.m === BIRTH_MONTH && t.d === BIRTH_DAY; }
function ga() { const t = new Date(); let a = t.getFullYear() - BIRTH_YEAR; const m = t.getMonth() - BIRTH_MONTH; if (m < 0 || (m === 0 && t.getDate() < BIRTH_DAY)) a--; return a; }
function gd() { return Math.floor((Date.now() - new Date(BIRTH_YEAR, BIRTH_MONTH, BIRTH_DAY).getTime()) / 86400000); }
function gnb(n) { let b = n.getFullYear(); if (n.getMonth() > BIRTH_MONTH || (n.getMonth() === BIRTH_MONTH && n.getDate() > BIRTH_DAY)) b++; return new Date(b, BIRTH_MONTH, BIRTH_DAY); }
function hp(n) { const t = n || new Date(); return t.getMonth() > BIRTH_MONTH || (t.getMonth() === BIRTH_MONTH && t.getDate() > BIRTH_DAY); }

// ===== PROGRESS BAR =====
function updateProgress() {
  const a = ga();
  const uc = Math.min(a, TOTAL_CARDS);
  ['progressText','cdProgressText'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = uc + ' / ' + TOTAL_CARDS + ' Unlocked';
  });
  ['progressFill','cdProgressFill'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.width = (uc / TOTAL_CARDS * 100) + '%';
  });
}

// ===== SCREEN MANAGEMENT =====
function ss(id, dir) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('visible'));
  const t = document.getElementById(id), d = dir || 'fade';
  t.setAttribute('data-trans', d); void t.offsetWidth; t.classList.add('visible');
  const bb = document.getElementById('backBtn');
  if (id === 'countdownScreen' || id === 'birthdayScreen') bb.classList.add('hidden'); else bb.classList.remove('hidden');
  if (id !== 'galleryScreen') stopGalleryAuto();
  se = (id !== 'galleryScreen') && st.sparkles;
  if (id === 'galleryScreen') stopCC(); else if (st.cc) startCC();
  if (id === 'birthdayScreen' || id === 'cardScreen') spawnBalloons(8); else { document.querySelectorAll('.balloon').forEach(b => b.remove()); }
  if (id === 'cardScreen') t.scrollTop = 0;
}

function gb() { if (nh.length < 2) return; nh.pop(); ss(nh[nh.length - 1], 'slide-right'); }

// ===== COUNTDOWN =====
function uc() {
  const n = new Date(), nx = gnb(n), d = nx.getTime() - n.getTime(); if (d <= 0) return;
  const ts = Math.floor(d / 1000);
  document.getElementById('cdDays').textContent = String(Math.floor(ts / 86400)).padStart(2, '0');
  document.getElementById('cdHours').textContent = String(Math.floor((ts % 86400) / 3600)).padStart(2, '0');
  document.getElementById('cdMins').textContent = String(Math.floor((ts % 3600) / 60)).padStart(2, '0');
  document.getElementById('cdSecs').textContent = String(ts % 60).padStart(2, '0');
}

function initCountdown() {
  const a = ga(), p = hp();
  document.getElementById('cdCurrentAge').textContent = a;
  document.getElementById('cdNextAge').textContent = a + 1;
  document.getElementById('cdGiftLabel').dataset.i18n = p ? 'cdNextArrives' : 'cdGiftArrives';
  document.getElementById('cdGiftLabel').textContent = i18n[cl][p ? 'cdNextArrives' : 'cdGiftArrives'];
  document.getElementById('cdAgeLabel').dataset.i18n = p ? 'cdTurned' : 'cdCurrently';
  document.getElementById('cdAgeLabel').textContent = i18n[cl][p ? 'cdTurned' : 'cdCurrently'];
  document.getElementById('cdTurningLabel').dataset.i18n = p ? 'cdNext' : 'cdTurning';
  document.getElementById('cdTurningLabel').textContent = i18n[cl][p ? 'cdNext' : 'cdTurning'];
  uc(); setInterval(uc, 1000);
  updateProgress();
}

// ===== BIRTHDAY =====
function initBirthday() {
  const a = ga(), be = document.getElementById('bdAge'), by = document.getElementById('bdYear'), bd = document.getElementById('bdDays');
  if (be) be.textContent = a;
  if (by) by.textContent = new Date().getFullYear();
  if (bd) bd.textContent = gd().toLocaleString() + ' days of being wonderful';
  if (st.fireworks) launchFireworks();
}

function goToCardSelection() {
  ha();
  const b = document.getElementById('giftBox');
  if (b) b.classList.add('pulse');
  setTimeout(() => {
    nh.push('cardScreen'); ss('cardScreen', 'slide-left'); renderCards();
  }, 400);
}

// ===== CARD GRID =====
function renderCards() {
  if (cb) return; cb = true;
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = '';
  const a = ga();
  updateProgress();
  cardData.forEach((data, i) => {
    const el = document.createElement('div');
    el.className = 'card-item';
    const isUnlocked = i <= a;
    if (isUnlocked) {
      el.classList.add('unlocked');
      const lb = cl === 'bn' ? data.labelBn : data.labelEn;
      el.innerHTML = '<div class="card-front" style="background:' + data.bg + '"><div class="card-icon">' + data.icon + '</div><div class="card-label">' + lb + '</div><div class="card-shine"></div></div>';
      el.addEventListener('click', () => openCard(i));
    } else {
      el.classList.add('locked');
      el.innerHTML = '<div class="card-icon">🔒</div><div class="card-year">Year ' + data.lockYear + '</div>';
    }
    grid.appendChild(el);
  });
}

// ===== UNFOLDED CARD =====
function openCard(i) {
  ha();
  const a = ga();
  if (i > a) {
    const y = i + 1, th = y > 3 ? 'th' : y === 1 ? 'st' : y === 2 ? 'nd' : 'rd';
    const msg = i18n[cl].cardLocked + ' ' + y + th + ' ' + i18n[cl].cardLockedYear;
    if (window.Notification && Notification.permission === 'granted') new Notification('🔒', { body: msg });
    else { alert(msg); } return;
  }
  ci = i;
  const d = cardData[i], c = document.getElementById('unfoldedCard');
  burstConfetti(); if (st.fireworks) launchFireworks();
  const ws = cl === 'bn' ? (d.type === 'yearly' ? yearlyWbn : bonusWbn)[d.wishIdx] : (d.type === 'yearly' ? yearlyW : bonusW)[d.wishIdx];
  const so = cl === 'bn' ? d.signoffBn : d.signoffEn;
  c.innerHTML = '<div class="unfolded-card-inner" style="background:' + d.bg + '"><button class="close-btn" id="closeUnfolded">✕</button><div class="wish-icon">' + d.wishIcon + '</div><div class="wish-name">Happy Birthday, Afiya!</div><div class="wish-sub">You\'re ' + a + ' today — June 13</div><div class="wish-msg">' + ws + '</div><div class="wish-signoff">' + so + '</div><div class="unfolded-card-buttons"><button class="gallery-btn" id="galleryBtn">📸 View Memories</button><button class="cake-btn" id="cakeBtn">🎂 Blow Candles</button><button class="share-btn" id="shareBtn">📤 Share Card</button><button class="next-btn" id="nextWishBtn">💫 Another Wish</button></div></div>';
  nh.push('unfoldScreen'); ss('unfoldScreen', 'slide-left');
  const ci0 = i;
  document.getElementById('closeUnfolded').addEventListener('click', gb);
  document.getElementById('galleryBtn').addEventListener('click', () => openGallery(ci0 % photos.length));
  document.getElementById('cakeBtn').addEventListener('click', openCakeScreen);
  document.getElementById('shareBtn').addEventListener('click', shareCard);
  document.getElementById('nextWishBtn').addEventListener('click', nextWish);
  setTimeout(() => {
    const n = c.querySelector('.unfolded-card-inner'); if (!n) return;
    for (let i = 0; i < 16; i++) {
      const s = document.createElement('div'); s.className = 'unfolded-sparkle';
      const aa = Math.random() * 360, dist = 70 + Math.random() * 100;
      s.style.setProperty('--dx', Math.cos(aa * Math.PI / 180) * dist + 'px');
      s.style.setProperty('--dy', Math.sin(aa * Math.PI / 180) * dist + 'px');
      s.style.left = '50%'; s.style.top = '50%';
      s.style.background = ['#ffd700', '#ff6b9d', '#fff', '#c44dff'][Math.floor(Math.random() * 4)];
      s.style.width = (4 + Math.random() * 5) + 'px'; s.style.height = s.style.width;
      n.appendChild(s); setTimeout(() => s.remove(), 1000);
    }
  }, 300);
  tw(c.querySelector('.wish-msg'));
}

function tw(el) {
  if (!el) return;
  const txt = el.textContent; el.textContent = '';
  el.style.borderRight = '2px solid ' + ['#ffd700', '#ff6b9d', '#c44dff', '#fff'][Math.floor(Math.random() * 4)];
  el.style.display = 'inline-block'; el.style.overflow = 'hidden';
  el.style.whiteSpace = 'pre-wrap'; el.style.animation = 'none'; void el.offsetWidth;
  let i = 0, it = setInterval(() => {
    if (i >= txt.length) { clearInterval(it); el.style.borderRight = 'none'; return; }
    el.textContent += txt[i]; i++;
  }, 40);
}

function burstConfetti() {
  ha();
  const co = ['#ffd700', '#ff6b9d', '#c44dff', '#ff8c42', '#00d4ff', '#7cff7c', '#fff'];
  for (let i = 0; i < 40; i++) {
    const e = document.createElement('div'); e.className = 'burst-confetti';
    const a = Math.random() * 360, d = 80 + Math.random() * 200;
    e.style.setProperty('--bx', Math.cos(a * Math.PI / 180) * d + 'px');
    e.style.setProperty('--by', Math.sin(a * Math.PI / 180) * d + 'px');
    e.style.left = '50%'; e.style.top = '50%';
    e.style.background = co[Math.floor(Math.random() * co.length)];
    const s = 4 + Math.random() * 8; e.style.width = s + 'px'; e.style.height = s + 'px';
    e.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(e); setTimeout(() => e.remove(), 1300);
  }
}

function nextWish() {
  ha(); const a = ga();
  let n = ci;
  for (let t = 0; t < TOTAL_CARDS; t++) { n = (n + 1) % TOTAL_CARDS; if (n <= a) break; }
  if (n > a) return;
  ci = n;
  const d = cardData[n], c = document.getElementById('unfoldedCard');
  burstConfetti();
  const ws = cl === 'bn' ? (d.type === 'yearly' ? yearlyWbn : bonusWbn)[d.wishIdx] : (d.type === 'yearly' ? yearlyW : bonusW)[d.wishIdx];
  const so = cl === 'bn' ? d.signoffBn : d.signoffEn;
  c.innerHTML = '<div class="unfolded-card-inner" style="background:' + d.bg + '"><button class="close-btn" id="closeUnfolded">✕</button><div class="wish-icon">' + d.wishIcon + '</div><div class="wish-name">Happy Birthday, Afiya!</div><div class="wish-sub">You\'re ' + a + ' today — June 13</div><div class="wish-msg">' + ws + '</div><div class="wish-signoff">' + so + '</div><div class="unfolded-card-buttons"><button class="gallery-btn" id="galleryBtn">📸 View Memories</button><button class="cake-btn" id="cakeBtn">🎂 Blow Candles</button><button class="share-btn" id="shareBtn">📤 Share Card</button><button class="next-btn" id="nextWishBtn">💫 Another Wish</button></div></div>';
  const ci0 = n;
  document.getElementById('closeUnfolded').addEventListener('click', gb);
  document.getElementById('galleryBtn').addEventListener('click', () => openGallery(ci0 % photos.length));
  document.getElementById('cakeBtn').addEventListener('click', openCakeScreen);
  document.getElementById('shareBtn').addEventListener('click', shareCard);
  document.getElementById('nextWishBtn').addEventListener('click', nextWish);
  const u = c.querySelector('.unfolded-card-inner');
  if (u) { u.style.animation = 'none'; void u.offsetWidth; u.style.animation = 'wishReveal 0.5s ease-out'; }
  setTimeout(() => tw(c.querySelector('.wish-msg')), 300);
}

// ===== CAKE =====
function openCakeScreen() { ocs(); }
function ocs() { nh.push('cakeScreen'); ss('cakeScreen', 'slide-up'); initCandles(); }
function initCandles() {
  cl5 = 5;
  const s = document.getElementById('cakeStage'), m = document.getElementById('cakeMsg');
  m.classList.remove('show'); m.textContent = '';
  const sc = ['#ff6b9d', '#ffd700', '#00d4ff', '#7cff7c', '#c44dff', '#fff'], sh = [];
  for (let i = 0; i < 30; i++) sh.push('<div class="cake-sprinkle" style="top:' + (Math.random() * 90) + '%;left:' + (Math.random() * 90) + '%;background:' + sc[i % sc.length] + ';width:' + (4 + Math.random() * 4) + 'px;height:' + (4 + Math.random() * 4) + 'px;border-radius:' + (Math.random() > 0.5 ? '50%' : '2px') + ';"></div>');
  s.innerHTML = '<div class="cake-base"><div class="cake-tier cake-tier-3"><div class="cake-frosting-wavy"></div><div class="cake-sprinkles">' + sh.slice(0, 12).join('') + '</div></div><div class="cake-tier cake-tier-2"><div class="cake-frosting"></div><div class="cake-sprinkles">' + sh.slice(12, 22).join('') + '</div></div><div class="cake-tier cake-tier-1"><div class="cake-frosting"></div><div class="cake-sprinkles">' + sh.slice(22).join('') + '</div></div><div class="candles-row" id="candlesRow"><div class="candle" data-candle="0" onclick="ec(this)"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div><div class="candle" data-candle="1" onclick="ec(this)"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div><div class="candle" data-candle="2" onclick="ec(this)"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div><div class="candle" data-candle="3" onclick="ec(this)"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div><div class="candle" data-candle="4" onclick="ec(this)"><div class="candle-flame">🔥</div><div class="candle-smoke">💨</div><div class="candle-body"></div></div></div></div>';
  updateCandleCounter();
}
function ec(el) {
  ha();
  if (el.classList.contains('extinguished')) return;
  el.classList.add('extinguished'); cl5--;
  updateCandleCounter();
  if (cl5 <= 0) {
    burstConfetti(); if (st.fireworks) launchFireworks();
    setTimeout(() => { document.getElementById('cakeMsg').textContent = i18n[cl].cakeDone; document.getElementById('cakeMsg').classList.add('show'); }, 400);
    setTimeout(() => { if (nh.length >= 2) { const p = nh[nh.length - 2]; ss(p, 'slide-down'); nh.pop(); } }, 2500);
  }
}
function updateCandleCounter() {
  const e = document.getElementById('candleCounter');
  if (e) e.innerHTML = i18n[cl].cakeLeft + ' <span>' + cl5 + '/5</span>';
}

// ===== GALLERY =====
function startGalleryAuto() { stopGalleryAuto(); gint = setInterval(() => setGallerySlide(gi + 1), 3500); }
function stopGalleryAuto() { if (gint) { clearInterval(gint); gint = null; } }
function resetGalleryAuto() { startGalleryAuto(); }
function openGallery(idx) {
  gi = typeof idx === 'number' ? idx : 0; nh.push('galleryScreen'); ss('galleryScreen', 'slide-left');
  buildGalleryDots(); setGallerySlide(gi); startGalleryAuto();
}
function buildGalleryDots() {
  const c = document.getElementById('galleryDots'); c.innerHTML = '';
  photos.forEach((_, i) => {
    const d = document.createElement('div'); d.className = 'gallery-dot';
    d.addEventListener('click', () => { setGallerySlide(i); resetGalleryAuto(); });
    c.appendChild(d);
  });
}
function setGallerySlide(idx) {
  ha(); gi = (idx + photos.length) % photos.length;
  const i = document.getElementById('galleryImg');
  i.classList.remove('active'); void i.offsetWidth; i.src = photos[gi];
  setTimeout(() => i.classList.add('active'), 50);
  document.querySelectorAll('.gallery-dot').forEach((d, i) => d.classList.toggle('active', i === gi));
  document.getElementById('galleryCounter').textContent = (gi + 1) + ' / ' + photos.length;
}
function openLightbox() {
  const o = document.getElementById('lightboxOverlay');
  document.getElementById('lightboxImg').src = photos[gi];
  o.classList.add('active');
  document.body.style.overflow = 'hidden';
  stopGalleryAuto();
}
function closeLightbox(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('lightboxOverlay').classList.remove('active');
  document.body.style.overflow = '';
  resetGalleryAuto();
}
function lightboxNav(d) {
  gi = (gi + d + photos.length) % photos.length;
  document.getElementById('lightboxImg').src = photos[gi];
  setGallerySlide(gi);
  ha();
}

// ===== SHARE =====
async function shareCard() {
  const l = document.getElementById('shareLoading'); l.classList.add('show');
  try {
    const c = document.querySelector('.unfolded-card-inner'); if (!c) return;
    if (typeof html2canvas === 'undefined') {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      await new Promise((r, j) => { s.onload = r; s.onerror = j; document.head.appendChild(s); });
    }
    const cv = await html2canvas(c, { backgroundColor: null, scale: 2, useCORS: true, allowTaint: false });
    l.classList.remove('show');
    cv.toBlob(async (b) => {
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([b], 'birthday-wish.png', { type: 'image/png' })] })) {
        try { await navigator.share({ title: 'Happy Birthday Afiya!', files: [new File([b], 'birthday-wish.png', { type: 'image/png' })] }); }
        catch (e) { if (e.name !== 'AbortError') downloadBlob(b); }
      } else { downloadBlob(b); }
    }, 'image/png');
  } catch (e) { l.classList.remove('show'); alert(i18n[cl].shareFail); }
}
function downloadBlob(b) {
  const u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u; a.download = 'birthday-wish-afiya.png';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(u), 5000);
}

// ===== SPARKLES =====
(function () {
  let to;
  document.addEventListener('mousemove', (e) => { if (!se) return; clearTimeout(to); to = setTimeout(() => spawnSparkle(e.clientX, e.clientY), 30); });
  document.addEventListener('touchmove', (e) => { if (!se) return; const t = e.touches[0]; spawnSparkle(t.clientX, t.clientY); }, { passive: true });
  document.addEventListener('click', (e) => { tapBurst(e.clientX, e.clientY); });
})();
function spawnSparkle(x, y) {
  if (sc > 20) return; sc++;
  const e = document.createElement('div'); e.className = 'sparkle-particle';
  const cs = ['#ffd700', '#ff6b9d', '#c44dff', '#00d4ff', '#fff', '#7cff7c'];
  const sz = 3 + Math.random() * 6, an = Math.random() * Math.PI * 2, di = 20 + Math.random() * 40;
  e.style.left = x + 'px'; e.style.top = y + 'px'; e.style.width = sz + 'px'; e.style.height = sz + 'px';
  e.style.background = cs[Math.floor(Math.random() * cs.length)];
  e.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
  e.style.setProperty('--sx', Math.cos(an) * di + 'px');
  e.style.setProperty('--sy', Math.sin(an) * di - 30 + 'px');
  e.style.boxShadow = '0 0 6px ' + e.style.background;
  document.body.appendChild(e); setTimeout(() => { e.remove(); sc--; }, 800);
}
function tapBurst(x, y) {
  const cs = ['#ffd700', '#ff6b9d', '#c44dff', '#00d4ff', '#fff', '#7cff7c', '#ff8c42'];
  for (let i = 0; i < 12; i++) {
    const e = document.createElement('div'); e.className = 'sparkle-particle';
    const sz = 3 + Math.random() * 5, a = Math.random() * Math.PI * 2, d = 30 + Math.random() * 60;
    e.style.left = x + 'px'; e.style.top = y + 'px'; e.style.width = sz + 'px'; e.style.height = sz + 'px';
    e.style.background = cs[Math.floor(Math.random() * cs.length)];
    e.style.borderRadius = '50%';
    e.style.setProperty('--sx', Math.cos(a) * d + 'px');
    e.style.setProperty('--sy', Math.sin(a) * d - 20 + 'px');
    e.style.boxShadow = '0 0 4px ' + e.style.background;
    document.body.appendChild(e); setTimeout(() => e.remove(), 900);
  }
}

// ===== BALLOONS =====
function spawnBalloons(cnt) {
  document.querySelectorAll('.balloon').forEach(b => b.remove());
  const emojis = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎉', '🎊', '🌟', '💖'];
  for (let i = 0; i < cnt; i++) {
    const e = document.createElement('div'); e.className = 'balloon'; e.textContent = emojis[i % emojis.length];
    e.style.left = (5 + Math.random() * 85) + '%'; e.style.top = (60 + Math.random() * 35) + '%';
    e.style.setProperty('--bd', (6 + Math.random() * 4) + 's'); e.style.setProperty('--bdd', (Math.random() * 3) + 's');
    e.style.fontSize = (2 + Math.random() * 1.5) + 'rem';
    e.addEventListener('click', () => { if (e.classList.contains('pop')) return; e.classList.add('pop'); ha(); burstConfetti(); setTimeout(() => e.remove(), 500); });
    document.body.appendChild(e);
  }
}

// ===== FIREWORKS =====
function initFireworks() {
  fwc = document.getElementById('fireworksCanvas'); fwx = fwc.getContext('2d');
  resizeCanvas(); window.addEventListener('resize', resizeCanvas);
}
function resizeCanvas() { if (!fwc) return; fwc.width = window.innerWidth; fwc.height = window.innerHeight; }
function launchFireworks() {
  if (!st.fireworks || !fwc) return; lft = Date.now();
  const c = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < c; i++) { setTimeout(() => { const x = fwc.width * (0.15 + Math.random() * 0.7), y = fwc.height * (0.1 + Math.random() * 0.3); createExplosion(x, y); }, i * 300); }
  if (!fa) { fa = true; animateFireworks(); }
}
function createExplosion(x, y) {
  const co = ['#ff6b9d', '#ffd700', '#c44dff', '#00d4ff', '#ff8c42', '#7cff7c', '#fff', '#ff4444'];
  const c = 50 + Math.floor(Math.random() * 30);
  for (let i = 0; i < c; i++) { const a = Math.random() * Math.PI * 2, s = 80 + Math.random() * 200; fl.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, decay: 0.008 + Math.random() * 0.012, size: 2 + Math.random() * 3, color: co[Math.floor(Math.random() * co.length)] }); }
  for (let i = 0; i < 10; i++) { const a = Math.random() * Math.PI * 2, s = 20 + Math.random() * 50; fl.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, decay: 0.02 + Math.random() * 0.03, size: 1 + Math.random() * 2, color: '#ffd700' }); }
}
function animateFireworks() {
  fwx.clearRect(0, 0, fwc.width, fwc.height);
  fl = fl.filter(p => p.life > 0);
  fl.forEach(p => { p.x += p.vx * 0.016; p.y += p.vy * 0.016; p.vy += 120 * 0.016; p.life -= p.decay; fwx.globalAlpha = p.life; fwx.beginPath(); fwx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2); fwx.fillStyle = p.color; fwx.fill(); });
  fwx.globalAlpha = 1;
  if (fl.length > 0 || Date.now() - lft < 3000) { requestAnimationFrame(animateFireworks); } else { fa = false; fwx.clearRect(0, 0, fwc.width, fwc.height); }
}

// ===== CONTROL PANEL =====
function initControlPanel() {
  const s = localStorage.getItem('afiya_settings');
  if (s) { try { st = JSON.parse(s); } catch (e) {} }
  cl = st.lang; applyLang(cl); applyTheme(); updateSwitches();
}
function togglePanel() { document.getElementById('cpDrawer').classList.toggle('open'); document.getElementById('cpToggle').classList.toggle('active'); }
function closePanel() { document.getElementById('cpDrawer').classList.remove('open'); document.getElementById('cpToggle').classList.remove('active'); }
function saveSettings() { localStorage.setItem('afiya_settings', JSON.stringify(st)); }
function updateSwitches() {
  document.getElementById('switchLang').classList.toggle('on', st.lang === 'bn');
  document.getElementById('switchFw').classList.toggle('on', st.fireworks);
  document.getElementById('switchSparkles').classList.toggle('on', st.sparkles);
  const ccs = document.getElementById('switchCC'); if (ccs) ccs.classList.toggle('on', st.cc);
  const ds = document.getElementById('switchDark'); if (ds) ds.classList.toggle('on', st.dark);
  const ti = document.getElementById('themeIcon'); if (ti) ti.textContent = st.dark ? '🌙' : '☀️';
  const ll = document.getElementById('cpLangLabel'); if (ll) ll.textContent = st.lang === 'en' ? 'EN' : 'বাংলা';
}
function applyLang(lg) {
  const t = i18n[lg] || i18n.en; cl = lg;
  document.querySelectorAll('[data-i18n]').forEach(e => {
    const k = e.dataset.i18n; if (t[k]) {
      if (e.tagName === 'INPUT' || e.tagName === 'TEXTAREA') e.placeholder = t[k];
      else e.textContent = t[k];
    }
  });
  document.documentElement.lang = lg === 'bn' ? 'bn' : 'en';
  updateCandleCounter();
}
function toggleLang() { st.lang = st.lang === 'en' ? 'bn' : 'en'; cl = st.lang; saveSettings(); applyLang(cl); updateSwitches(); }
function toggleFw() { st.fireworks = !st.fireworks; saveSettings(); updateSwitches(); if (st.fireworks) launchFireworks(); }
function toggleSparkles() { st.sparkles = !st.sparkles; se = st.sparkles; saveSettings(); updateSwitches(); }
function toggleCC() { st.cc = !st.cc; saveSettings(); updateSwitches(); if (st.cc) startCC(); else stopCC(); }
function startCC() {
  if (ccint) return;
  const co = ['#ff6b9d', '#ffd700', '#c44dff', '#f8b4d9', '#00d4ff', '#ff6b35', '#7cff7c', '#ff4444'];
  ccint = setInterval(() => {
    const e = document.createElement('div'); e.className = 'confetti-piece';
    e.style.background = co[Math.floor(Math.random() * co.length)];
    e.style.left = Math.random() * 100 + '%';
    const w = 4 + Math.random() * 7; e.style.width = w + 'px'; e.style.height = (4 + Math.random() * 7) + 'px';
    e.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    e.style.setProperty('--delay', '0s'); e.style.setProperty('--fall-duration', (3 + Math.random() * 5) + 's');
    document.getElementById('confettiContainer').appendChild(e);
    setTimeout(() => e.remove(), 8000);
  }, 200);
}
function stopCC() { if (!ccint) return; clearInterval(ccint); ccint = null; }
function toggleDark() { st.dark = !st.dark; saveSettings(); updateSwitches(); applyTheme(); }
function applyTheme() { document.documentElement.dataset.theme = st.dark ? 'dark' : 'light'; }

// ===== HANDLERS =====
function previewBirthday() { ss('birthdayScreen', 'fade'); initBirthday(); }
function goBack() { gb(); }
function fwBtnClick() {
  lft = Date.now(); if (!fa) { fa = true; animateFireworks(); }
  for (let i = 0; i < 3; i++) { setTimeout(() => { lft = Date.now(); if (!fwc) return; const x = fwc.width * (0.1 + Math.random() * 0.8), y = fwc.height * (0.1 + Math.random() * 0.3); createExplosion(x, y); }, i * 400); }
}
function galleryPrev() { setGallerySlide(gi - 1); resetGalleryAuto(); }
function galleryNext() { setGallerySlide(gi + 1); resetGalleryAuto(); }

// ===== DECORATIONS =====
(function () {
  const dec = ['🎈', '🎉', '🎊', '✨', '🌟', '💖', '🎀', '🌸', '⭐', '💫'];
  const cc = document.getElementById('floatingDeco');
  for (let i = 0; i < 20; i++) {
    const e = document.createElement('div'); e.className = 'deco';
    e.textContent = dec[Math.floor(Math.random() * dec.length)];
    e.style.setProperty('--x', Math.random() * 100 + '%');
    e.style.setProperty('--dur', (8 + Math.random() * 8) + 's');
    e.style.setProperty('--delay', Math.random() * 12 + 's');
    e.style.fontSize = (1.2 + Math.random() * 1.8) + 'rem'; cc.appendChild(e);
  }
})();
(function () {
  const co = ['#ff6b9d', '#ffd700', '#c44dff', '#f8b4d9', '#00d4ff', '#ff6b35', '#7cff7c', '#ff4444'];
  const cc = document.getElementById('confettiContainer');
  for (let i = 0; i < 80; i++) {
    const e = document.createElement('div'); e.className = 'confetti-piece';
    e.style.background = co[Math.floor(Math.random() * co.length)];
    e.style.left = Math.random() * 100 + '%';
    const w = 4 + Math.random() * 7; e.style.width = w + 'px';
    e.style.height = (4 + Math.random() * 7) + 'px';
    e.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    e.style.setProperty('--delay', Math.random() * 8 + 's');
    e.style.setProperty('--fall-duration', (3 + Math.random() * 5) + 's');
    cc.appendChild(e);
  }
})();

// ===== PWA =====
if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); }); }
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); dP = e; document.getElementById('installToast').classList.add('show'); });
function installPWA() {
  if (!dP) return; dP.prompt();
  dP.userChoice.then(r => { dP = null; document.getElementById('installToast').classList.remove('show'); });
}

// ===== KEYBOARD NAV =====
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightboxOverlay');
  if (e.key === 'Escape') {
    closePanel();
    if (lb.classList.contains('active')) { lb.classList.remove('active'); document.body.style.overflow = ''; resetGalleryAuto(); return; }
    const g = document.getElementById('galleryScreen');
    if (g.classList.contains('visible')) gb();
    return;
  }
  if (e.key === 'ArrowLeft') {
    if (lb.classList.contains('active')) { lightboxNav(-1); return; }
    const g = document.getElementById('galleryScreen');
    if (g.classList.contains('visible')) { setGallerySlide(gi - 1); resetGalleryAuto(); }
  }
  if (e.key === 'ArrowRight') {
    if (lb.classList.contains('active')) { lightboxNav(1); return; }
    const g = document.getElementById('galleryScreen');
    if (g.classList.contains('visible')) { setGallerySlide(gi + 1); resetGalleryAuto(); }
  }
});

// ===== TOUCH SWIPE =====
(function () {
  let sx = 0;
  document.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const lb = document.getElementById('lightboxOverlay');
    if (lb.classList.contains('active')) {
      const d = sx - e.changedTouches[0].clientX;
      if (Math.abs(d) > 50) lightboxNav(d > 0 ? 1 : -1);
      return;
    }
    const g = document.getElementById('galleryScreen');
    if (!g.classList.contains('visible')) return;
    const d = sx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) {
      if (d > 0) { setGallerySlide(gi + 1); resetGalleryAuto(); } else { setGallerySlide(gi - 1); resetGalleryAuto(); }
    }
  });
})();

document.getElementById('fwBtn').addEventListener('click', fwBtnClick);

// ===== INIT =====
try {
  (function () {
    const t = gt(); initFireworks();
    if (ib(t)) { nh.push('birthdayScreen'); ss('birthdayScreen', 'fade'); initBirthday(); }
    else { nh.push('countdownScreen'); ss('countdownScreen', 'fade'); initCountdown(); }
    initControlPanel(); if (st.cc) startCC();
  })();
} catch (e) { console.error('Init error:', e); }
