//functions for saving OLD statuses

function addToSavedStatuses(email, status){
    whereMe('users2', 'email', email, ()=>{});
    
}