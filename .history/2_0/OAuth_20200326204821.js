// var provider = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.GoogleAuthProvider();

function signIn(){

    firebase.auth().signInWithPopup(provider).then(async function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    MAINEMAIL = user.email;

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

// var user = firebase.auth().currentUser;
var MAINEMAIL="";
function check(callback){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('in')
      document.getElementById('buttonCenter').style.display="none";
      var user = firebase.auth().currentUser;
      MAINEMAIL = user.email;
      hide();
      sow('page1');
      onLoadFunc();h
    } else {
      // No user is signed in.
      console.log('out')
      hide();
      show('buttonCenter')
    }
    callback();
  });

}

function callUserEmail(){
  try{
    // if(user){
      user = firebase.auth().currentUser;
      MAINEMAIL = user.email;
      return MAINEMAIL;

    // }
    
  }catch(e){
    console.log(e);
    check();
    throw e;
  }
}
