












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


function getStuff (path) {
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
}




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


function getStuff (path) {
  resetMe();
  //run for Each loop and get all incremental children off of the /users branch
  var database = firebase.database().ref(path);
  database.on('value', function(snapshot){
    resetMe();
    for(var item in snapshot.val()){
      arrayMe.push(item);
    }
    console.log(arrayMe);

  });
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