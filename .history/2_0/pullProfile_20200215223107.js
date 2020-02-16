//functions to pull Profile data

var profile={};
function pullProfile(email){
    whereMe('users2', 'email', email, ()=>{
        wait(700).then(()=>{});
        getting('users2', whereIds[0]);
        profile = wholeDoc;
        console.log('profile', profile);
    });
}