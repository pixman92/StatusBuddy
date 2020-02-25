//functions of creating profiles

function create(email){
    //creates a profile, if one doesn't already exist
    whereIds=[];
    whereMe('users2', 'email', email, ()=>{
        wait(700).then(()=>{
            // if(whereIds==undefined){
            //     whereMe('users2', 'email', email, ()=>{});
            // }
            console.log('whereIds', whereIds);
            if(whereIds.length==0){
                adding('users2', {email: email});
                console.log('added!');
            }else{
                console.log('Already exists!');
                whereIds=[];
            }

        });

    });
    
}

function updateStatus(email, status){
    //updates status, based on <email>
    whereIds=[];
    whereMe('users2', 'email', email, ()=>{
        wait(700).then(()=>{
            if(whereIds.length==0){
                console.log('couldn\'t find');
            }else{
                addDoc('users2', whereIds[0], {status: status});
            }
        });
    });


}

function updateStatus(email, status){
    //updates status, based on <email>
    whereIds=[];
    whereMe('users2', 'email', email, ()=>{
        wait(700).then(()=>{
            if(whereIds.length==0){
                console.log('couldn\'t find');
            }else{
                addDoc('users2', whereIds[0], {status: status});
            }
        });
    });


}


//========================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}