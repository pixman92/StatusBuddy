//functions that update

async function updateStatuses(myEmail){
    await pullPinnedFriends(myEmail);

    await populatePinnedFriends(myEmail);

    for(var i in pinnedFriends){
        first = pinnedFriends[i].UID;
        console.log({first} );
    
    
        await searchEmail(first, true); //this
        // await 
    
        db.ref(strungArray[posOfEmail]+"/status").on('value', ((snapshot)=>{
            globalData=[];
            snapshot.forEach((el)=>{
                console.log('data', el);
                // meVals.push(el.val());      
                globalData.push(el.val());
                console.log(globalData );
            });
        }));

    }

}