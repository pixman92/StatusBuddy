// pulling data 
// & 
// saving data

let pulledData;
function pullDataBasedOnEmail(emailSearch, pullCriteria){
    // pulls Data from Firebase!
    // uses user email
    return emailPullHelper(emailSearch).then(()=>{
        pullALLDataBasedOnUID(savedArrayUID[0]).then(()=>{
            console.log('Returned All User data, for this particular User\n', wholeDocDataPull);
        }).then(()=>{
            if(pullCriteria == "nickname"){
                pulledData = wholeDocDataPull[0].nickname;
            }
            if(pullCriteria == "status"){
                pulledData = wholeDocDataPull[0].status;
            }
            if(pullCriteria == "pinnedEmailsArray"){
                pulledData = wholeDocDataPull[0].pinnedEmails
            }
            console.log(pullCriteria+" was pulled. \n" + pulledData);
            return pulledData;
        });
    });
}

function pushDataBasedOnEmail(emailSearch, pushData){
    // pushes data to Firebase!
    // uses user email

    return emailPullHelper(emailSearch).then(()=>{
        addDoc('StatusBuddy', savedArrayUID[0], pushData);
    });
}