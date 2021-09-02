import firebase from '@firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyASEwJING4BFbbWnXiHXmNIa_PAMlSx9y4",
    authDomain: "vuefs-prod-10701.firebaseapp.com",
    projectId: "vuefs-prod-10701",
    storageBucket: "vuefs-prod-10701.appspot.com",
    messagingSenderId: "3305790684",
    appId: "1:3305790684:web:d5e29365730581af5ea819"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()