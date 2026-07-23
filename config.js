// ====================================================================
// HSC Economics Quiz — Configuration
// Edit this file, save, and refresh the page. See SETUP.md for help.
// ====================================================================

// 1. YOUR CLASS LIST — one name per line, inside the quotes.
//    Students pick their name and set their own PIN on first login.
//    (You can also add/remove students later from the teacher dashboard.)
const CLASS_LIST = [
  "Demo Student",
  // "Oscar",
  // "Add your students here...",
];

// 1b. CLASS NAME — this is a single-class build (no class battle). This label
//     is only used internally; students are never asked to pick a class.
const CLASSES = ["Economics"];

// 2. FIREBASE — paste your own project's config here (see SETUP.md, ~10 minutes).
//    Leave apiKey empty ("") to run in device-only practice mode.
//    Both this file and quiz-teacher/config.js must point at the SAME project.
const firebaseConfig = {
  apiKey: "AIzaSyDLfciBgUz-qvZoDND31GVB6Im7NkH-Fv8",
  authDomain: "hsc-eco-quiz.firebaseapp.com",
  projectId: "hsc-eco-quiz",
  storageBucket: "hsc-eco-quiz.firebasestorage.app",
  messagingSenderId: "28004805427",
  appId: "1:28004805427:web:4c433469ea90d56fbdec46"
};

// 3. Options
const QUIZ_OPTIONS = {
  secondsPerQuestion: 90,   // timer pace when the timer is switched on
  xpPerCorrect: 10,         // base XP per correct answer
  xpPerMark: 10,            // base XP per mark; short answers earn 3x this (30 per mark)
};

// 4. SHORT ANSWER MARKING
//    Students type their Section II answers and hand them in; you mark them from
//    the Teacher Dashboard. The AI marking assistant (optional) lives in the
//    dashboard's config.js so your API key is never served to students.
