//functions for saving OLD statuses

var middleManStatusArr = [];
function addToSavedStatuses(email, status){
    whereMe('users2', 'email', email, ()=>{
        wait(700).then(()=>{
            if(whereIds.length==0){
                console.log('no user found');
            }else{
                getting('users2', whereIds[0]);
                for()
                middleManStatusArr = 
            }
        });
    });

}