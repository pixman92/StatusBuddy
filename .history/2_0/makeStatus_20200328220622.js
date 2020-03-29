//function to push a status to firebase


async function pushStatus(myStatus){
    //function to push Status based on emamil and status params
    // myEmail = callUserEmail();
    try{
        var one1 = await one();
        var two2 = await two(one1, );
        var three3 = await three(two2, myStatus);
        var four4 = await four(three3);

    }catch(e){
        console.log('e', e);
        throw e;
    }


    async function one(){
        try{
            whereIds=[];
            await whereMe('users', 'email', MAINEMAIL, ()=>{
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
            var myDate = new Date();
            addDoc('users', whereIds[0], {date: myDate});

        }catch(e){
            console.log(e);
            throw e;
        }
    }   

}


//=====================================================

async function pullStatusAny(myEmail){
    //function that pulls Status of an email!! Whatever email is PASSED Through
    // to be used -> for 'auto' searching of clicked friendEmail
    
    // myEmail = callUserEmail();
    try{
        var one1 = await one();
        var two2 = await two(one1);
        // var three3 = await three(two2, myStatus);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(){
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
        try{
            if(whereIds.length!=0){
                await getting('users', whereIds[0],  ()=>{});

            }else{
                console.log('no user here' );
            
            }

        }catch(e){
            console.log(e);
            throw e;
        }
    }


}

//========================================
async function pullStatusMain(){
    //function that pulls Status of an email!!
    //pulls only MAINEMAIL from user.email
    
    // myEmail = callUserEmail();
    try{
        var one1 = await one();
        var two2 = await two(one1);
        // var three3 = await three(two2, myStatus);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(){
        try{
            whereIds=[];
            await whereMe('users', 'email', MAINEMAIL, ()=>{
            });
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function two(one1){
        try{
            if(whereIds.length!=0){
                await getting('users', whereIds[0],  ()=>{});

            }else{
                console.log('no user here' );
            
            }

        }catch(e){
            console.log(e);
            throw e;
        }
    }


}