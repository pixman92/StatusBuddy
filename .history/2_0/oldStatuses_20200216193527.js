//functions for saving OLD statuses

var middleManStatusArr = [];
function addToSavedStatuses(email, status){
    middleManStatusArr=[];
    whereMe('users2', 'email', email, ()=>{
        wait(700).then(()=>{
            if(whereIds.length==0){
                console.log('no user found');
            }else{
                getting('users2', whereIds[0]);
                wait(700).then(()=>{
                    if(wholeDoc[0].status==Uint8ClampedArray)
                    for(var i=0; i<wholeDoc[0].status.length; i++){
                        middleManStatusArr.push(wholeDoc[0].status[i]);
                    }
                }).then(()=>{
                    middleManStatusArr.push(status);
                    middleManStatusArr = middleManStatusArr.reverse();
                    addDoc('users2', whereIds[0], {status: middleManStatusArr});
                });
            }
        });
    });


    wholeDoc=[];

}