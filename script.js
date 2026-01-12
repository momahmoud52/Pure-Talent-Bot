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
  timing:
    "Working hours are determined by the Store Manager in accordance with operational requirements.",

  holidays:
    "Employees are entitled to one weekly day off, scheduled and approved by the Team Leader.",

  annualLeave:
    "Employees become eligible for 60 days of annual leave upon completion of two (2) full years of continuous service.",

  absence:
    "Any single day of unauthorized absence will be recorded as three (3) days in the company attendance records.",

  warnings:
    "An employee will be subject to termination upon receiving three (3) official warnings.",

  rules:
    "Consumption of alcohol within company-provided accommodation is strictly prohibited. Any violation related to alcohol consumption will result in a penalty of AED 500. Creating disturbances or conflicts with others, as well as repeated late attendance, is not permitted and may lead to disciplinary action in accordance with company policy.",

  location:
    "The employee may be assigned to work at any location within the United Arab Emirates based on business needs.",

  extraLeave:
    "Any annual leave exceeding 60 days will be calculated and deducted from the employee’s salary or adjusted against the next eligible leave period, subject to continued employment."
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
  timing:
    "कार्य समय परिचालन आवश्यकताओं के अनुसार स्टोर मैनेजर द्वारा निर्धारित किया जाता है।",

  holidays:
    "कर्मचारी को प्रति सप्ताह एक (1) अवकाश का अधिकार होगा, जिसे टीम लीडर द्वारा निर्धारित और अनुमोदित किया जाएगा।",

  annualLeave:
    "लगातार दो (2) वर्ष की सेवा पूरी करने के बाद कर्मचारी 60 दिनों के वार्षिक अवकाश का पात्र होगा।",

  absence:
    "किसी भी एक दिन की अनधिकृत अनुपस्थिति को कंपनी के रिकॉर्ड में तीन (3) दिनों के रूप में दर्ज किया जाएगा।",

  warnings:
    "तीन (3) आधिकारिक चेतावनियाँ प्राप्त होने पर कर्मचारी की सेवा समाप्त कर दी जाएगी।",

  rules:
    "कंपनी द्वारा प्रदान किए गए आवास में शराब का सेवन सख्त रूप से प्रतिबंधित है। शराब से संबंधित किसी भी उल्लंघन पर 500 दिरहम का जुर्माना लगाया जाएगा। दूसरों के साथ विवाद उत्पन्न करना या कार्यस्थल पर अनुशासनहीन व्यवहार करना स्वीकार्य नहीं है और इसके विरुद्ध कंपनी नीति के अनुसार अनुशासनात्मक कार्रवाई की जा सकती है।",

  location:
    "व्यावसायिक आवश्यकताओं के अनुसार कर्मचारी को संयुक्त अरब अमीरात के भीतर किसी भी स्थान पर कार्य के लिए नियुक्त किया जा सकता है।",

  extraLeave:
    "60 दिनों से अधिक ली गई किसी भी छुट्टी की गणना कर्मचारी के वेतन से की जाएगी या निरंतर सेवा की स्थिति में अगली पात्र छुट्टी से समायोजित की जाएगी।"
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
  timing:
    "कार्य सञ्चालन आवश्यकताअनुसार काम गर्ने समय स्टोर म्यानेजरद्वारा निर्धारण गरिन्छ।",

  holidays:
    "कर्मचारीलाई साप्ताहिक रूपमा एक (१) दिनको बिदा प्रदान गरिनेछ, जुन टिम लिडरद्वारा तोक्ने र अनुमोदन गरिनेछ।",

  annualLeave:
    "लगातार दुई (२) वर्षको सेवा पूरा गरेपछि कर्मचारी ६० दिनको वार्षिक बिदाको हकदार हुनेछ।",

  absence:
    "कुनै पनि एक (१) दिनको अनधिकृत अनुपस्थितिलाई कम्पनीको अभिलेखमा तीन (३) दिनको रूपमा गणना गरिनेछ।",

  warnings:
    "तीन (३) आधिकारिक चेतावनी प्राप्त भएपछि कर्मचारीको सेवा समाप्त गरिनेछ।",

  rules:
    "कम्पनीद्वारा प्रदान गरिएको आवासमा मदिरा सेवन कडाइका साथ निषेध गरिएको छ। मदिरा सेवनसम्बन्धी कुनै पनि उल्लङ्घनमा ५०० दिरहम जरिवाना लगाइनेछ। अरूसँग विवाद सिर्जना गर्ने वा अनुशासनहीन व्यवहार स्वीकार्य हुने छैन र यसमा कम्पनी नीतिअनुसार अनुशासनात्मक कारबाही गरिनेछ।",

  location:
    "व्यावसायिक आवश्यकताअनुसार कर्मचारीलाई संयुक्त अरब इमिरेट्सभित्र कुनै पनि स्थानमा कार्यका लागि खटाउन सकिनेछ।",

  extraLeave:
    "६० दिनभन्दा बढी लिइएको कुनै पनि बिदा कर्मचारीको तलबबाट कटौती गरिनेछ वा निरन्तर सेवाको अवस्थामा आगामी बिदाबाट समायोजन गरिनेछ।"
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
    "வேலை நேரம் செயல்பாட்டு தேவைகளின் அடிப்படையில் ஸ்டோர் மேனேஜரால் நிர்ணயிக்கப்படுகிறது.",

  holidays:
    "ஊழியருக்கு வாரத்திற்கு ஒரு (1) நாள் விடுப்பு வழங்கப்படும், இது டீம் லீடரால் நிர்ணயித்து அனுமதிக்கப்படும்.",

  annualLeave:
    "தொடர்ச்சியாக இரண்டு (2) ஆண்டுகள் பணியாற்றிய பிறகு, ஊழியர் 60 நாட்கள் ஆண்டு விடுப்பிற்கு தகுதியுடையவராக இருப்பார்.",

  absence:
    "அங்கீகாரம் பெறாத ஒரு (1) நாள் अनुपस्थिति, நிறுவன பதிவுகளில் மூன்று (3) நாட்களாக கணக்கிடப்படும்.",

  warnings:
    "மூன்று (3) அதிகாரப்பூர்வ எச்சரிக்கைகள் வழங்கப்பட்ட பின்னர், ஊழியரின் பணியிடம் நிறுத்தப்படும்.",

  rules:
    "நிறுவனம் வழங்கிய வசிப்பிடங்களில் மதுபானம் அருந்துவது கடுமையாகத் தடைசெய்யப்பட்டுள்ளது. மதுபானம் தொடர்பான எந்தவொரு மீறலுக்கும் 500 திர்ஹாம் அபராதம் விதிக்கப்படும். பிறருடன் மோதல் ஏற்படுத்துதல் அல்லது ஒழுங்கீனமான நடத்தை ஏற்றுக்கொள்ளப்படாது மற்றும் நிறுவனக் கொள்கையின்படி ஒழுக்க நடவடிக்கை எடுக்கப்படும்.",

  location:
    "வணிக தேவைகளின் அடிப்படையில், ஊழியர் ஐக்கிய அரபு அமீரகத்தின் எந்த இடத்திலும் பணியமர்த்தப்படலாம்.",

  extraLeave:
    "60 நாட்களை மீறும் எந்தவொரு விடுப்பும், ஊழியரின் சம்பளத்திலிருந்து கழிக்கப்படும் அல்லது தொடர்ச்சியான பணியின் பட்சத்தில் அடுத்த தகுதி வாய்ந்த விடுப்புடன் சமநிலைப்படுத்தப்படும்."
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
