// Importa las funciones necesarias desde los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Añade los SDKs de los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de tu aplicación web de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOtXGiSN-6Q3xG-Bl6pdq6tDiehlwY5Qg",
  authDomain: "blogproject-f1b2c.firebaseapp.com",
  projectId: "blogproject-f1b2c",
  storageBucket: "blogproject-f1b2c.appspot.com",
  messagingSenderId: "479927266477",
  appId: "1:479927266477:web:d878b7074970467ad92a24",
  measurementId: "G-ELWQN56LF8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Inicializa Firebase Analytics (opcional)

// Inicializa el servicio de autenticación (auth)
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth , firestore}; // Asegúrate de exportar auth u otros servicios que uses
