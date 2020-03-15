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
        try{
            await whereMe('users', 'email', myEmail, ()=>{
                console.log('whereIds', whereIds);
                if(whereIds==[]){
                    adding('users', {email: myEmail});
                }
            });

        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function two(one1, myStatus){
        try{
            addDoc('users', whereIds[0], {status: myStatus});

        }catch(e){
            console.log(e);
            throw e;
        }
    }   

}