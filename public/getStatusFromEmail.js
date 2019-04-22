async function getStatus(email){
    //function that gets status from passed email
    await justForAsync().then(async()=>{
       whereFinder('users', 'email', email).then(async()=>{
           wait(400).then(()=>{console.log('status', passedStatus)}
           )});
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
