function init() {
    // Import the functions you need from the SDKs you need
    //   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAddME4QywwWHka5z6r2n86Wf04QOU5X2Q",
        authDomain: "statusbuddy-7ef72.firebaseapp.com",
        projectId: "statusbuddy-7ef72",
        storageBucket: "statusbuddy-7ef72.appspot.com",
        messagingSenderId: "292474724803",
        appId: "1:292474724803:web:b90c52e28010abe73f1d76"
    };

    // Initialize Firebase
    //   const app = initializeApp(firebaseConfig);
    var firebaseApp = firebase.initializeApp(firebaseConfig);

    db = firebaseApp.firestore();
}