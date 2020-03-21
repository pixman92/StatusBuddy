var provider = new firebase.auth.GoogleAuthProvider();


function signIn(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
        });
}

var user = firebase.auth().currentUser;
var MAINEMAIL="";
function check(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('in')
      document.getElementById('loginButton').style.display="none";
      var user = firebase.auth().currentUser;
      var MAINEMAIL = user.email;
    } else {
      // No user is signed in.
      console.log('out')
      hide();
      show('loginButton');
    }
  });

}