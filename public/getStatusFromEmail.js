async function getStatus(email){
    //function that gets status from passed email
    await justForAsync().then(async()=>{
    //    whereFinder('users', 'email', email)
    whereFinder({path:'users', field:'email', comparedTo: email})
    .then(async()=>{
            wait(600).then(()=>{console.log('status: ', passedStatus);});
       })
    });
    

    // {path:'users', field:'email', comparedTo: email }

    // whereFinder('users', 'email', email);
    // wait(000).then(()=>{
    //     console.log('status', docdata.status);

    // });

    
}

async function addPinnedFriends(main, toBeAdded){
    //function that adds an email to a pinned friends doc
    justForAsync().then(async()=>{
        await whereFinder({path:'users', field: 'email', comparedTo: main});
    }).then(async()=>{
        await addDataToFirestore(onePath+'/pinnedFriends', {email: toBeAdded}, {merge:true});

    });


}

async function justForAsync(){}

//========================================
//function for listening to status change

function onStatusChange(email){
    //function for updating status when typing!

    whereFinder({path:'users', field:'email', comparedTo: email});


    //code that updates on each letter updating in textarea
    Gator(document.getElementById('personalStatus')).on('input', async ()=>{
        var changedText = document.getElementById('personalStatus').innerText;
        wait(500).then(()=>{
            updateStatus(onePath, changedText);
        });
    });
}

