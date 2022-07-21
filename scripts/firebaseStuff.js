function adding(root, data){
    //function to add to Firebase, not based on UID or Email
    db.collection(root).add(data);
}

function addDoc(root, docMe, data){
    // function to push data to update data, based on UID
    db.collection(root).doc(docMe).set(data, {merge: true});
}

// ===========================
let savedArrayUID = []; let savedArrayEmails = [];
function emailPullHelper(emailSearch){
    savedArrayUID = []; savedArrayEmails = [];

    return db.collection('StatusBuddy').where('email', '==', emailSearch).get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                savedArrayUID.push(doc.id);
                savedArrayEmails.push(doc.data());
            })
            return savedArrayUID;
        });
}

let UIDFromResult="";
function pullUIDBasedOnEmail(emailSearch){
    //function that pulls UID that relates the corresponding Email
    emailPullHelper(emailSearch).then(async (results)=>{
        console.log('results', results);

        UIDFromResult = results[0];
        console.log('Result stored in \"UIDFromResult\"');
    });
}

// ===========================
let wholeDocDataPull = [];
function pullALLDataBasedOnUID(savedUIDstr){
    try{
        return db.collection('StatusBuddy').doc(savedUIDstr).get().then(doc => {
            console.log(doc.data());
            wholeDocDataPull.push(doc.data());
            console.log('Saved to \'wholeDocDataPull\'', );
            return wholeDocDataPull;
        });
    }catch(err){
        console.log('err', err);
    }
}

// ===========================
function updateProfile(savedUIDstr, dataTypeToUpdate, dataToUpdate){
    if(dataTypeToUpdate=='status'){
        addDoc('StatusBuddy', savedUIDstr, {'status': dataToUpdate});
        console.log('Status updated!');
    }

    if(dataTypeToUpdate=='nickname'){
        addDoc('StatusBuddy', savedUIDstr, {'nickname': dataToUpdate});
        console.log('Nickname updated!');
    }

    if(dataTypeToUpdate=='pinnedEmails'){
        addDoc('StatusBuddy', savedUIDstr, {'pinnedEmails': dataToUpdate});
        console.log('PinnedEmails updated!');
    }
}

