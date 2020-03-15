//search friends
//add friends
//remove friends
//list friends

async function addFriends(myEmail){
    // get admin email
    // make new collection of <friends>
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1);
        var three3 = await three(two2);
    }catch(e){
        console.log(e);
        throw e;
    }


    async function one(myEmail){
        await whereMe('users', 'email', myEmail, ()=>{}));
    }
}

async function searchFriends(){

}

async function listOfFriendRequests(){

}

async function respondToFriendRequests(){

}