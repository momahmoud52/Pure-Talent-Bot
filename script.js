const chatBox = document.getElementById("chat-box");
const quickBox = document.getElementById("quick-questions");
const input = document.getElementById("userInput");

let currentLang = "en";
const sheetURL = "https://script.google.com/macros/s/AKfycbxcx22SSdDARLd-IWPjhKco_aq_1NtYgCzOyQwWXVVjW-NON16fxvrp1PwqEom3z696Tw/exec";
const content = {
  en: {
    welcome: "👋 Welcome to Pure Talent Chat Bot! How can I help you?",
    questions: {
      timing: "🕒 Working Hours",
      holidays: "📅 Weekly Holiday",
      annualLeave: "🏖 Annual Leave",
      absence: "🚫 Absence Policy",
      warnings: "⚠️ Warning System",
      rules: "📜 Rules & Warnings",
      location: "📍 Work Location",
      extraLeave: "➕ Extra Leave Policy",
      other: "❓ Other Question"
    },
    replies: {
      timing: "Working hours are decided by your store manager.",
      holidays: "Weekly holiday is one day, decided by the team leader.",
      annualLeave:
        "You are entitled to 60 days of annual leave after completing two years of service.",
      absence:
        "One day of absence is counted as three days in company records.",
      warnings: "After three warnings, the employee will be terminated.",
      rules:
        "Alcohol consumption in accommodation is not allowed. Creating problems with others is not allowed. Coming late to work is not allowed; otherwise, 500 AED will be deducted.",
      location:
        "Work location can be anywhere within the United Arab Emirates.",
      extraLeave:
        "Any leave exceeding 60 days will be calculated and deducted from salary or from your next leave if you continue working."
    },
    form: {
      question: "Your Question",
      name: "Your Name",
      phone: "Phone Number",
      id: "ID Number",
      mall: "Mall Name",
      submit: "Send"
    },
    thanks: "✅ Thank you! Our team will contact you."
  },

  hi: {
    welcome: "👋 Pure Talent Chat Bot में आपका स्वागत है!",
    questions: {
      timing: "🕒 कार्य समय",
      holidays: "📅 साप्ताहिक अवकाश",
      annualLeave: "🏖 वार्षिक अवकाश",
      absence: "🚫 अनुपस्थिति नीति",
      warnings: "⚠️ चेतावनी प्रणाली",
      rules: "📜 नियम और चेतावनी",
      location: "📍 कार्य क्षेत्र",
      extraLeave: "➕ अतिरिक्त अवकाश नीति",
      other: "❓ अन्य प्रश्न"
    },
    replies: {
      timing: "कार्य समय आपके स्टोर मैनेजर द्वारा तय किया जाता है।",
      holidays:
        "साप्ताहिक अवकाश एक दिन का होता है, जो टीम लीडर तय करता है।",
      annualLeave:
        "दो साल की सेवा पूरी करने के बाद 60 दिन का वार्षिक अवकाश मिलता है।",
      absence:
        "एक दिन की अनुपस्थिति को कंपनी में तीन दिन माना जाता है।",
      warnings: "तीन चेतावनियों के बाद नौकरी से निकाल दिया जाएगा।",
      rules:
        "आवास में शराब पीना मना है। दूसरों से झगड़ा करना मना है। देर से आने पर 500 दिरहम काटे जाएंगे।",
      location:
        "कार्य स्थान संयुक्त अरब अमीरात में कहीं भी हो सकता है।",
      extraLeave:
        "60 दिनों से अधिक की छुट्टी वेतन से या अगली छुट्टी से काटी जाएगी।"
    },
    form: {
      question: "आपका प्रश्न",
      name: "नाम",
      phone: "फोन नंबर",
      id: "पहचान",
      mall: "मॉल का नाम",
      submit: "भेजें"
    },
    thanks: "✅ धन्यवाद! हम आपसे संपर्क करेंगे।"
  },

  ne: {
    welcome: "👋 Pure Talent Chat Bot मा स्वागत छ!",
    questions: {
      timing: "🕒 काम गर्ने समय",
      holidays: "📅 साप्ताहिक बिदा",
      annualLeave: "🏖 वार्षिक बिदा",
      absence: "🚫 अनुपस्थिति नीति",
      warnings: "⚠️ चेतावनी प्रणाली",
      rules: "📜 नियम र चेतावनी",
      location: "📍 कार्य क्षेत्र",
      extraLeave: "➕ अतिरिक्त बिदा नीति",
      other: "❓ अन्य प्रश्न"
    },
   replies: {
      timing: "काम गर्ने समय तपाईंको स्टोर म्यानेजरले निर्धारण गर्छ।",
      holidays:
        "साप्ताहिक बिदा एक दिनको हुन्छ, जुन टिम लिडरले तोक्छ।",
      annualLeave:
        "दुई वर्ष काम गरेपछि ६० दिन वार्षिक बिदा पाइन्छ।",
      absence:
        "एक दिन अनुपस्थित भएमा कम्पनीमा तीन दिन गनिन्छ।",
      warnings:
        "तीन पटक चेतावनी पाएपछि कामबाट निकालिन्छ।",
      rules:
        "आवासमा मदिरा सेवन गर्न पाइँदैन। अरूसँग झगडा गर्न पाइँदैन। ढिलो आएमा ५०० दिरहम कटौती हुन्छ।",
      location:
        "काम गर्ने स्थान संयुक्त अरब इमिरेट्सभित्र कहीं पनि हुन सक्छ।",
      extraLeave:
        "६० दिनभन्दा बढी बिदा भएमा तलबबाट वा अर्को बिदाबाट कटौती गरिन्छ।"
    },
    form: {
      question: "तपाईंको प्रश्न",
      name: "नाम",
      phone: "फोन नम्बर",
      id: "आईडी",
      mall: "मल नाम",
      submit: "पठाउनुहोस्"
    },
    thanks: "✅ धन्यवाद! हामी सम्पर्क गर्नेछौं।"
  },

  ta: {
    welcome: "👋 Pure Talent Chat Bot-க்கு வரவேற்கிறோம்!",
    questions: {
      timing: "🕒 வேலை நேரம்",
      holidays: "📅 வார விடுப்பு",
      annualLeave: "🏖 ஆண்டு விடுப்பு",
      absence: "🚫 अनुपस्थिति கொள்கை",
      warnings: "⚠️ எச்சரிக்கை முறை",
      rules: "📜 விதிமுறைகள்",
      location: "📍 பணிபுரியும் இடம்",
      extraLeave: "➕ கூடுதல் விடுப்பு கொள்கை",
      other: "❓ பிற கேள்வி"
    },
    replies: {
      timing:
        "வேலை நேரம் உங்கள் ஸ்டோர் மேனேஜரால் தீர்மானிக்கப்படுகிறது.",
      holidays:
        "வார விடுப்பு ஒரு நாள், டீம் லீடர் தீர்மானிப்பார்.",
      annualLeave:
        "இரண்டு ஆண்டுகள் பணி முடிந்த பிறகு 60 நாட்கள் ஆண்டு விடுப்பு கிடைக்கும்.",
      absence:
        "ஒரு நாள் अनुपस्थिति நிறுவனம் கணக்கில் மூன்று நாட்களாக கருதப்படும்.",
      warnings:
        "மூன்று எச்சரிக்கைகள் பிறகு பணிநீக்கம் செய்யப்படும்.",
      rules:
        "வசிப்பிடத்தில் மதுபானம் அருந்த அனுமதி இல்லை. மற்றவர்களுடன் பிரச்சனை செய்யக்கூடாது. தாமதமாக வந்தால் 500 திர்ஹாம் கழிக்கப்படும்.",
      location:
        "வேலை இடம் ஐக்கிய அரபு அமீரகத்தில் எங்கும் இருக்கலாம்.",
      extraLeave:
        "60 நாட்களுக்கு மேல் விடுப்பு எடுத்தால் சம்பளத்தில் அல்லது அடுத்த விடுப்பில் கழிக்கப்படும்."
    },
    form: {
      question: "உங்கள் கேள்வி",
      name: "பெயர்",
      phone: "தொலைபேசி",
      id: "அடையாளம்",
      mall: "மால் பெயர்",
      submit: "அனுப்பு"
    },
    thanks: "✅ நன்றி! உங்களை தொடர்பு கொள்வோம்."
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
