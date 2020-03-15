//function to push a status to firebase


async function pushStatus(myEmail, myStatus){

    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1, myStatus);
    }catch(e){
        console.log('e', e);
        throw e;
    }


    async function one(myEmail){
        await whereMe('users', 'email', myEmail, ()=>{
            if(!whereIds){
                adding('users', {email: myEmail});
            }
        });
    }

    async function two(one1, myStatus){
        addDoc('users', whereIds[0], {status: myStatus});
    }   

}