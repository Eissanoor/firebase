const firebase = require("firebase-admin");
var serviceAccount = require("../fire.json");
const firebaseConfig = {
  apiKey: "AIzaSyD9_NxZ3QvMNX_WSHHEUJAktgzwU8Z97pA",
  authDomain: "comapny-9e2f8.firebaseapp.com",
  projectId: "comapny-9e2f8",
  storageBucket: "comapny-9e2f8.appspot.com",
  messagingSenderId: "154871343110",
  appId: "1:154871343110:web:fa1613fbd541e0984a7b87",
  measurementId: "G-3KRQDYCTFM",
};
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});
const database = firebase.firestore();
const user = database.collection("product");

module.exports = user;
