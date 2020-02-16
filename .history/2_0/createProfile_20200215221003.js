//functions of creating profiles

function create(email){
    //creates a profile, if one doesn't already exist
    whereMe('users2', 'email', email);
    if(whereIds==""){
        adding('users2', {email: email});
    }else{
        console.log('already exists!', );
    }
    
}

function updateStatus(email, status){
    //updates status, based on <email>
    whereMe('users2', 'email', email);

    addDoc('users2', whereIds[0], {status: status});

}