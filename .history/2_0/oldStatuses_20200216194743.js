//functions for saving OLD statuses

var middleManStatusArr = [];
function addToSavedStatuses(email, statusSent){
    middleManStatusArr=[];
    whereMe('users2', 'email', email, ()=>{         //find email
        wait(700).then(()=>{                        //wait
            if(whereIds.length==0){                 //is user found?
                console.log('no user found');
            }else{
                getting('users2', whereIds[0]);     //get user
                wait(700).then(()=>{                        //wait
                    if(wholeDoc[0].status==undefined){          //if undefined, add single status
                        updateStatus(email, statusSent);            //update status (single)
                    }else{
                        for(var i=0; i<wholeDoc[0].status.length; i++){
                            middleManStatusArr.push(wholeDoc[0].status[i]);         //else, push all statuses to an array, to be saved in Firebase
                            
                        }
                        middleManStatusArr.push(statusSent);                                //push new status to Firebase
                        middleManStatusArr = middleManStatusArr.reverse();              //reverse, so 0 index is most recent status
                    }
                }).then(()=>{
                    addDoc('users2', whereIds[0], {status: middleManStatusArr});
                });
            }
        });
    });


    wholeDoc=[];

}