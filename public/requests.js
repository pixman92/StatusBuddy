function requestsHelp(){
    console.log('sendRequest(me, them) - send request to them, from me');
    console.log('pullRequests() - pull all requests');
    console.log('pushToFriendsList() - push an email to a friends list');
    console.log('pullFriends() - pull all friends' );
    console.log('pullPinnedFriends() - pull friends that are pinned');
    console.log('addPinnedFriends() - pushes a friend to HTML on front page');


}


//================================================
// special function

async function pullToObj(myEmail){
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);

    makeIntoObj(arrayOfVal[0], 'email');
    // makeIntoObj(arrayOfVal[1], 'requests');
    makeIntoObj(arrayOfVal[2].status, 'status');
}


//================================================
//functions that send and deny requests

async function sendRequest(myEmail,toEmail){
    console.log('function that add a request to some email for me');
    await searchEmail(toEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);

    db.ref(tmp[posOfEmail]+'/requests').push({
        UID: myEmail,
    });
}



//function to pull all requests
//then either approve or deny
var requests = [];
async function pullRequests(myEmail){
    console.log('function that pulls all request from a single email', );
    // requests=[];
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);
    tmp2 = strungArray;
    await pathLoop(tmp2[3]);        //this inner[<num>] may need to be changed

    console.log('request', arrayOfVal);

    for(var elem in arrayOfVal){
        requests.push(arrayOfVal[elem]);
    }

    //requests[<pos>].UID >>> requested email

    console.log({requests});

    return new Promise(resolve=>{
        resolve(requests);
    });

}


//function aprove request, aka: move to friends list
function approveRequest(){
    
}


//function to deny request
async function removeRequest(myEmail, requestPos){
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);

    tmp2 = strungArray;
    await pathLoop(tmp2[3]);

    db.ref(strungArray[requestPos]).remove();
}

//================================================
//function friends' list
async function pushToFriendsList(myEmail, theRequestEmail){ //myEmail - me(user signed in) && theRequestEmail - email to add to friends' list
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);

    db.ref(tmp[posOfEmail]+'/friends').push({
        UID: theRequestEmail,
    });
}

var friends = [];
async function pullFriends(myEmail){
    console.log('function that pulss friends based on user');
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);
    tmp2 = strungArray;
    await pathLoop(tmp2[1]);        //this inner[<num>] may need to be changed

    console.log('friends', arrayOfVal);
    
    friends=[];

    for(var elem in arrayOfVal){
        friends.push(arrayOfVal[elem]);
    }
}
//================================================
var pinnedFriends = [];
async function pullPinnedFriends(myEmail){
    console.log('function that pull pinnedFriends from email account');
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);
    tmp2 = strungArray;
    await pathLoop(tmp2[2]);        //this inner[<num>] may need to be changed

    console.log('pinnedFriends', arrayOfVal);

    pinnedFriends=[];

    for(var elem in arrayOfVal){
        pinnedFriends.push(arrayOfVal[elem]);
    }

}

async function populatePinnedFriends(myEmail){
    await pullRequests(myEmail);

    strOfFriendsPinned="";
    for(var i in requests){
        // console.log({requests} );
        strOfFriendsPinned=createHTMLELement(pinnedFriends[i].UID, 'div', 'req w3-card', "request"+i);
        pinnedFriendsCount=i;
    }
    pinnedFriends=[]; //important to not rack up infinite different requests

    addToHTMLElement(strOfFriendsPinned, 'pinnedFriends');

}

async function addPinnedFriends(myEmail, friendsEmail){

    await searchEmail(myEmail);
    await pathLoop('users');
    tmp = strungArray[posOfEmail];
    await db.ref(tmp+"/friendsPinned").push({UID: friendsEmail});
  
  }


//function remove from friends


//function(s) to add 'favorites' to user's email profile


