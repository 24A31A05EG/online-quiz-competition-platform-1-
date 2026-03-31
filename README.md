# QuizNova – Online Quiz Competition Platform

## 1. Project Title
**QuizNova – Online Quiz Competition Platform**

## 2. Project Description
An interactive front-end online quiz competition platform built using HTML, CSS, and JavaScript.
It supports User (Student) authentication with dashboards, progress tracking, leaderboard, and AI-powered quiz recommendations, storing all data in the browser (no backend required).

## 3. Problem Statement
Traditional learning and self-assessment tools are static and fail to engage students meaningfully.
This project provides a gamified, web-based quiz platform where users can register, take quizzes across multiple categories and difficulty levels, track their progress, and compete on a leaderboard — all from a single, easy-to-use interface.

## 4. Features of the Project
- **User Registration & Login:** Secure account creation and authentication for learners.
- **Responsive UI:** Works seamlessly on desktop, tablet, and mobile screens.
- **Multiple Quiz Categories:** 6+ categories covering diverse knowledge areas.
- **Difficulty Levels:** Three levels — Easy, Medium, and Hard — for all skill sets.
- **Daily Quiz:** A fresh set of questions available every day to build a learning habit.
- **Standard & Custom Quizzes:** Choose from pre-built quizzes or create a custom quiz experience.
- **Progress Tracking:** Monitor quiz history and performance over time via a dedicated progress page.
- **Leaderboard & Rankings:** Compete with other users and climb the leaderboard.
- **AI-Powered Recommendations:** Smart quiz suggestions based on individual performance.
- **Results Page:** Instant feedback with score summary after every quiz attempt.
- **User Dashboard:** Centralized hub for accessing all features, stats, and achievements.
- **Modern UI/UX:** Card-based layout, smooth interactions, consistent spacing, and clean design.

## 5. Technology Used

| Category | Technology |
|---|---|
| **Programming / Markup / Styling** | HTML5, CSS3, JavaScript (ES6+) |
| **Data Storage** | JSON files (quiz data) |
| **Deployment** | Netlify |
| **Tools** | Git, GitHub (version control), Any modern browser (Chrome / Edge / Firefox) |

## 6. Project Structure

```
online-quiz-competition-platform-1-/
├── index.html                # Home / Landing Page
├── about.html                # About Page
├── login.html                # User Login Page
├── register.html             # User Registration Page
├── dashboard.html            # User Dashboard & Analytics
├── leaderboard.html          # Leaderboard & Rankings Page
├── progress.html             # Progress Tracking Page
├── result.html               # Quiz Result Page
├── daily.html                # Daily Quiz Page
├── standard.html             # Standard Quiz Page
├── custom.html               # Custom Quiz Page
├── custom_quiz.html          # Custom Quiz Interface
├── css/
│   └── style.css             # Main CSS Stylesheet
├── js/
│   └── main.js               # Core Application Logic
├── json/
│   └── *.json                # Quiz Questions & Data Files
└── README.md                 # Project Documentation
```

## 7. Installation / Setup
Download or clone the repository:
```bash
git clone https://github.com/24A31A05EG/online-quiz-competition-platform-1-.git
```
Open the project folder.

Run it using either method:
- **Quick run:** Double-click `index.html`
- **Recommended:** Use a local server (e.g., VS Code "Live Server") and open `index.html`

## 8. Usage of the Project
1. Open `index.html` in your browser.
2. Click **Register** to create a new account or **Login** to sign in.
3. From the **Dashboard**, choose your preferred quiz type:
   - **Daily Quiz** – Answer the question of the day.
   - **Standard Quiz** – Pick a category and difficulty level.
   - **Custom Quiz** – Build your own quiz experience.
4. Complete the quiz and view your **Results** instantly on the result page.
5. Track your performance history on the **Progress** page.
6. Check the **Leaderboard** to see your ranking among other users.
7. Get AI-powered quiz suggestions based on your past performance.

> **Note:** All quiz data is loaded from JSON files. Make sure the `json/` folder is intact when running locally.

## 9. Sample Output

- **Homepage (`index.html`):** Welcome banner with tagline, navigation links (Home, About, Login, Register), and feature highlights — Diverse Questions, Track Progress, AI Recommendations.
- **Register Page (`register.html`):** Input fields for Username, Email, Password, and Confirm Password with a "Create Account" button.
- **Login Page (`login.html`):** Email and password fields with a "Sign In" button and redirect link to Register.
- **Dashboard (`dashboard.html`):** Centralized hub showing available quiz types, user stats, and navigation to all features.
- **Quiz Pages (`daily.html`, `standard.html`, `custom_quiz.html`):** Timed question interface with multiple-choice options and a progress indicator.
- **Result Page (`result.html`):** Score summary with correct/incorrect breakdown and option to retake or return to dashboard.
- **Progress Page (`progress.html`):** Visual performance history showing past quiz scores and improvement trends.
- **Leaderboard (`leaderboard.html`):** Ranked list of top-performing users with scores and badges.
- **About Page (`about.html`):** Platform stats — **6+ Categories**, **3 Difficulty Levels**, **95% Satisfaction** — with mission statement.

## 10. Future Improvements
- Add a real backend (Node.js/Express or Django) with a database (MySQL/MongoDB) for persistent data storage.
- Implement JWT/session-based authentication for secure login.
- Add real-time multiplayer quiz competitions between users.
- Integrate email/SMS notifications for quiz reminders and results.
- Build an Admin Panel for managing quiz content, users, and categories.
- Add detailed analytics, charts, and performance reports for users.
- Enable social sharing of quiz scores on platforms like LinkedIn and Twitter.
- Develop a dedicated mobile application (Android/iOS) for QuizNova.
- Add multi-language support to reach a wider, global audience.

## 11. Authors

### 👑 Team Lead
| Field | Details |
|---|---|
| **Name** | Majji Kavya |
| **Role** | Team Lead – Core Logic, Quiz Engine & Full Project Integration |
| **Responsibilities** | Project architecture & folder setup, Quiz logic (quiz.js) — dynamic question loading, score tracking, option handling & result redirection, Full HTML + CSS + JS integration, Navigation flow & linking, Final verification of all modules, Bug fixing & end-to-end testing |
| **LinkedIn URL** | [https://www.linkedin.com/in/kavya-majji-a47a0832a/](https://www.linkedin.com/in/kavya-majji-a47a0832a/) |

---

### 👥 Team Members

| Name | Role | Responsibilities |
|---|---|---|
| **Renuka** | HTML Developer – Structure Creator | Built all HTML pages: `index.html`, `login.html`, `quiz.html`, `result.html`, `leaderboard.html`; added question containers, option buttons, timer section, score display, and navigation links |
| **Shyam** | CSS Designer – UI & Animations | Styled the entire platform (`style.css`) — card layout, color theme, responsive design, hover effects, smooth transitions, and timer warning color change |
| **Reetya** | Data & Logic Developer | Created quiz questions bank (`questions.js`) with 20+ questions across categories; implemented login flow (`auth.js`) using localStorage; built leaderboard logic (`leaderboard.js`) with score sorting and top-5 display |

---
> This project is built for educational and demonstration purposes. QuizNova – *Challenge yourself, track your progress, and grow every day.*
