//functions to pull Profile data

var profile={};
function pullProfile(email){
    whereMe('users2', 'email', email, ()=>{
        getting('users2', whereIds[0]);
        profile = wholeDoc;
        console.log('profile', profile);
    });
}