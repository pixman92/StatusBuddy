//search friends
//add friends
//remove friends
//list friends

async function addFriends(myEmail, friendEmail){
    // get admin email
    // make new collection of <friends>
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1, friendEmail);
    }catch(e){
        console.log(e);
        throw e;
    }


    async function one(myEmail){
        await whereMe('users', 'email', myEmail, ()=>{});
    }

    async function two(one1, friendEmail){
        if(whereIds.length==0){
            adding('users/'+whereIds[0]+'/friendsList', {friendEmail: friendEmail});

        }else{
            addDoc()
        }
    }



}

async function searchFriends(){
// getAll('users/' + whereIds[0] + '/friendsList', ()=>{})

}

async function listOfFriendRequests(){

}

async function respondToFriendRequests(){

}