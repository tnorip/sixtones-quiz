// Firebase設定
// ⚠️ 重要: この設定は後で自分のFirebaseプロジェクトの設定に置き換えてください
// Firebase Console (https://console.firebase.google.com/) から取得できます

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

// Firestoreのインスタンスを取得
const db = firebase.firestore();
