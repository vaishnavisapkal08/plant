// --- Navbar Menu Toggle Logic ---
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// --- Full Website Translation Logic ---
const langSwitcher = document.getElementById('langSwitcher');

const mrDict = {
    // Nav
    "Eng": "Eng",
    "मराठी": "मराठी",
    "Home": "मुख्य पृष्ठ",
    "Plants": "रोपे",
    "About": "आमच्याबद्दल",
    "Contact": "संपर्क",
    "Login": "लॉगिन",

    // Hero & Stats
    "Eco-friendly booking experience": "पर्यावरणास अनुकूल बुकिंग अनुभव",
    "Bring Nature to Your Home 🌱": "निसर्ग आपल्या घरी आणा 🌱",
    "Book your favorite plants online easily and turn every corner into a fresh, green, calming space.": "तुमची आवडती रोपे सहजपणे ऑनलाइन बुक करा आणि प्रत्येक कोपरा ताजा, हिरवागार आणि शांत बनवा.",
    "Explore Plants": "रोपे पहा",
    "Healthy plants": "निरोगी रोपे",
    "Fast": "जलद",
    "Doorstep delivery": "घरपोच सेवा",
    "Easy": "सोपे",
    "Online booking": "ऑनलाइन बुकिंग",

    // About
    "About the System": "प्रणालीबद्दल",
    "Simple online plant booking for every home and garden": "प्रत्येक घर आणि बागेसाठी साधी ऑनलाइन रोप बुकिंग",
    "This nursery system allows users to browse, select, and book plants online with ease. We provide healthy plants with fast delivery.": "ही नर्सरी प्रणाली वापरकर्त्यांना सहजपणे ऑनलाइन रोपे ब्राउझ करण्यास, निवडण्यास आणि बुक करण्यास अनुमती देते. आम्ही जलद वितरणासह निरोगी रोपे प्रदान करतो.",
    "GreenGrow Nursery blends convenience with care by helping customers discover beautiful greenery, read useful details, and place bookings confidently from any device.": "ग्राहकांना सुंदर हिरवाई शोधण्यास, उपयुक्त तपशील वाचण्यास आणि कोणत्याही डिव्हाइसवरून आत्मविश्वासाने बुकिंग करण्यास मदत करून ग्रीनग्रो नर्सरी सुविधेची काळजी घेते.",

    // Features
    "Why Choose Us": "आम्हाला का निवडावे",
    "Everything you need for an easy plant booking experience": "सोप्या रोप बुकिंग अनुभवासाठी आपल्याला आवश्यक असलेले सर्व काही",
    "Each feature is designed to make browsing, booking, and caring for your plants simple and enjoyable.": "प्रत्येक वैशिष्ट्य रोपे ब्राउझ करणे, बुकिंग करणे आणि त्यांची काळजी घेणे सोपे आणि आनंददायक बनवण्यासाठी डिझाइन केलेले आहे.",
    "Wide Variety of Plants": "रोपांची मोठी विविधता",
    "Explore a rich collection of indoor, outdoor, decorative, and useful plants curated for every kind of space.": "प्रत्येक प्रकारच्या जागेसाठी योग्य असलेल्या घरातील, बाहेरील, सजावटीच्या आणि उपयुक्त रोपांचा समृद्ध संग्रह एक्सप्लोर करा.",
    "Indoor, outdoor, flowering, medicinal plants": "घरातील, बाहेरील, फुलांची, औषधी रोपे",
    "Seasonal and rare plants available": "हंगामी आणि दुर्मिळ रोपे उपलब्ध",
    "Suitable for all environments": "सर्व वातावरणासाठी योग्य",
    "Easy Online Booking": "सोपे ऑनलाइन बुकिंग",
    "Our booking flow is simple, clear, and beginner-friendly so users can select plants without confusion.": "आमचा बुकिंग प्रवाह सोपा, स्पष्ट आणि नवशिक्यांसाठी अनुकूल आहे जेणेकरून वापरकर्ते गोंधळ न करता रोपे निवडू शकतील.",
    "Simple interface for selecting plants": "रोपे निवडण्यासाठी सोपा इंटरफेस",
    "Add to cart and quick checkout": "कार्टमध्ये जोडा आणि त्वरित चेकआउट करा",
    "Order tracking available": "ऑर्डर ट्रॅकिंग उपलब्ध",
    "Healthy & Fresh Plants": "निरोगी आणि ताजी रोपे",
    "We prioritize plant quality through expert care, clean growing conditions, and careful nursery management.": "आम्ही तज्ञांची काळजी, स्वच्छ वाढीच्या अटी आणि काळजीपूर्वक नर्सरी व्यवस्थापनाद्वारे रोपांच्या गुणवत्तेला प्राधान्य देतो.",
    "Grown with expert care": "तज्ञांच्या काळजीने वाढलेले",
    "Disease-free and high quality": "रोगमुक्त आणि उच्च दर्जाची",
    "Organic growing methods": "सेंद्रिय लागवडीच्या पद्धती",
    "Fast Delivery": "जलद वितरण",
    "Plants are packed with protection and delivered quickly so they arrive fresh and ready for their new home.": "रोपे सुरक्षिततेसह पॅक केली जातात आणि लवकर वितरीत केली जातात जेणेकरून ती ताजी आणि त्यांच्या नवीन घरासाठी तयार पोहोचतील.",
    "Safe and eco-friendly packaging": "सुरक्षित आणि पर्यावरणपूरक पॅकेजिंग",
    "Quick doorstep delivery": "जलद घरपोच वितरण",
    "Damage protection ensured": "नुकसानीपासून संरक्षणाची खात्री",
    "Gardening Support": "बागकाम समर्थन",
    "Helpful care guidance makes it easier for beginners and hobby gardeners to keep plants healthy for longer.": "नवशिक्या आणि छंद बागकाम करणाऱ्यांना रोपे निरोगी ठेवणे सोपे करण्यासाठी उपयुक्त काळजी मार्गदर्शन.",
    "Plant care instructions included": "रोप काळजी सूचना समाविष्ट",
    "Tips for watering and sunlight": "पाण्याची आणि सूर्यप्रकाशाची काळजी",
    "Beginner-friendly guidance": "नवशिक्यांसाठी अनुकूल मार्गदर्शन",
    "Secure Payments": "सुरक्षित देयके",
    "Checkout is built to feel safe and reliable with flexible payment methods and instant confirmation.": "चेकआउट लवचिक पेमेंट पद्धती आणि त्वरित पुष्टीकरणासह सुरक्षित आणि विश्वसनीय वाटण्यासाठी डिझाइन केलेले आहे.",
    "UPI, Card, Net Banking options": "युपीआय, कार्ड, नेट बँकिंग पर्याय",
    "Safe and encrypted transactions": "सुरक्षित आणि कूटबद्ध व्यवहार",
    "Instant order confirmation": "त्वरित ऑर्डर पुष्टीकरण",

    // Featured Plants
    "Featured Plants": "वैशिष्ट्यीकृत रोपे",
    "Popular plants ready for online booking": "ऑनलाइन बुकिंगसाठी तयार असलेली लोकप्रिय रोपे",
    "Choose from customer favorites that fit homes, balconies, gardens, and workspaces beautifully.": "घरे, बाल्कनी, बागा आणि वर्कस्पेसमध्ये सुंदर बसणाऱ्या ग्राहकांच्या आवडीमधून निवडा.",
    "Aloe Vera": "कोरफड (अ‍ॅलोव्हेरा)",
    "A low-maintenance medicinal plant known for soothing properties and easy indoor care.": "शांत करणारे गुणधर्म आणि सोप्या काळजीसाठी ओळखले जाणारे कमी देखभालीचे औषधी रोप.",
    "Book Now": "आता बुक करा",
    "Snake Plant": "स्नेक प्लांट",
    "A stylish air-purifying plant that thrives indoors and looks great in modern spaces.": "घरामध्ये वाढणारे आणि आधुनिक जागांमध्ये उत्तम दिसणारे स्टाइलिश हवा शुद्ध करणारे रोप.",
    "Tulsi": "तुळस",
    "A sacred herbal plant valued for its fragrance, health benefits, and daily household use.": "सुगंध, आरोग्य फायदे आणि दररोजच्या घरगुती वापरासाठी मौल्यवान मानले जाणारे पवित्र रोप.",
    "Rose": "गुलाब",
    "A timeless flowering favorite that adds color, fragrance, and elegance.": "रंग, सुगंध आणि सुंदरता जोडणारे आवडते फुलझाड.",

    // Gallery
    "Gallery": "गॅलरी",
    "A quick look inside our green world": "आमच्या हिरव्या जगाची एक झलक",
    "Browse snapshots of nursery spaces, lush corners, and beautiful plant collections.": "नर्सरीची ठिकाणे, हिरवेगार कोपरे आणि सुंदर रोप संग्रहाची छायाचित्रे पहा.",

    // Booking Form
    "Reserve Your Plant": "तुमचे रोप आरक्षित करा",
    "Direct Booking Form": "थेट बुकिंग फॉर्म",
    "Select your desired botanical companion and arrange for doorstep delivery.": "तुमचा आवडता वनस्पती जोडीदार निवडा आणि घरपोच वितरणाची व्यवस्था करा.",
    "Plant Category": "रोपांची श्रेणी",
    "Select Category First": "प्रथम श्रेणी निवडा",
    "Select Plant Name": "रोपाचे नाव निवडा",
    "Select Plant First": "प्रथम रोप निवडा",
    "Plant Size / Variety": "रोपाचा आकार / विविधता",
    "Select Variety": "विविधता निवडा",
    "Estimated Cost": "अंदाजे खर्च",
    "Availability": "उपलब्धता",
    "In Stock": "उपलब्ध",
    "Out of Stock": "स्टॉकमध्ये नाही",
    "Full Name": "संपूर्ण नाव",
    "Enter your full name": "तुमचे संपूर्ण नाव प्रविष्ट करा",
    "Mobile Number": "मोबाईल नंबर",
    "e.g. 9876543210": "उदा. ९८७६५४३२१०",
    "Delivery Address": "वितरणाचा पत्ता",
    "Enter your full home sanctuary address...": "तुमचा संपूर्ण पत्ता प्रविष्ट करा...",
    "Confirm Booking 🌱": "बुकिंग निश्चित करा 🌱",

    // Categories
    "Indoor Plants": "घरातील रोपे",
    "Outdoor Plants": "बाहेरील रोपे",
    "Flowering Plants": "फुलांची रोपे",
    "Medicinal Plants": "औषधी रोपे",
    "Decorative Plants": "सजावटीची रोपे",
    "Herbal Plants": "वनस्पती रोपे",
    "Fruits": "फळे",
    "Vegetable Plants": "भाज्यांची रोपे",
    "Cash Crop": "नगदी पिके",

    // Plant Types
    "Mango Plant": "आंब्याचे रोप",
    "Money Plant": "मनी प्लांट",
    "Neem Tree": "कडुलिंब",

    // Summary
    "📦 Booking Summary": "📦 बुकिंग सारांश",
    "🌿 Selected Plant:": "🌿 निवडलेले रोप:",
    "🌱 Variety:": "🌱 विविधता:",
    "💰 Total Cost:": "💰 एकूण खर्च:",
    "💸 Advance Payment (50%):": "💸 अॅडव्हान्स पेमेंट (५०%):",
    "💳 Pay Advance Now": "💳 आता अॅडव्हान्स पे करा",
    "Scan & Pay Advance Amount": "स्कॅन करा आणि अॅडव्हान्स रक्कम भरा",
    "👉 I Have Paid": "👉 मी पे केले आहे",
    "✅ Booking Confirmed Successfully!We will contact you shortly.": "✅ बुकिंग यशस्वीरीत्या निश्चित झाली! आम्ही लवकरच तुमच्याशी संपर्क साधू.",

    // Footer
    "© 2026 GreenGrow Nursery. All Rights Reserved.": "© २०२६ ग्रीनग्रो नर्सरी. सर्व हक्क राखीव.",
    "Database Dashboard": "डेटाबेस डॅशबोर्ड"
};

// Global DOM translation caches
const originalTexts = new Map();
const originalPlaceholders = new Map();

function translateEntireDOM(lang) {
    const isMr = (lang === 'mr');

    function walk(node) {
        // Handle standalone text nodes
        if (node.nodeType === Node.TEXT_NODE) {
            const trimmed = node.nodeValue.trim();
            if (trimmed.length > 0) {
                // Ignore parsing large script bodies or styles entirely
                if (node.parentNode && (node.parentNode.nodeName === 'SCRIPT' || node.parentNode.nodeName === 'STYLE')) {
                    return;
                }

                if (!originalTexts.has(node)) {
                    originalTexts.set(node, trimmed);
                }

                const og = originalTexts.get(node);
                if (isMr && mrDict[og]) {
                    node.nodeValue = node.nodeValue.replace(og, mrDict[og]);
                } else if (!isMr) {
                    const translatedVal = mrDict[og];
                    if (translatedVal && node.nodeValue.includes(translatedVal)) {
                        node.nodeValue = node.nodeValue.replace(translatedVal, og);
                    }
                }
            }
        }
        else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
            // Handle placeholders
            if (node.placeholder) {
                if (!originalPlaceholders.has(node)) {
                    originalPlaceholders.set(node, node.placeholder.trim());
                }
                const og = originalPlaceholders.get(node);
                if (isMr && mrDict[og]) node.placeholder = mrDict[og];
                else if (!isMr) node.placeholder = og;
            }
            node.childNodes.forEach(walk);
        }
    }

    walk(document.body);
}

if (langSwitcher) {
    langSwitcher.addEventListener('change', (e) => {
        translateEntireDOM(e.target.value);
    });
}


// --- Leaf Particles Ambient Animation ---
const leavesContainer = document.getElementById('leavesContainer');

function createLeaf() {
    if (!leavesContainer) return;

    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // Choose a random SVG leaf shape
    const leafSvgs = [
        `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%232b7a0b' d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z'/></svg>")`,
        `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%235bb318' d='M21.4,11.6C21.4,11.6 19.3,6.3 12.8,4.8L11.5,2V4.5C6.1,4.9 2.5,9.6 2.5,15C2.5,15.8 2.6,16.5 2.8,17.2L0.6,21.8L2.5,22.7L4.3,18.9C5.8,20.2 7.7,21 9.8,21C14.7,21 18.9,17.5 19.8,12.8L21.4,11.6Z'/></svg>")`
    ];

    leaf.style.backgroundImage = leafSvgs[Math.floor(Math.random() * leafSvgs.length)];
    leaf.style.left = Math.random() * 100 + 'vw';

    // Random animation physics
    const duration = Math.random() * 6 + 6; // 6s to 12s
    leaf.style.animationDuration = duration + 's';

    // Custom properties for CSS
    leaf.style.setProperty('--translateX', (Math.random() * 200 - 100) + 'vw');
    leaf.style.setProperty('--rotateEnd', (Math.random() * 720) + 'deg');

    leavesContainer.appendChild(leaf);

    // Clean up memory when animation ends
    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// Generate a leaf every 1.2 seconds for dense ambient feel
setInterval(createLeaf, 1200);

document.addEventListener('DOMContentLoaded', async () => {
    // Pre-seed some leaves so the screen isn't empty on load
    for (let i = 0; i < 8; i++) {
        setTimeout(createLeaf, i * 400);
    }

    // --- Booking Form Logic ---
    const plantSelect = document.getElementById('plantSelect');
    const varietySelect = document.getElementById('varietySelect');
    const calculatedCost = document.getElementById('calculatedCost');
    const onlineBookingForm = document.getElementById('onlineBookingForm');
    const bookingSuccessMsg = document.getElementById('bookingSuccessMsg');

    if (plantSelect) {
        let globalPlants = [];

        try {
            // Try fetching from the actual node.js backend server
            const response = await fetch('/plants');
            globalPlants = await response.json();
        } catch (err) {
            console.log("Offline mode: Using local fallback data for booking form.");
            // Offline fallback data matching the dashboard
            globalPlants = [
                { id: 1, name: "Aloe Vera", varieties: ["Small", "Medium", "Large"], price: { "Small": 100, "Medium": 200, "Large": 300 } },
                { id: 2, name: "Snake Plant (Sansevieria)", varieties: ["Small", "Medium", "Large"], price: { "Small": 150, "Medium": 250, "Large": 350 } },
                { id: 3, name: "Tulsi (Holy Basil)", varieties: ["Small", "Medium"], price: { "Small": 80, "Medium": 150 } },
                { id: 4, name: "Classic Red Rose", varieties: ["Red", "Pink", "White"], price: { "Red": 120, "Pink": 130, "White": 140 } },
                { id: 5, name: "Monstera Deliciosa", varieties: ["Medium", "Large", "Giant"], price: { "Medium": 500, "Large": 800, "Giant": 1200 } },
                { id: 6, name: "Peace Lily", varieties: ["Small", "Medium"], price: { "Small": 200, "Medium": 400 } },
                { id: 7, name: "Fiddle Leaf Fig", varieties: ["Medium", "Large", "Tree"], price: { "Medium": 600, "Large": 900, "Tree": 1500 } },
                { id: 8, name: "Golden Pothos (Devil's Ivy)", varieties: ["Hanging Basket", "Standing Pot"], price: { "Hanging Basket": 300, "Standing Pot": 250 } },
                { id: 9, name: "Spider Plant", varieties: ["Small", "Hanging Basket"], price: { "Small": 120, "Hanging Basket": 280 } },
                { id: 10, name: "ZZ Plant (Zamioculcas)", varieties: ["Small", "Medium", "Large"], price: { "Small": 180, "Medium": 350, "Large": 600 } },
                { id: 11, name: "Bamboo Palm", varieties: ["Medium", "Large"], price: { "Medium": 450, "Large": 750 } },
                { id: 12, name: "Money Plant", varieties: ["Small Glass", "Medium Pot", "Large Totem"], price: { "Small Glass": 150, "Medium Pot": 200, "Large Totem": 500 } },
                { id: 13, name: "Jade Plant", varieties: ["Miniature", "Bonsai Style"], price: { "Miniature": 200, "Bonsai Style": 800 } },
                { id: 14, name: "Bird of Paradise", varieties: ["Medium", "Large"], price: { "Medium": 700, "Large": 1300 } },
                { id: 15, name: "Lavender", varieties: ["Small Seedling", "Bush"], price: { "Small Seedling": 100, "Bush": 350 } },
                { id: 16, name: "Bonsai Ficus", varieties: ["5 Years Old", "10 Years Old", "20 Years Old"], price: { "5 Years Old": 800, "10 Years Old": 2500, "20 Years Old": 5000 } },
                { id: 17, name: "Chinese Evergreen", varieties: ["Pink Array", "Silver Queen"], price: { "Pink Array": 350, "Silver Queen": 400 } },
                { id: 18, name: "Rubber Plant", varieties: ["Small", "Medium", "Large"], price: { "Small": 180, "Medium": 400, "Large": 700 } },
                { id: 19, name: "Areca Palm", varieties: ["Indoor Pot", "Outdoor Base", "Giant Tree"], price: { "Indoor Pot": 300, "Outdoor Base": 600, "Giant Tree": 1200 } },
                { id: 20, name: "Pilea Peperomioides", varieties: ["Miniature", "Full Size"], price: { "Miniature": 250, "Full Size": 450 } },
                { id: 21, name: "String of Pearls", varieties: ["Small Cup", "Trailing Basket"], price: { "Small Cup": 200, "Trailing Basket": 550 } },
                { id: 22, name: "Boston Fern", varieties: ["Standard", "Large Hanging"], price: { "Standard": 150, "Large Hanging": 350 } },
                { id: 23, name: "Philodendron Pink Princess", varieties: ["Cutting", "Rooted Plant"], price: { "Cutting": 1500, "Rooted Plant": 4500 } },
                { id: 24, name: "Cast Iron Plant", varieties: ["Small", "Medium"], price: { "Small": 300, "Medium": 600 } },
                { id: 25, name: "Orchid (Phalaenopsis)", varieties: ["Single Spike", "Double Spike", "Premium Collector"], price: { "Single Spike": 600, "Double Spike": 900, "Premium Collector": 2500 } }
            ];
        }

        const categoryData = {
            "Indoor Plants": ["Snake Plant", "Money Plant", "Aloe Vera", "Spider Plant", "Peace Lily", "ZZ Plant"],
            "Outdoor Plants": ["Rose", "Hibiscus", "Tulsi", "Neem Tree", "Mango Plant", "Bougainvillea"],
            "Flowering Plants": ["Rose", "Jasmine", "Sunflower", "Marigold", "Lily"],
            "Medicinal Plants": ["Tulsi", "Aloe Vera", "Neem", "Mint", "Ashwagandha"],
            "Decorative Plants": ["Bonsai", "Cactus", "Bamboo Plant", "Lucky Plant"],
            "Herbal Plants": ["Coriander", "Mint", "Curry Leaves", "Basil"],
            "Fruits": ["Apple Tree", "Orange Tree", "Banana Plant", "Lemon Tree", "Guava", "Papaya Plant"],
            "Vegetable Plants": ["Tomato", "Mirchi", "Vange", "Kobi", "Flower / Cauliflower"],
            "Cash Crop": ["Cotton", "Sugarcane", "Soybean", "Turmeric"]
        };

        const plantCategory = document.getElementById('plantCategory');

        if (plantCategory) {
            // When Category is selected -> Populate Plant Names
            plantCategory.addEventListener('change', (e) => {
                plantSelect.innerHTML = '<option value="" disabled selected>Select Plant Name</option>';
                varietySelect.innerHTML = '<option value="" disabled selected>Select Plant First</option>';
                calculatedCost.textContent = '0';
                if (document.getElementById('plantAvailability')) document.getElementById('plantAvailability').textContent = '-';
                const submitBtn = document.querySelector('#onlineBookingForm button[type="submit"]');
                if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; }

                const selectedCategory = e.target.value;
                if (categoryData[selectedCategory]) {
                    categoryData[selectedCategory].forEach(pName => {
                        const opt = document.createElement('option');

                        let matchedPlant = globalPlants.find(g => g.name.toLowerCase().includes(pName.toLowerCase()) || pName.toLowerCase().includes(g.name.split(' ')[0].toLowerCase()));

                        if (!matchedPlant) {
                            let newVarieties = ["Small", "Medium", "Large"];
                            let newPrices = { "Small": 150, "Medium": 250, "Large": 400 };
                            if (pName.includes("Rose")) {
                                newVarieties = ["Red", "Pink", "White", "Hybrid"];
                                newPrices = { "Red": 120, "Pink": 130, "White": 140, "Hybrid": 200 };
                            } else if (pName.includes("Money Plant")) {
                                newVarieties = ["Hanging", "Pot", "Water grown"];
                                newPrices = { "Hanging": 200, "Pot": 150, "Water grown": 100 };
                            }
                            matchedPlant = {
                                id: globalPlants.length + 1000,
                                name: pName,
                                varieties: newVarieties,
                                price: newPrices
                            };
                            globalPlants.push(matchedPlant);
                        }
                        opt.value = matchedPlant.name;
                        opt.textContent = pName;
                        plantSelect.appendChild(opt);
                    });
                }

                if (langSwitcher && langSwitcher.value === 'mr') translateEntireDOM('mr');
            });
        }

        // When Plant Name is selected -> Populate Varieties
        plantSelect.addEventListener('change', (e) => {
            varietySelect.innerHTML = '<option value="" disabled selected>Select Variety</option>';
            calculatedCost.textContent = '0';
            if (document.getElementById('plantAvailability')) document.getElementById('plantAvailability').textContent = '-';
            const submitBtn = document.querySelector('#onlineBookingForm button[type="submit"]');
            if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; }

            const selectedPlant = globalPlants.find(p => p.name === e.target.value);
            if (selectedPlant) {
                selectedPlant.varieties.forEach(v => {
                    const opt = document.createElement('option');
                    opt.value = v;
                    opt.textContent = v;
                    varietySelect.appendChild(opt);
                });
            }

            if (langSwitcher && langSwitcher.value === 'mr') translateEntireDOM('mr');
        });

        // When Variety is selected -> Calculate Price dynamically
        varietySelect.addEventListener('change', (e) => {
            const selectedPlant = globalPlants.find(p => p.name === plantSelect.value);
            if (selectedPlant) {
                const variety = e.target.value;
                if (selectedPlant.price[variety]) {
                    // Quick odometer animation feel
                    calculatedCost.style.opacity = '0';
                    const availabilityElem = document.getElementById('plantAvailability');
                    if (availabilityElem) availabilityElem.style.opacity = '0';

                    setTimeout(() => {
                        const qty = Math.max(1, parseInt(document.getElementById('plantQuantity')?.value) || 1);
                        calculatedCost.textContent = selectedPlant.price[variety] * qty;
                        calculatedCost.style.opacity = '1';
                        calculatedCost.style.transition = 'opacity 0.3s';

                        if (availabilityElem) {
                            // Deterministic mock availability (80% chance available)
                            const hash = (selectedPlant.name + variety).split('').reduce((a, b) => a + b.charCodeAt(0), 0);
                            const isAvailable = hash % 5 !== 0;

                            const submitBtn = document.querySelector('#onlineBookingForm button[type="submit"]');
                            if (isAvailable) {
                                availabilityElem.innerHTML = '✅ <span style="color: #2b7a0b;" class="translate-text">In Stock</span>';
                                if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; submitBtn.innerHTML = 'Confirm Booking 🌱'; }
                            } else {
                                availabilityElem.innerHTML = '❌ <span style="color: #d9534f;" class="translate-text">Out of Stock</span>';
                                if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.5'; submitBtn.innerHTML = 'Unavailable'; }
                            }
                            availabilityElem.style.opacity = '1';
                            availabilityElem.style.transition = 'opacity 0.3s';
                            
                            if (langSwitcher && langSwitcher.value === 'mr') translateEntireDOM('mr');
                        }
                    }, 150);
                }
            }
        });

        const plantQuantity = document.getElementById('plantQuantity');
        if (plantQuantity) {
            plantQuantity.addEventListener('input', () => {
                const selectedPlant = globalPlants.find(p => p.name === plantSelect.value);
                if (selectedPlant && varietySelect.value) {
                    const variety = varietySelect.value;
                    if (selectedPlant.price[variety]) {
                        const qty = Math.max(1, parseInt(plantQuantity.value) || 1);
                        calculatedCost.textContent = selectedPlant.price[variety] * qty;
                    }
                }
            });
        }

        // Handle Booking Submission
        onlineBookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = onlineBookingForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Generating Summary...';

            setTimeout(() => {
                onlineBookingForm.style.display = 'none';

                let selectedPlants = [];
                if (plantSelect.multiple) {
                    selectedPlants = Array.from(plantSelect.selectedOptions).map(opt => opt.text);
                } else {
                    selectedPlants = [plantSelect.options[plantSelect.selectedIndex]?.text || ""];
                }

                let selectedVarieties = [];
                if (varietySelect.multiple) {
                    selectedVarieties = Array.from(varietySelect.selectedOptions).map(opt => opt.text);
                } else {
                    selectedVarieties = [varietySelect.value || ""];
                }

                const totalCostVal = parseFloat(calculatedCost.textContent) || 0;
                const advanceVal = totalCostVal / 2;
                const qtyVal = document.getElementById('plantQuantity') ? document.getElementById('plantQuantity').value : '1';

                document.getElementById('summaryPlant').textContent = selectedPlants.join(', ');
                document.getElementById('summaryVariety').textContent = selectedVarieties.join(', ');
                const summaryQuantityElem = document.getElementById('summaryQuantity');
                if (summaryQuantityElem) summaryQuantityElem.textContent = qtyVal;
                document.getElementById('summaryTotal').textContent = totalCostVal;
                document.getElementById('summaryAdvance').textContent = advanceVal;

                document.getElementById('bookingSummarySection').style.display = 'block';
            }, 800);
        });

        // Handle Payment Confirmation
        const btnHavePaid = document.getElementById('btnHavePaid');
        if (btnHavePaid) {
            btnHavePaid.addEventListener('click', () => {
                btnHavePaid.textContent = 'Verifying Secure Payment...';
                setTimeout(() => {
                    document.getElementById('bookingSummarySection').style.display = 'none';
                    bookingSuccessMsg.style.display = 'block';

                    // Trigger an extra burst of leaves!
                    for (let i = 0; i < 15; i++) {
                        setTimeout(createLeaf, i * 100);
                    }
                }, 1000);
            });
        }
    }
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrHrE-U6yhgA9rvSUBTdARWi9FoQNKKXQ",
    authDomain: "greengrow-nursery.firebaseapp.com",
    projectId: "greengrow-nursery",
    databaseURL: "https://greengrow-nursery-default-rtdb.firebaseio.com/",
    storageBucket: "greengrow-nursery.firebasestorage.app",
    messagingSenderId: "924725219315",
    appId: "1:924725219315:web:6ca7101ac7de58b6a98c86",
    measurementId: "G-H438YXNFTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const db = getDatabase(app);
window.saveData = function () {
    console.log("Button clicked");

    const category = document.getElementById("plantCategory").value;
    const plantName = document.getElementById("plantSelect").value;
    const size = document.getElementById("varietySelect").value;
    const quantity = document.getElementById("plantQuantity") ? document.getElementById("plantQuantity").value : "1";
    const cost = document.getElementById("calculatedCost").innerText;
    const userName = document.getElementById("bookingName").value;
    const mobile = document.getElementById("bookingMobile").value;
    const address = document.getElementById("bookingAddress").value;

    const bookingRef = ref(db, "bookings");
    const newBooking = push(bookingRef);

    set(newBooking, {
        plantCategory: category,
        plantName: plantName,
        plantSize: size,
        quantity: quantity,
        price: cost,
        name: userName,
        mobile: mobile,
        address: address
    });

    alert("Booking Saved ✅");
};

let pendingBookingContext = null;

// Global function to allow product cards to prefill the booking form
window.prefillBooking = function(category, plantName) {
    if (localStorage.getItem('greengrow_logged_in') !== 'true') {
        alert("please login to our website");
        pendingBookingContext = { category, plantName };
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'flex';
        }
        return;
    }
    executePrefill(category, plantName);
};

window.executePrefill = function(category, plantName) {
    const categorySelect = document.getElementById('plantCategory');
    const plantSelect = document.getElementById('plantSelect');
    if (categorySelect) {
        // Set category and trigger change
        categorySelect.value = category;
        categorySelect.dispatchEvent(new Event('change'));
        
        // Wait for plant list to populate dynamically
        setTimeout(() => {
            if (plantSelect) {
                let foundIndex = -1;
                for (let i = 0; i < plantSelect.options.length; i++) {
                    if (plantSelect.options[i].text === plantName) {
                        foundIndex = i;
                        break;
                    }
                }
                
                if (foundIndex !== -1) {
                    plantSelect.selectedIndex = foundIndex;
                    plantSelect.dispatchEvent(new Event('change'));
                }
            }
        }, 150);
    }
};

window.closeLoginModal = function() {
    const modal = document.getElementById('loginModal');
    if(modal) modal.style.display = 'none';
};

window.handleModalLogin = function() {
    const u = document.getElementById('modalUsername').value;
    const p = document.getElementById('modalPassword').value;
    if (u && p) {
        localStorage.setItem('greengrow_logged_in', 'true');
        closeLoginModal();
        if (pendingBookingContext) {
            executePrefill(pendingBookingContext.category, pendingBookingContext.plantName);
            pendingBookingContext = null;
        }
        // Ensure the view focuses on the booking area
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Please enter both username and password.");
    }
};
