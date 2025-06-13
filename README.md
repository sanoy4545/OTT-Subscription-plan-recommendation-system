# 🎬 OTT Subscription Plan Recommendation System

This is a smart web-based recommendation system that helps users find the best **OTT (Over-The-Top) subscription plans** based on their preferences. The backend uses a **Random Forest Machine Learning model** to generate recommendations, while the frontend is built with **React**. The application also includes an **automated plan renting feature** powered by **Selenium**.

---

## 🚀 Features

- ✅ Personalized OTT subscription plan recommendations
- ✅ User-friendly web interface
- ✅ Flask REST API with ML backend (Random Forest)
- ✅ Automated OTT plan renting using Selenium
- ✅ Responsive frontend built using React.js
- ✅ Clean, modular, and scalable codebase

---

## 🧠 Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| ML Model    | Random Forest (scikit-learn) |
| Backend     | Python, Flask          |
| Frontend    | React.js, Axios        |
| Automation  | Selenium (Python)      |
| Others      | Pandas, NumPy, HTML/CSS |

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ott-plan-recommender.git
cd ott-plan-recommender
```

### 2. Backend Setup (Flask)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### 3. Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```

---

## 🤖 Selenium Plan Renting Feature

This additional feature uses **Selenium WebDriver** to automate the process of renting a subscription plan on supported OTT platforms (demo-based). It simulates user interaction, like filling out forms and clicking buttons.

### Running the Automation Script
```bash
cd backend
python rent_plan.py  # Example script for Selenium automation
```

**Note**: Make sure you have ChromeDriver installed and in your PATH.

---

## 🔍 How It Works

1. User inputs preferences (genre, budget, device, etc.).
2. React frontend sends this data to Flask API.
3. Flask loads the trained Random Forest model.
4. Based on inputs, the system returns best-fit OTT plans.
5. User can then choose to rent a plan, which triggers Selenium automation.

---

## 📁 Project Structure

```
ott-plan-recommender/
│
├── backend/
│   ├── app.py
│   ├── recommendation.py
│   ├── rent_plan.py  # 🔁 Selenium automation
│   ├── model.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## 🧪 Future Improvements

- 🧠 Add collaborative filtering using user history
- 🧾 Monthly usage statistics and dashboard
- 🔒 User authentication with JWT
- 📦 Integration with real OTT platforms (API-based)
- 🎯 Improve recommendation accuracy with more training data

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you'd like to change.

---

## 📧 Contact

Sanoy Boby  
📫 Email: sanoyboby924@gmail.com  
📱 Phone: +91 6235534401

---

**License**: MIT
