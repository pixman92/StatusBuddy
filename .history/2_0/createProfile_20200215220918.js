//functions of creating profiles

function create(email){
    whereMe('users2', 'email', email);
    if(whereIds==""){
        adding('users2', {email: email});
    }
    
}

function updateStatus(email, status){

    whereMe('users2', 'email', email);

    addDoc('users2', whereIds[0], {status: status});

}