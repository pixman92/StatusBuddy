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
        // if(whereIds.length==0){
            adding('users/'+whereIds[0]+'/friendsList', {friendEmail: friendEmail});

        // }
        // else{
        //     addDoc('users/', + whereIds[0] + '/friendsList/', {friendEmail: friendEmail});
        // }
    }



}

async function searchFriends(myEmail, friendEmail){
// getAll('users/' + whereIds[0] + '/friendsList', ()=>{})
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1);
        var three3 = await three(two2, friendEmail);
    }catch(e){
        console.log(e);
        throw e;
    }

    async function one(myEmail){
        await whereMe('users', 'email', myEmail, ()=>{});
    }

    async function two(one1){
        await getAll('users/' + whereIds[0] + '/friendsList', ()=>{
            if(getAllArr.length==0){
                console.log('Nothing found');
            }    
        });
    }

    async function three(two2, friendEmail){
        for(var i=0; i<getAllArr.length; i++){
            // console.log('i', i);
            if(getAllArr[i].friendEmail == friendEmail){
                // console.log('i', i);
                console.log("Found! " +getaAlllPaths[i]);
            }
        }
    }


}

async function listOfFriendRequests(){

}

async function respondToFriendRequests(){

}