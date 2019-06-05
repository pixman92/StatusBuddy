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
    
    
    pathIsComplete();
    function pathIsComplete(){
        whereFinder({path:'users', field:'email', comparedTo: comparedToEmail})
        if(whereFinderPaths[0]==undefined){
            pathIsComplete();
        }else{
            wait(800).then(()=>{
                addDataToFirestore(whereFinderPaths[0], {friends: email});
        
            });

        }

    }

}