// --- CONFIGURATION ---
const BIRTHDAY_PERSON = "Sheena";
// We keep the date string for use in ANNOUNCEMENTS but remove calculation logic
const BIRTHDAY_DATE_STRING = "2025-12-18"; 

// --- 1. MESSAGE ARRAY (Full Content) ---
const MESSAGES = [
    // --- BIBLE VERSES ---
    "Zephaniah 3:17: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you; but will rejoice over you with singing.'",
    "Jeremiah 29:11: 'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'",
    "Philippians 4:13: 'I can do all this through him who gives me strength.'",
    "Isaiah 41:10: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.'",
    "Proverbs 3:5-6: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.'",
    "Romans 15:13: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.'",
    "Ephesians 2:10: 'For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.'",
    "Joshua 1:9: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.'",
    "Psalm 139:14: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.'",
    "2 Corinthians 12:9: 'But he said to me, 'My grace is sufficient for you, for his power is made perfect in weakness.''",
    "Romans 8:28: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.'",
    "Isaiah 40:31: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary; they will walk and not be faint.'",
    "1 Peter 5:7: 'Cast all your anxiety on him because he cares for you.'",
    "Psalm 46:1: 'God is our refuge and strength, an ever-present help in trouble.'",
    "Lamentations 3:22-23: 'Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.'",
    "John 16:33: 'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.'",
    "Psalm 27:1: 'The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?'",
    "Galatians 6:9: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we will not give up.'",
    "Psalm 121:1-2: 'I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.'",
    "Colossians 3:23: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.'",
    
    // --- PERSONAL MESSAGES ---
    "Remember that time we walked Stone Mountain in the AM. I started to walk ahead in an attempt to encourage you. Little did I know. I'll never forget your solemn expression. First time I'd encountered upset Sheena. Awkward moment but it built our friendship.",
    "I'm so thankful for the day we met at Blueprint Stone Mountain. I knew we'd be great friends when started our morning Stone Mountain walks and that led to us doing a 7 day water fast...the rest is history.😁",
    "I love our friendship. One of my most cherished moments is when we went out to the playground with Zachariah in the Avana 29 apartment complex. I think we played tag and climbed the monkey bars. He was 4 or 5 years old at the time.",
    "Just thinking about all our food runs: Whole Foods - Bangkok Street Food - Maple Street Biscuit Company - Dekalb Farmers Market - Okiboru Ramen - Ramen Gallery - Wally World - Publix - Popshelf - Just to name a few. 😋",
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
    "V nz bar yrff guna sbegl'f pbhag, guerr gvzmf guvegrra vf zl nzbhag. Jung ahzure nz V?",
    "V'z n Puevfgvna enccre jub o
