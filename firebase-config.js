// ============================================================
// CONFIGURE SEU PROJETO FIREBASE AQUI
// 1. Acesse: https://console.firebase.google.com
// 2. Crie um projeto > Adicione um app Web
// 3. Cole as configurações geradas abaixo
// ============================================================
const firebaseConfig = {
  apiKey:            "SUA_API_KEY",
  authDomain:        "seu-projeto.firebaseapp.com",
  projectId:         "seu-projeto",
  storageBucket:     "seu-projeto.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId:             "SEU_APP_ID"
};

// Inicialização compartilhada (carregada por todos os arquivos)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
