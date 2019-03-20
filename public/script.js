var db = firebase.database();


var obj= {};
var savedPath= "";
var uid;
var arrayMe = [];





function anonLogIn () {
  firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage+" "+errorCode);
});
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      uid = user.uid;

      // ...
      console.log(isAnonymous+" "+uid);
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });
}

//==================================
//functions to get status
function getStuffToGet (path, email, proceed) {
  // resetMe;();
  //run for Each loop and get all incremental children off of the /users branch
  var database = firebase.database().ref(path);
  database.on('value', function(snapshot){
    resetMe();
    for(var item in snapshot.val()){
      arrayMe.push(item);
    }
    console.log(arrayMe);
    if(proceed=="true"){
      getStatusFromEmail(email, "true");
    }
  });
  
}


//====================================
var emailSavedPath = "";
var matchFound = "";
function getStatusFromEmail(comparingEmail, proceed){
  for(var item in arrayMe){
    var database = firebase.database().ref("/users/"+arrayMe[item]+"/email");
    database.on('value', (snapshot) =>{
      console.log(snapshot.val());

      if(snapshot.val()==comparingEmail){
        console.log("Found match!");
        emailSavedPath = "/users/"+arrayMe[item];
        if(proceed=="true"){
          getStatus();
        }
      }else{
        console.log("Match not found!");
        matchFound="false";
      }

    });
  }
}
var outputStatus = "";
function getStatus(){
  var database = firebase.database().ref(emailSavedPath+"/status");
  database.on('value', (snapshot)=>{
    console.log(snapshot.val());
    outputStatus = snapshot.val();
  });
  console.log("Status: "+ outputStatus);
}


function searchMyEmail(email){
  getStuffToGet("/users/", email, "true");
  // if(arrayMe){
    // getStatusFromEmail(email);
  // }
  // return "Status+ " +outputStatus;
}
//==================================
//setting functions
function getStuffToSet (path, email, status) {
  // resetMe();
  //run for Each loop and get all incremental children off of the /users branch
  var database = firebase.database().ref(path);
  database.on('value', function(snapshot){
    resetMe();
    for(var item in snapshot.val()){
      arrayMe.push(item);
    }
    console.log(arrayMe);
  });
    setStatusforEmail(email, status);
  
}



var emailSavedPathForSetStatus= "";
function setStatusforEmail(comparingEmail, status){
  //function to get email path
  //in order to set status
  for(var item in arrayMe){
    var database = firebase.database().ref("/users/"+arrayMe[item]+"/email");
    database.on('value', (snapshot) =>{
      console.log(snapshot.val());

      if(snapshot.val()==comparingEmail){
        console.log("Found match!");
        emailSavedPathForSetStatus = "/users/"+arrayMe[item];
      }

    });
  }
      schangeStatus(status);
}
function changeStatus (status) {
  //function to set status
  create("status", status);
  updateObj(emailSavedPathForSetStatus);
}

function setMyStatus(email, status){
  getStuffToSet("/users", email, status);

}


//================================

function create (dic, key) {
  //create a global obj
  obj[dic] = key;
  return obj;
}

function pushInstead(path){
  //pass the obj to be pushed
  //using a unique UID  
  //use: pushInstead("")
  var database = firebase.database().ref(path);
  database.push(obj);
}


function getUIDpath(searchTerm){
  //get email from position of UID
  //specifically pick out UID from JSON tree
  // console.log(arrayMe);
  for(var i=0; i<arrayMe.length;i++){
    var database = firebase.database().ref("/users/"+arrayMe[i]+"/uid/"); 
    database.on("value", function(snapshot){
      // console.log(snapshot.val());
      if(snapshot.val()==searchTerm){
        console.log("equaled: " + snapshot.val());
        savedPath="/users/"+arrayMe[i];
        console.log(savedPath);
      }
    });
    
  }
}

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

function ifAlreadyTaken(){
  getUserStuff();  
  getStuffToGet("/users", email, "true");
  if(emailSavedPath==""){
    create("email", email);
    pushInstead("/users");
    console.log("User pushed!");
  }
  if(emailSavedPath!=""){
    consolePrint("found path", emailSavedPath);
  }
}









//===============================

function mashUp(array){
  for(var passThrough in array){
    consolePrint("array:", array[passThrough]);
    createList(array[passThrough]);
  }
}


function createList (word) {
  console.log("<li>"+word+"</li>");

}

//=========================












// ================================
function updateObj(path){
  //updates obj to savedPath from getPostion()
  var database = firebase.database().ref(path);
  database.update(obj);
  resetMe();

}

function resetMe(){
  //reset obj
  obj={};   
  arrayMe=[];
}
var count=0;
function consolePrint(varName, arg){
  console.log(count.toString() + ": "+varName.toString() + "   "+ arg);
  count = count+1;
}

//================================================

function scriptHelp(){
  console.log('searchEmail() - searches email, returnn pos and status');
  console.log('makeNewUser() - makes a user new to app', );
  console.log('updateStatus() - manipulates status on user', );


}


var statusReturned="";
var posOfEmail="";
var allArray = [];
async function searchEmail(email, config){
  console.log('function that searches for email, returns: pos & status from searched email');
  await pathLoop('users');
  allArray = arrayOfVal;
  console.log({allArray} );

  for(let i=0; allArray.length; i++){
    if(email==allArray[i].email){

      posOfEmail=i;
      
      console.log('statusReturned', statusReturned);
      if(config){
        statusReturned=allArray[i].status.status;
        console.log('posOfEmail', posOfEmail);
  
        return new Promise (resolve=>{
          resolve(allArray[i].status);
        });
      }
      else{
        return "posOfEmail " + i;
      }
    }
  }
}

async function makeNewUser(email, status){
  console.log('simple function that makes a new User', );
  await db.ref('users').push({
    email,
});
  await searchEmail(email, false);
  await updateStatus(email, status);
}

async function updateStatus(email, status){
  console.log('function that updates status based on email(searched for pos) and status (to be changed)');
  await pathLoop('users');
  tmp = strungArray;

  await searchEmail(email, false);
  await pathLoop(tmp[posOfEmail]);
  await db.ref(tmp[posOfEmail]+'/status').set({status:status});

  await searchEmail(email, true);

  // db.ref(tmp[posOfEmail]).set({status:status});
}
