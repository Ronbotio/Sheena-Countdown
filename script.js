// --- NEW: ANNOUNCEMENT DATA ---
const ANNOUNCEMENTS = [
    { 
        date: "2025-11-23", // YYYY-MM-DD format
        title: "Welcome to the Countdown!", 
        message: "Check in daily for new games and encouragement. Tap the bubble for updates!" 
    },
    { 
        date: "2025-12-06", 
        title: "🎁 December 6th Surprise Alert!", 
        message: "The first surprise is ready! Check the countdown page and click the surprise button!" 
    },
    { 
        date: "2025-12-12", 
        title: "🎬 Video Reminder!", 
        message: "Just a reminder about the birthday video—make sure it's ready!" 
    },
    { 
        date: "2025-12-20", 
        title: "✈️ Jeju Spa & Christmas Canteen!", 
        message: "The post-birthday events are today! Have a wonderful time!" 
    }
];
// ----------------------------------

// --- CONFIGURATION ---
const BIRTHDAY_PERSON = "Sheena";
// IMPORTANT: Keep this date accurate for the calculation (YYYY-MM-DD)
const BIRTHDAY_DATE_STRING = "2025-12-18"; 

// --- 1. MESSAGE ARRAY (Full Content) ---
const MESSAGES = [
    // --- BIBLE VERSES ---
    "Zephaniah 3:17: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.'",
    "Jeremiah 29:11: 'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'",
    "Philippians 4:13: 'I can do all this through him who gives me strength.'",
    "Isaiah 41:10: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.'",
    "Proverbs 3:5-6: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.'",
    "Romans 15:13: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.'",
    "Ephesians 2:10: 'For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.'",
    "Joshua 1:9: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.'",
    "Psalm 139:14: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.'",
    "2 Corinthians 12:9: 'But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.''",
    "Romans 8:28: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.'",
    "Isaiah 40:31: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary; they will walk and not be faint.'",
    "1 Peter 5:7: 'Cast all your anxiety on him because he cares for you.'",
    "Psalm 46:1: 'God is our refuge and strength, an ever-present help in trouble.'",
    "Lamentations 3:22-23: 'Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.'",
    "John 16:33: 'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.'",
    "Psalm 27:1: 'The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?'",
    "Galatians 6:9: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.'",
    "Psalm 121:1-2: 'I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.'",
    "Colossians 3:23: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.'",
    
    // --- PERSONAL MESSAGES ---
    "Remember that time we walked Stone Mountain in the AM. I started to walk ahead in an attempt to encourage you. Little did I know. I'll never forget your solemn expression. First time I'd encountered upset Sheena. Awkward moment but it built our friendship.",
    "I'm so thankful for the day we met at Blueprint Stone Mountain. I knew we'd be great friends when started our morning Stone Mountain walks and that led to us doing a 7 day water fast...the rest is history.😁",
    "I love our friendship. One of my most cherished moments is when we went out to the playground with Zachariah in the Avana 29 apartment complex. I think we played tag and climbed the monkey bars. He was 4 or 5 years old at the time.",
    "Just thinking about all our food runs: Whole Foods - Bangkok Street Food - Maple Street Biscuit Company - Dekalb Farmers Market - Okiboru Ramen - Ramen Gallery - Wally World - Publix - Popshelf - Just name a few. 😋",
    "Thank you for being the kind of friend to: Sit in total slience with - Be ever on mission for Jesus Christ! - Have gut bursting laughter with - Challenge me even when I don't feel like it - Encourage my days of anger, happiness, joy, sorrow, and grief with sober relevant words reflecting christ-like character - Out do me in servant hood...etc.💓",
    "I'm over joyed to be walking through this season of life with you KP! Lets GOOOOOOOOOO!💪🏾😁",
    "I've always admired your unwavering patience. I see the fruit of the spirit in you!",
    "KP my friend your obedience and faithfullness to our Lord point me back to Jesus. Even when your unfaithful and disobedient. Praise Yah for us being blood brought!🩸🧼",
    "That criss cross referency brain of yours is autographed by the Great I Am! Don't change a single neuron or synapse, unless of course its going to renew your mind for the glory of Abba!🧠",
    "Every gift is from above. YOU are a gift from above....and you are loved for YOU, in all the best ways!",
    "Thank you for always being the redeemed Sheena I've come to know and continue to learn and grow beside.",
    "My favorite quality about is your enormous meticulous compassionate heart for others expressed in mind, speech, and deed.🥰",
    "You inspire me, the kiddos, momma Stacey, and so many more in your circle of influence. I've seen you overcome trials with Waffle House Corporate, family matters, Covid-19👀, Church closing, financial burdens, housing transitions...furture trials by God's grace. May your character in Christ be strengthened through the power of His holy spirit.💪🏾",
    "Just a reminder your an evangilist baddie! lol.",
    "You have a gift for teaching, leading worship in song, and making people feel heard.",
    "I'm so thankufl for a sister in Christ who I can always count on to pray for me, with me, and push me to be in the Lord's presence.",
    "Watching your faith in action, especially when you fasted & prayed for 14 days on water alone interceeding for your fam! Its inspired my own faith KP!",
    "Watching in first person all the amazing things God has accomplished in your life this year has been exciting and joyful.🥹",
    "Thank you for always reminding me of God's truth, especially when I was impatient, pharisaical, upset, grieving, and excited. Much Love KP! 🤟🏾",
    "Just like Eliza Doolittle's dream of a better life. Keep storing up treasures above. Oh when you arrive at your heavenly home 'Would'nt It Be Loverly?'",
    "I was just listening to 'Christian's Song' by Torey Dshaun and it made me think of the time on our way home from the BP O4W conference listening to 'Come and See' album in your car. Thank you for the bop! *starts dancing🕺🏾",
    "Eh......at your wedding we may need to add Alfred Doolittle's 'With a bit of luck' song. So we can.....I mean so I can dance. Lol"
];

// --- 2. CIPHER GAME ARRAYS ---
const RIDDLES_ENCODED = [
    "V unir pvgrf, ohg ab ubhfrf. V unir zbhagnvaf, ohg ab gerrf. V unir jngre, ohg ab svfu. Jung nZ V?", 
    "V nz n Wncnarfr frn bs oebgu, jurer jnil yvarf bs jurng ner gbffrq. Jung nz V?", 
    "V'z n zrgny onaq gung gryyf lbh gb \"Onat Lbhe Urnq,\" gubhtu zl anzr fbhagf yvxr n fvyrag qernq. Jung nZ V?", 
    "Gur enva va Fcnva snyyf znvayl ba gur cynva, nyy gb uryc Ryvmn Qbyvggyr genva. Jung zhfvpny nz V?",
    "V'z n grne-qebc onxrq va pynl, cresrpg sbe fpbbpvng pheel njnl. Jung nz V?",
    "V sel jvgu abguvat ohg n thfg, znxvat sbbq pevic jvgu n tbyqra pehfg. Jung nz V?",
    "V nz gur pbybe bs eblnygl, n zvk bs cnffvba'f erq naq pnyz frn oyhr. Jung nz V?",
    "V nz bar yrff guna sbegl'f pbhag, guerr gvzrf guvegrra vf zl nzbhag. Jung ahzore nz V?",
    "V'z n Puevfgvna enccre jub oevatf gur urng, jvgu \"Ob Eneqv\" naq \"Unccl\" orngf. Jub nz V?",
    "V jnf n cebcurg, zhgr sbe n gvzr, gur sngure bs n Oncgvfg fhoyvzr. Jub nz V?",
    "V'z n ehaavat fubr gung urycf lbh syl, anzrq sbe gur jvatrq ubefv va gur fxl. Jung nz V?",
    "Zl anzr vf whfg gjb yrggref, fubeg naq fjrfg. \"X\" vf gur svefg, \"C\" znxrf vg pbzcygrgr. Jub nz V?",
    "V nz jub lbh ner guebhtu snvgu naq tenpr, nqbcgrq va n ubyl cynpr. Jung nz V?",
    "V nz qehzf naq syngf, gbffrq va fnhpr, n zrffl gerng gung'f jbegu gur pbfg. Jung nz V?",
    "V nz n obql, n ubyl cynpr, ohvyg ba \"Tbfcry Arjf\" naq fnivat tenpr. Jung nz V?",
    "V nz n cbjqre lbh qevax jura ubg, gb svtug gur pbyq naq syh lbh'r tbg. Jung nz V?",
];
const ANSWERS_DECODED = [
    "a map",
    "ramen",
    "quiet riot",
    "my fair lady",
    "naan bread",
    "air fryer",
    "purple",
    "39",
    "torey d'shaun",
    "zachariah",
    "nike pegasus",
    "kp",
    "child of god",
    "chicken wings",
    "gospel hope church",
    "theraflu",
];

// --- GAME STATE VARIABLES ---
let gameState = {
    activity: 'message', 
    secretNumber: 0,
    guessCount: 0,
    maxGuesses: 5
};

// --- CORE FUNCTIONS ---

// Function to calculate and display the countdown
function updateCountdown() {
    
    // 1. DATE CALCULATION (Midnight Fix)
    const [year, month, day] = BIRTHDAY_DATE_STRING.split('-').map(Number);
    
    const targetDate = new Date(year, month - 1, day); 
    targetDate.setHours(0, 0, 0, 0); 
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    const msDifference = targetDate.getTime() - today.getTime();
    const daysRemaining = Math.floor(msDifference / (1000 * 60 * 60 * 24));

    // Update the main number display element immediately
    document.getElementById('days-remaining').textContent = daysRemaining;
    
    const surpriseSection = document.getElementById('surprise-section');
    const activitySection = document.getElementById('message-section');

    // 2. PRIMARY CONDITIONAL LOGIC (Determines Display State)

    if (daysRemaining > 0) {
        
        // --- COUNTDOWN MODE ---
        
        // **CRITICAL:** Ensure the activity section is made visible here
        surpriseSection.style.display = 'none';
        activitySection.style.display = 'block'; 

        document.getElementById('main-heading').textContent = "Birthday Countdown";
        document.getElementById('countdown-text').textContent = `There are day(s) left until your birthday, ${BIRTHDAY_PERSON}!`;
        
        // --- Randomly select and display the daily activity ---
        const activityChoice = Math.floor(Math.random() * 3); 
        
        if (activityChoice === 0) {
            displayRandomMessage();
        } else if (activityChoice === 1) {
            displayCipherGame();
        } else {
            displayGuessingGame();
        }
    
    // ... (rest of the function)

    } else if (daysRemaining === 0) {
        
        // --- IT'S THE BIRTHDAY! ---
        document.getElementById('main-heading').textContent = `🎉 HAPPY BIRTHDAY, ${BIRTHDAY_PERSON}! 🎉`;
        document.getElementById('countdown-text').textContent = 'The celebration is NOW!';
        document.getElementById('days-remaining').textContent = '0'; 
        
        // Ensure the birthday logic runs:
        generateQRCode(); 
        sendBirthdayReminder(); 
        
        activitySection.style.display = 'none';
        surpriseSection.style.display = 'block';

    } else if (daysRemaining < 0) {
        
        // --- BIRTHDAY HAS PASSED ---
        const daysAgo = Math.abs(daysRemaining); 
        
        document.getElementById('main-heading').textContent = `Birthday Has Passed`;
        document.getElementById('countdown-text').textContent = `The birthday was ${daysAgo} days ago.`;
        document.getElementById('days-remaining').textContent = `—`; 
        
        // Display a random message for continued engagement
        activitySection.style.display = 'block';
        surpriseSection.style.display = 'none';
        displayRandomMessage();
    }
}

// Function to pick and display a random message
function displayRandomMessage() {
    // Selects a random index based on the length of the global MESSAGES array
    const randomIndex = Math.floor(Math.random() * MESSAGES.length);
    
    // Gets the dedicated HTML container for activities
    const activityElement = document.getElementById('message-section'); 
    
    // Overwrites the inner HTML with the new content
    activityElement.innerHTML = `
        <h2>💌 Your Daily Encouragement:</h2>
        <p id="encouraging-message" class="message-box">${MESSAGES[randomIndex]}</p>
    `;
}

// --- CIPHER GAME LOGIC (ROT13) ---

function displayCipherGame() {
    const randomIndex = Math.floor(Math.random() * RIDDLES_ENCODED.length);
    gameState.cipherAnswer = ANSWERS_DECODED[randomIndex];

    const activityElement = document.getElementById('message-section');
    activityElement.innerHTML = `
        <h2>🔒 ROT13 Cipher Challenge!</h2>
        <p class="instruction">Decode the riddle below. (Hint: Each letter is shifted 13 places.)</p>
        
        <p class="hint-text">
            Stuck? Use this online tool: 
            <a href="https://rot13.com/" target="_blank">ROT13 Decoder</a>
        </p>
        <p class="riddle-box">${RIDDLES_ENCODED[randomIndex]}</p>
        <div class="input-group">
            <input type="text" id="cipher-input" placeholder="Your answer...">
            <button onclick="checkCipherAnswer()">Submit</button>
        </div>
        <p id="cipher-feedback"></p>
    `;
}

function checkCipherAnswer() {
    const userInput = document.getElementById('cipher-input').value.toLowerCase().trim();
    const feedback = document.getElementById('cipher-feedback');
    
    if (userInput === gameState.cipherAnswer) {
        feedback.className = 'feedback-success';
        feedback.innerHTML = `🎉 **You got it!** The answer is **"${gameState.cipherAnswer}"**. Well done!`;
        document.querySelector('#message-section button').disabled = true;
    } else {
        feedback.className = 'feedback-fail';
        feedback.innerHTML = `😥 Not quite! Keep trying or use an online ROT13 tool!`;
    }
}


// --- GUESSING GAME LOGIC ---

function displayGuessingGame() {
    // Generate a new secret number between 1 and 50
    gameState.secretNumber = Math.floor(Math.random() * 50) + 1;
    gameState.guessCount = 0;
    
    const activityElement = document.getElementById('message-section');
    activityElement.innerHTML = `
        <h2>🎲 Guess the Number!</h2>
        <p class="instruction">I'm thinking of a number between 1 and 50. You have ${gameState.maxGuesses} tries.</p>
        <div class="input-group">
            <input type="number" id="guess-input" placeholder="Enter your guess (1-50)">
            <button onclick="checkGuess()">Guess</button>
        </div>
        <p id="guess-feedback"></p>
        <p id="tries-left">Tries left: ${gameState.maxGuesses}</p>
    `;
}

function checkGuess() {
    const userInput = parseInt(document.getElementById('guess-input').value);
    const feedback = document.getElementById('guess-feedback');
    const triesLeftElement = document.getElementById('tries-left');
    
    if (isNaN(userInput) || userInput < 1 || userInput > 50) {
        feedback.className = 'feedback-fail';
        feedback.textContent = "Please enter a valid number between 1 and 50.";
        return;
    }
    
    gameState.guessCount++;
    const remaining = gameState.maxGuesses - gameState.guessCount;
    triesLeftElement.textContent = `Tries left: ${remaining}`;

    if (userInput === gameState.secretNumber) {
        feedback.className = 'feedback-success';
        feedback.textContent = `You got it! The number was ${gameState.secretNumber}. It took you ${gameState.guessCount} tries!`;
        document.querySelector('#message-section button').disabled = true; 
    } else if (gameState.guessCount >= gameState.maxGuesses) {
        feedback.className = 'feedback-fail';
        feedback.textContent = `Out of tries! The secret number was ${gameState.secretNumber}.`;
        document.querySelector('#message-section button').disabled = true;
    } else if (userInput < gameState.secretNumber) {
        feedback.className = 'feedback-fail';
        feedback.textContent = "Too low! Try again.";
    } else { // userInput > gameState.secretNumber
        feedback.className = 'feedback-fail';
        feedback.textContent = "Too high! Try again.";
    }
}

// --- QR CODE LOGIC (Used only on birthday) ---

function generateQRCode() {
    // Data to encode: The American Greetings link
    const qrCodeData = "https://www.americangreetings.com/pickup?token=rc193f7437994410fb93cb6355bd39086&source=ag999"; 
    
    const encodedData = encodeURIComponent(qrCodeData);

    // 2. Build the URL using the stable GoQR.me API format
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodedData}`;

    const displayDiv = document.getElementById('qr-code-display');
    
    // Prevent image duplication
    if (displayDiv.innerHTML.includes('<img')) {
        return; 
    }

    // Insert the new image tag
    displayDiv.innerHTML = `<img src="${qrCodeUrl}" alt="Birthday QR Code">`;
    
    // Update the visible message below the QR code 
    document.getElementById('birthday-message-text').textContent = "Scan the code above to open your special digital birthday card!";
}

// Initialize the countdown when the page loads
updateCountdown();
// Update the countdown every minute

// --- JAVASCRIPT LOGIC FOR CHAT BUBBLE & BADGE ---

// Function to toggle the chat panel visibility
function toggleChatPanel() {
    const panel = document.getElementById('announcement-panel');
    const badge = document.getElementById('unread-badge');

    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        // When panel opens, mark all currently visible messages as read
        markMessagesAsRead();
    } else {
        panel.classList.add('hidden');
    }
}

// Function to load announcements and calculate the badge count
function loadAnnouncements() {
    const today = new Date().toISOString().split('T')[0];
    const listElement = document.getElementById('announcement-list');
    const badgeElement = document.getElementById('unread-badge');
    const readAnnouncements = JSON.parse(localStorage.getItem('readAnnouncements') || '[]');
    let unreadCount = 0;
    let listHTML = '';

    // Filter announcements that should be active today or any day before
    const activeAnnouncements = ANNOUNCEMENTS.filter(ann => ann.date <= today);

    if (activeAnnouncements.length === 0) {
        listElement.innerHTML = '<p class="placeholder-message">No new announcements yet.</p>';
        badgeElement.classList.add('hidden');
        return;
    }

    activeAnnouncements.reverse().forEach(ann => {
        const isRead = readAnnouncements.includes(ann.date);
        
        // Build the HTML for the announcement item
        listHTML += `
            <div class="announcement-item ${isRead ? 'read' : ''}" data-date="${ann.date}">
                <h4>${ann.title}</h4>
                <p>${ann.message}</p>
            </div>
        `;
        
        if (!isRead) {
            unreadCount++;
        }
    });

    listElement.innerHTML = listHTML;
    
    // Update the badge count
    if (unreadCount > 0) {
        badgeElement.textContent = unreadCount;
        badgeElement.classList.remove('hidden');
    } else {
        badgeElement.classList.add('hidden');
    }
}

// Function to mark all current announcements as read
function markMessagesAsRead() {
    const today = new Date().toISOString().split('T')[0];
    const newReadAnnouncements = ANNOUNCEMENTS
        .filter(ann => ann.date <= today)
        .map(ann => ann.date);
    
    // Store the dates of all currently visible announcements as 'read'
    localStorage.setItem('readAnnouncements', JSON.stringify(newReadAnnouncements));
    
    // Refresh the view to update badge and dim read items
    loadAnnouncements();
}

// --- CALL THIS FUNCTION AT THE END OF YOUR SCRIPT ---
loadAnnouncements();
// ---------------------------------------------------

setInterval(updateCountdown, 1000 * 60);










