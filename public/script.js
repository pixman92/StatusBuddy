//main file for functions to work on, that will handle things like changing status and adding pinned friends

// NEXT? - change text - change status
function changeStatus(email, status){
    whereFinder({path:'users', field:'email', comparedTo:email});
    
    
    wait(500).then(()=>{
        console.log('onePath', onePath);
        updateStatus(onePath, {status});

    });
}

// NEXT? - add friends to friend list
// NEXT? - add select friends to pinned
// NEXT? - remove friends

//========================================

function addFriends(email, comparedToEmail){
    //funciton that adds a friend (comparedToEmail) to my list (email)
    
    pathIsComplete();
    function pathIsComplete(){
        // wait(800).then(()=>{
            whereFinder({path:'users', field:'email', comparedTo: comparedToEmail})
        // });

        wait(800).then(()=>{
            if(whereFinderPaths[0]==undefined){
                pathIsComplete();
            }else{
                wait(800).then(()=>{
                    var tmp = new Date();
                    addDataToFirestore(whereFinderPaths[0]+'/friends', {email: email, date: tmp});
            
                });
    
            }

        });

    }

}

function pullFriendsList(myEmail){
    whereFinder({path:'users', field:'email', comparedTo: myEmail})

    wait(800).then(()=>{
        pullDataFromFirestore(whereFinderPaths[0]+'/friends');
        //need to queryData()
        //push to an array of paths[]
        //then pullDataFromFirestore() on that array
    });
}