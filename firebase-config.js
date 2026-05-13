const firebaseConfig = {
  apiKey:            "AIzaSyBweUBoLxm6FuMp65aPUuExkuTVYp3rVKs",
  authDomain:        "anptech-summit-2026.firebaseapp.com",
  projectId:         "anptech-summit-2026",
  storageBucket:     "anptech-summit-2026.firebasestorage.app",
  messagingSenderId: "454031276319",
  appId:             "1:454031276319:web:2738fd5ca50c0a0fdc582a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
