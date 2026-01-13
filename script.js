const chatBox = document.getElementById("chat-box");
const quickBox = document.getElementById("quick-questions");
const input = document.getElementById("userInput");

let currentLang = "en";
const sheetURL =
  "https://script.google.com/macros/s/AKfycbxcx22SSdDARLd-IWPjhKco_aq_1NtYgCzOyQwWXVVjW-NON16fxvrp1PwqEom3z696Tw/exec";

const content = {
  en: {
    welcome: "👋 Welcome to the Pure Talent Virtual Assistant. How may we assist you today?",
    questions: {
      timing: "🕒 Working Hours",
      holidays: "📅 Weekly Day Off",
      annualLeave: "🏖 Annual Leave",
      absence: "🚫 Absence Policy",
      warnings: "⚠️ Disciplinary System",
      rules: "📜 Company Rules",
      location: "📍 Work Location",
      extraLeave: "➕ Additional Leave Policy",
      other: "❓ Other Inquiry"
    },
    replies: {
      timing: "Working hours are assigned by the Store Manager based on operational requirements.",
      holidays: "Employees are entitled to one (1) weekly day off, approved by the Team Leader.",
      annualLeave: "Employees are eligible for sixty (60) days of annual leave after completing two (2) consecutive years of service.",
      absence: "Any unauthorized absence for one (1) day will be recorded as three (3) days.",
      warnings:
        "Two (2) written warnings will be issued. The third violation will result in immediate termination.",
      rules:
        "• Alcohol consumption inside company accommodation is strictly prohibited.\n" +
        "• Physical fights, sexual harassment, verbal abuse, or raising one's voice are strictly prohibited.\n" +
        "• Theft or tampering with other employees’ personal belongings is strictly forbidden.\n" +
        "• No external or non-company individuals are allowed inside company accommodation.\n" +
        "• Creating conflicts, disturbances, or inappropriate behavior is not allowed.\n" +
        "• Repeated late attendance may lead to disciplinary action.\n" +
        "• The value of any violation penalty will be determined by company management.\n" +
        "• Violations may result in penalties up to and including termination.",
      location: "Employees may be assigned to any work location within the UAE as per business needs.",
     extraLeave: "After completing two (2) years of service, the employee is entitled to sixty (60) days of annual leave. Any leave exceeding this will be calculated and managed in accordance with company policy."
    },
    form: {
      question: "Your Inquiry",
      name: "Full Name",
      phone: "Contact Number",
      id: "Emirates ID",
      mall: "Mall Name",
      submit: "Submit"
    },
    thanks: "✅ Thank you. Our team will contact you shortly."
  },

  hi: {
    welcome: "👋 Pure Talent वर्चुअल असिस्टेंट में आपका स्वागत है।",
    questions: {
      timing: "🕒 कार्य समय",
      holidays: "📅 साप्ताहिक अवकाश",
      annualLeave: "🏖 वार्षिक अवकाश",
      absence: "🚫 अनुपस्थिति नीति",
      warnings: "⚠️ अनुशासन प्रणाली",
      rules: "📜 कंपनी के नियम",
      location: "📍 कार्य स्थान",
      extraLeave: "➕ अतिरिक्त अवकाश नीति",
      other: "❓ अन्य पूछताछ"
    },
    replies: {
      timing: "कार्य समय स्टोर मैनेजर द्वारा निर्धारित किया जाता है।",
      holidays: "कर्मचारियों को सप्ताह में एक दिन अवकाश दिया जाता है।",
      annualLeave: "दो वर्ष सेवा के बाद 60 दिन का अवकाश मिलेगा।",
      absence: "एक दिन की अनुपस्थिति तीन दिन मानी जाएगी।",
      warnings:
        "दो (2) लिखित चेतावनियाँ दी जाएँगी। तीसरी बार सेवा समाप्त की जाएगी।",
      rules:
        "• कंपनी आवास में शराब सख्त मना है।\n" +
        "• शारीरिक झगड़ा, यौन उत्पीड़न, गाली-गलौज या आवाज ऊँची करना मना है।\n" +
        "• चोरी या दूसरों की चीज़ों से छेड़छाड़ सख्त मना है।\n" +
        "• बाहरी व्यक्तियों को कंपनी आवास में अनुमति नहीं है।\n" +
        "• अनुशासनहीन व्यवहार स्वीकार्य नहीं है।\n" +
        "• देर से आने पर कार्रवाई होगी।\n" +
        "• किसी भी दंड की राशि कंपनी तय करेगी।",
      location: "कार्य स्थान आवश्यकतानुसार बदला जा सकता है।",
extraLeave: "दो (2) वर्ष की सेवा पूरी करने के बाद कर्मचारी को 60 दिनों का वार्षिक अवकाश मिलेगा। इससे अधिक ली गई किसी भी छुट्टी की गणना कंपनी की नीति के अनुसार की जाएगी।"
    },
    form: {
      question: "आपकी पूछताछ",
      name: "पूरा नाम",
      phone: "संपर्क नंबर",
      id: "एमिरेट्स आईडी",
      mall: "मॉल का नाम",
      submit: "जमा करें"
    },
    thanks: "✅ धन्यवाद। हम शीघ्र संपर्क करेंगे।"
  },

  ne: {
    welcome: "👋 Pure Talent भर्चुअल सहायकमा स्वागत छ।",
    questions: {
      timing: "🕒 कार्य समय",
      holidays: "📅 साप्ताहिक बिदा",
      annualLeave: "🏖 वार्षिक बिदा",
      absence: "🚫 अनुपस्थिति नीति",
      warnings: "⚠️ अनुशासन प्रणाली",
      rules: "📜 कम्पनी नियम",
      location: "📍 कार्य स्थान",
      extraLeave: "➕ अतिरिक्त बिदा नीति",
      other: "❓ अन्य सोधपुछ"
    },
    replies: {
      timing: "कार्य समय स्टोर म्यानेजरले तोक्नेछ।",
      holidays: "हप्तामा एक दिन बिदा दिइनेछ।",
      annualLeave: "दुई वर्षपछि ६० दिन बिदा पाइन्छ।",
      absence: "एक दिन अनुपस्थिति तीन दिन मानिन्छ।",
      warnings:
        "दुई (2) चेतावनीपछि तेस्रो पटक सेवा समाप्त हुन्छ।",
      rules:
        "• कम्पनी आवासमा मदिरा निषेध छ।\n" +
        "• कुटपिट, यौन दुर्व्यवहार, चिच्याउने व्यवहार निषेध छ।\n" +
        "• चोरी वा अरूको सामान चलाउनु अपराध हो।\n" +
        "• बाहिरी व्यक्तिलाई आवासमा अनुमति छैन।\n" +
        "• कम्पनीले जरिवानाको मूल्य निर्धारण गर्नेछ।",
      location: "UAE भित्र कार्य स्थान परिवर्तन हुन सक्छ।",
      extraLeave: "सेवाको दुई (2) वर्ष पूरा गरेपछि कर्मचारीले ६० दिनको वार्षिक बिदा पाउनेछ। सोभन्दा बढी लिइने कुनै पनि बिदा कम्पनीको नीति अनुसार गणना गरिनेछ।"
    },
    form: {
      question: "तपाईंको सोधपुछ",
      name: "पूरा नाम",
      phone: "सम्पर्क नम्बर",
      id: "एमिरेट्स आईडी",
      mall: "मल नाम",
      submit: "पठाउनुहोस्"
    },
    thanks: "✅ धन्यवाद। छिट्टै सम्पर्क गर्नेछौं।"
  },

  ta: {
    welcome: "👋 Pure Talent மெய்நிகர் உதவியாளருக்கு வரவேற்கிறோம்.",
    questions: {
      timing: "🕒 வேலை நேரம்",
      holidays: "📅 வார விடுப்பு",
      annualLeave: "🏖 ஆண்டு விடுப்பு",
      absence: "🚫 अनुपस्थिति கொள்கை",
      warnings: "⚠️ ஒழுக்க முறை",
      rules: "📜 நிறுவன விதிமுறைகள்",
      location: "📍 பணியிடம்",
      extraLeave: "➕ கூடுதல் விடுப்பு",
      other: "❓ பிற விசாரணை"
    },
    replies: {
      timing: "வேலை நேரம் மேலாளரால் நிர்ணயிக்கப்படுகிறது。",
      holidays: "வாரத்திற்கு ஒரு நாள் விடுப்பு。",
      annualLeave: "2 ஆண்டுகளுக்குப் பிறகு 60 நாட்கள் விடுப்பு。",
      absence: "ஒரு நாள் अनुपस्थिति மூன்று நாளாக கணக்கிடப்படும்。",
      warnings:
        "இரண்டு (2) எச்சரிக்கைகள் வழங்கப்படும். மூன்றாவது முறையில் பணி நீக்கம்。",
      rules:
        "• நிறுவன விடுதியில் மதுபானம் தடை。\n" +
        "• சண்டை, பாலியல் தொல்லை, சத்தமாக பேசுதல் தடை。\n" +
        "• திருட்டு அல்லது பிறரின் பொருட்களை தொடுதல் தடை。\n" +
        "• வெளிநபர்களுக்கு அனுமதி இல்லை。\n" +
        "• அபராத மதிப்பை நிறுவனம் தீர்மானிக்கும்。",
      location: "UAE முழுவதும் பணியிடம் மாற்றப்படலாம்。",
      extraLeave: "இரண்டு (2) ஆண்டுகள் சேவையை முடித்த பிறகு, பணியாளருக்கு 60 நாட்கள் ஆண்டு விடுப்பு வழங்கப்படும். அதனை மீறி எடுக்கப்படும் எந்த விடுப்பும் நிறுவனக் கொள்கையின் படி கணக்கிடப்படும்."
    },
    form: {
      question: "உங்கள் விசாரணை",
      name: "முழு பெயர்",
      phone: "தொடர்பு எண்",
      id: "எமிரேட்ஸ் ஐடி",
      mall: "மால் பெயர்",
      submit: "சமர்ப்பிக்கவும்"
    },
    thanks: "✅ நன்றி. விரைவில் தொடர்பு கொள்வோம்."
  }
};


function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = `msg ${type}`;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function loadQuickQuestions() {
  quickBox.innerHTML = "";
  Object.keys(content[currentLang].questions).forEach(key => {
    const btn = document.createElement("button");
    btn.className = "quick-btn";
    btn.innerText = content[currentLang].questions[key];
    btn.onclick = () => handleQuick(key);
    quickBox.appendChild(btn);
  });
}

function handleQuick(key) {
  addMessage(content[currentLang].questions[key], "user");
  if (key === "other") showForm();
  else addMessage(content[currentLang].replies[key], "bot");
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, "user");
  input.value = "";
  showForm(text);
}

function showForm(questionText = "") {
  const form = document.createElement("div");
  form.className = "form-card";

  form.innerHTML = `
    <textarea>${questionText}</textarea>
    <input placeholder="${content[currentLang].form.name}">
    <input placeholder="${content[currentLang].form.phone}">
    <input placeholder="${content[currentLang].form.id}">
    <input placeholder="${content[currentLang].form.mall}">
    <button>${content[currentLang].form.submit}</button>
  `;

  form.querySelector("button").onclick = () => {
    const fields = form.querySelectorAll("textarea, input");
    const payload = {
      question: fields[0].value,
      name: fields[1].value,
      phone: fields[2].value,
      id: fields[3].value,
      mall: fields[4].value,
      language: currentLang
    };

    fetch(sheetURL, {
      method: "POST",
      body: JSON.stringify(payload)
    });

    form.remove();
    addMessage(content[currentLang].thanks, "bot");
  };

  chatBox.appendChild(form);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function changeLanguage(lang) {
  currentLang = lang;
  loadQuickQuestions();
}

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.querySelector(".chat-app").classList.remove("hidden");
    addMessage(content[currentLang].welcome, "bot");
    loadQuickQuestions();
  }, 1200);
};


/* ================= CHAT ================= */
function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = `msg ${type}`;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function loadQuickQuestions() {
  quickBox.innerHTML = "";
  Object.keys(content[currentLang].questions).forEach(key => {
    const btn = document.createElement("button");
    btn.className = "quick-btn";
    btn.innerText = content[currentLang].questions[key];
    btn.onclick = () => handleQuick(key);
    quickBox.appendChild(btn);
  });
}

function handleQuick(key) {
  addMessage(content[currentLang].questions[key], "user");
  if (key === "other") showForm();
  else addMessage(content[currentLang].replies[key], "bot");
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, "user");
  input.value = "";
  showForm(text);
}

/* ================= FORM (WITH VALIDATION) ================= */
function showForm(questionText = "") {
  const form = document.createElement("div");
  form.className = "form-card";

  form.innerHTML = `
    <textarea placeholder="${content[currentLang].form.question}">${questionText}</textarea>
    <input placeholder="${content[currentLang].form.name}">
    <input placeholder="${content[currentLang].form.phone}">
    <input placeholder="${content[currentLang].form.id}">
    <input placeholder="${content[currentLang].form.mall}">
    <button>${content[currentLang].form.submit}</button>
  `;

  form.querySelector("button").onclick = () => {
    const fields = form.querySelectorAll("textarea, input");

    const question = fields[0].value.trim();
    const name = fields[1].value.trim();
    const phone = fields[2].value.trim();
    const id = fields[3].value.trim();
    const mall = fields[4].value.trim();

    // ✅ تحقق من اكتمال البيانات
    if (!question || !name || !phone || !id || !mall) {
      alert("⚠️ Please fill all fields");
      return;
    }

    // ✅ تحقق من رقم الهاتف الإماراتي (971XXXXXXXXX فقط)
    const uaePhoneRegex = /^971\d{9}$/;
    if (!uaePhoneRegex.test(phone)) {
      alert("⚠️ Invalid UAE phone number\nExample: 971501234567");
      return;
    }

    // ✅ تحقق من رقم الهوية الإماراتية
    const emiratesIdRegex = /^784-\d{11}-\d$/;
    if (!emiratesIdRegex.test(id)) {
      alert("⚠️ Invalid Emirates ID\nExample: 784-19816056149-3");
      return;
    }

    const payload = {
      question,
      name,
      phone,
      id,
      mall,
      language: currentLang
    };

    fetch(sheetURL, {
      method: "POST",
      body: JSON.stringify(payload)
    });

    form.remove();
    addMessage(content[currentLang].thanks, "bot");
  };

  chatBox.appendChild(form);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* ================= LANGUAGE ================= */
function changeLanguage(lang) {
  currentLang = lang;
  chatBox.innerHTML = "";
  quickBox.innerHTML = "";
  input.value = "";
  addMessage(content[currentLang].welcome, "bot");
  loadQuickQuestions();
}

/* ================= INIT ================= */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const app = document.querySelector(".chat-app");

    if (loader) loader.style.display = "none";
    if (app) app.classList.remove("hidden");

    addMessage(content[currentLang].welcome, "bot");
    loadQuickQuestions();
  }, 800);
});
