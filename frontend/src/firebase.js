import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBv9lOY7MHhniiWgPuEFVd86qJqJL-R9Xc",
    authDomain: "tch-project-a9c6e.firebaseapp.com",
    projectId: "tch-project-a9c6e",
    storageBucket: "tch-project-a9c6e.firebasestorage.app",
    messagingSenderId: "258720969526",
    appId: "1:258720969526:web:aab1f0cb82642cacae7997",
    measurementId: "G-MSERMVE7LE"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;  