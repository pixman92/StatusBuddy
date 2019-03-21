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
async function pullReuqests(myEmail){
    console.log('function that pulls all request from a single email', );
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);
    tmp2 = strungArray;
    await pathLoop(tmp2[1]);

    console.log('request', arrayOfVal);

    for(var elem in arrayOfVal){
        requests.push(arrayOfVal[elem]);
    }

    //requests[<pos>].UID >>> requested email




}


//function aprove request
function approveRequest(){
    
}


//function to deny request
async function removeRequest(myEmail, requestPos){
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);

    tmp2 = strungArray;
    await pathLoop(tmp2[1]);

    db.ref(strungArray[requestPos]).remove();
}


//function move request to friends



//function remove from friends


//function(s) to add 'favorites' to user's email profile


//================================================
function eventForIdElem(id, callback, param){
    Gator(document.getElementById(id)).on('click', ()=>{
        callback(param);
    });
}
function eventOff(id){
    Gator(document.getElementById(id)).off();
}

function alertMe(msg){
    alert(msg);
}