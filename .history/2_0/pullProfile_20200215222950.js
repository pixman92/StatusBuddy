//functions to pull Profile data

var profile={};
function pullProfile(){
    whereMe('users2', 'email', email, ()=>{
        getting('users2', whereIds[0]);

    });
}