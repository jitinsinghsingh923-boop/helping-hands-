// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "helping-hands-bb28c.firebaseapp.com",
  projectId: "helping-hands-bb28c",
  storageBucket: "helping-hands-bb28c.firebasestorage.app",
  messagingSenderId: "613207431023",
  appId: "1:613207431023:web:e518be52ef4a6e825d7a9a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };