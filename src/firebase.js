// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  onSnapshot,
  getDocs,
  addDoc,
} from "firebase/firestore";

// import { characters } from "./data/C/sacred-stones";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCInFsO6dwwiXznETFVTPFznzdbZjUfkQ0",
  authDomain: "ninohuh-d7b3c.firebaseapp.com",
  projectId: "ninohuh-d7b3c",
  storageBucket: "ninohuh-d7b3c.appspot.com",
  messagingSenderId: "184296462437",
  appId: "1:184296462437:web:56a1a3b94d5f9289940e8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();

// Get collection reference
export async function getData(type) {
  let data = [];
  const dataRef = collection(db, type);
  const dataSnapshot = await getDocs(dataRef);

  dataSnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}

// const dataARef = collection(db, "A");
// characters.forEach((character) => {
//   addDoc(dataARef, {
//     name: character.name,
//     series: character.series,
//     gender: character.gender,
//     icon: character.icon,
//   });
// });

// const dataBRef = collection(db, "B");
// characters.forEach((character) => {
//   addDoc(dataBRef, {
//     name: character.name,
//     series: character.series,
//     gender: character.gender,
//     icon: character.icon,
//   });
// });

// const dataCRef = collection(db, "C");
// characters.forEach((character) => {
//   addDoc(dataCRef, {
//     name: character.name,
//     series: character.series,
//     gender: character.gender,
//     icon: character.icon,
//   });
// });
