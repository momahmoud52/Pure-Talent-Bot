const chatBox = document.getElementById("chat-box");
const quickBox = document.getElementById("quick-questions");
const input = document.getElementById("userInput");

let currentLang = "en";
const sheetURL = "https://script.google.com/macros/s/AKfycbxcx22SSdDARLd-IWPjhKco_aq_1NtYgCzOyQwWXVVjW-NON16fxvrp1PwqEom3z696Tw/exec";

const content = {
  en: {
    welcome: "👋 Welcome to Smart Mall! How can I help you?",
    questions: {
      timing: "🕒 Mall Timing",
      parking: "🚗 Parking",
      security: "🛡 Security",
      other: "❓ Other Question"
    },
    replies: {
      timing: "The mall is open from 10 AM to 10 PM.",
      parking: "Parking is available in basement levels.",
      security: "Security desk is near the main entrance."
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
    welcome: "👋 स्मार्ट मॉल में आपका स्वागत है!",
    questions: {
      timing: "🕒 मॉल का समय",
      parking: "🚗 पार्किंग",
      security: "🛡 सुरक्षा",
      other: "❓ अन्य प्रश्न"
    },
    replies: {
      timing: "मॉल सुबह 10 से रात 10 बजे तक खुला रहता है।",
      parking: "पार्किंग बेसमेंट में उपलब्ध है।",
      security: "सुरक्षा डेस्क मुख्य द्वार के पास है।"
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
    welcome: "👋 स्मार्ट मलमा स्वागत छ!",
    questions: {
      timing: "🕒 मल समय",
      parking: "🚗 पार्किङ",
      security: "🛡 सुरक्षा",
      other: "❓ अन्य प्रश्न"
    },
    replies: {
      timing: "मल बिहान १० देखि राति १० बजेसम्म खुला हुन्छ।",
      parking: "पार्किङ बेसमेन्टमा उपलब्ध छ।",
      security: "सुरक्षा डेस्क मुख्य प्रवेशद्वार नजिक छ।"
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
    welcome: "👋 ஸ்மார்ட் மாலுக்கு வரவேற்கிறோம்!",
    questions: {
      timing: "🕒 மால் நேரம்",
      parking: "🚗 பார்க்கிங்",
      security: "🛡 பாதுகாப்பு",
      other: "❓ பிற கேள்வி"
    },
    replies: {
      timing: "மால் காலை 10 முதல் இரவு 10 வரை திறந்திருக்கும்.",
      parking: "பார்க்கிங் அடித்தளத்தில் உள்ளது.",
      security: "பாதுகாப்பு மேசை முக்கிய நுழைவாயிலில் உள்ளது."
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

  // 1️⃣ مسح المحادثة
  chatBox.innerHTML = "";

  // 2️⃣ مسح الأسئلة السريعة
  quickBox.innerHTML = "";

  // 3️⃣ مسح أي نص مكتوب
  input.value = "";

  // 4️⃣ إعادة رسالة الترحيب
  addMessage(content[currentLang].welcome, "bot");

  // 5️⃣ إعادة تحميل الأسئلة
  loadQuickQuestions();
}

window.addEventListener("load", () => {
  try {
    setTimeout(() => {
      const loader = document.getElementById("loader");
      const app = document.querySelector(".chat-app");

      if (loader) loader.style.display = "none";
      if (app) app.classList.remove("hidden");

      addMessage(content[currentLang].welcome, "bot");
      loadQuickQuestions();
    }, 800);
  } catch (e) {
    console.error("Loader error:", e);
  }
});
