import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9Xar88NBCkcXcbhIhMD4fRzVxHFxLnC8",
  authDomain: "marriedlife-aa033.firebaseapp.com",
  databaseURL: "https://marriedlife-aa033-default-rtdb.firebaseio.com",
  projectId: "marriedlife-aa033",
  storageBucket: "marriedlife-aa033.firebasestorage.app",
  messagingSenderId: "976292627031",
  appId: "1:976292627031:web:effb16f15295ab64361912",
  measurementId: "G-GT58WHT2PQ"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const messageRef = ref(db, "message");

onValue(messageRef, (snapshot) => {
  const data = snapshot.val();

  const messageDiv = document.getElementById("message");

  if (messageDiv) {
    messageDiv.innerText = data;
  }
});
