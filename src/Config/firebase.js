import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA89u4nzVLNcmOotYc0KPEb7ym2oawDUNQ",
    authDomain: "electronia-c4a96.firebaseapp.com",
    projectId: "electronia-c4a96",
    storageBucket: "electronia-c4a96.appspot.com",
    messagingSenderId: "884182015958",
    appId: "1:884182015958:web:01d08dbbb3304d88258e77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.db = firebase.firestore()
  firebase.autenticacion = firebase.auth()

  export default firebase
