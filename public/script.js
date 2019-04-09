var db = firebase.database();

// ===============================
function googleLogOut(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}



function googleLogin(){
	var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/userinfo.email");
    // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  // provider.addScope("*");
	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
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

function googleLogin2 () {
	var provider = new firebase.auth.GoogleAuthProvider(); 	
  provider.addScope("https://www.googleapis.com/auth/userinfo.email");

	firebase.auth().signInWithRedirect(provider); 
	firebase.auth().getRedirectResult().then(function(result) {
	  if (result.credential) {
	    // This gives you a Google Access Token. You can use it to access the Google API.
	    var token = result.credential.accessToken;
	    // ...
	  }
	  // The signed-in user info.
	  var user = result.user;
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

function googleLogin3(){
	// Using a popup.
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
firebase.auth().signInWithPopup(provider).then(function(result) {
 // This gives you a Google Access Token.
 var token = result.credential.accessToken;
 // The signed-in user info.
 var user = result.user;
});
}

//========================
//Check for user status
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("signed in!");
  }else{
    console.log("signed out");
  }
});
// ================================

var name, email, photoUrl, uid, emailVerified;
function getUserStuff(){
  //NEXT? - get this init function up and running
  var user = firebase.auth().currentUser;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
  }
}
//===============================




//================================================

function scriptHelp(){
  console.log('searchEmail() - searches email, returnn pos and status');
  console.log('makeNewUser() - makes a user new to app', );
  console.log('updateStatus() - manipulates status on user', );


}

async function initUser(email){
  console.log('simple function that makes a new User', );
  await db.ref('users').push({
    email,
    // friends:"",
    // friendsPinned:"",
    // requests:"",
});
  // await searchEmail(email, false);
  // await updateStatus(email, status);
  await getMatch(email);
  // await db.ref()
}

async function updateStatus(email, status){
  console.log('function that updates status based on email(searched for pos) and status (to be changed)');
  // await pathLoop('users');
  // tmp = strungArray;

  // await searchEmail(email, false);
  // await pathLoop(tmp[posOfEmail]);
  // await db.ref(tmp[posOfEmail]+'/status').set({status:status});

  // await searchEmail(email, true);

  // db.ref(tmp[posOfEmail]).set({status:status});
  var tmpArray = [];

  await pathLoop('users', true);

  for(var i in path){
    await getLastElement(path[i]);
    




  }



}
//================================================
async function quickStatus(email, status){
  console.log('function that quickly updates status of the given userEmail', );
  if(posOfEmail==""){
    await searchEmail(email, true);
    // await pathLoop(strungArray[posOfEmail]);
    var tmp = strungArray[posOfEmail]+"/status";
  }
  console.log({tmp});
  let refMe = await db.ref(tmp).set({status});



}
//================================================




