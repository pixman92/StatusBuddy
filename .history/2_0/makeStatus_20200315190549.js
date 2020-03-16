//function to push a status to firebase


async function pushStatus(myEmail, myStatus){
    //function to push Status based on emamil and status params
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1, myEmail);
        var three3 = await three(two2, myStatus);
        var four4 = await four(three3);

    }catch(e){
        console.log('e', e);
        throw e;
    }


    async function one(myEmail){
        try{
            whereIds=[];
            await whereMe('users', 'email', myEmail, ()=>{
            });
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    
    async function two(one1, myEmail){
        console.log('whereIds', whereIds);
        if(whereIds.length==0){     //critical!!
            adding('users', {email: myEmail});
        }
        
    }

    async function three(two2, myStatus){
        try{
            addDoc('users', whereIds[0], {status: myStatus});

        }catch(e){
            console.log(e);
            throw e;
        }
    }   

    async function four(three3){
        try{
            var myDate = new Date().now();
            addDoc('users', whereIds[0], {date: myDate});

        }catch(e){
            console.log(e);
            throw e;
        }
    }   

}


//=====================================================

async function pullStatus(myEmail){
    //function that pulls Status of an email!!
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1, myEmail);
        // var three3 = await three(two2, myStatus);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(myEmail){
        try{
            whereIds=[];
            await whereMe('users', 'email', myEmail, ()=>{
            });
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function two(one1){
        await getting('users', whereIds[0],  ()=>{});
        console.log('', );
    }


}