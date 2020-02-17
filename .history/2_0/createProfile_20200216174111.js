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
            if(whereIds){
                console.log('Already exists!');
                whereIds=[];
            }else{
                adding('users2', {email: email});
                
            }

        });

    });
    
}

function updateStatus(email, status){
    //updates status, based on <email>
    whereMe('users2', 'email', email, ()=>{
        wait(700).then(()=>{
            addDoc('users2', whereIds[0], {status: status});
        });
    });


}

//========================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}