const db2 = firebase.firestore();

// const settings = {/* your settings... */ timestampsInSnapshots: true};  //docdata.date.toDate();
// db2.settings(settings);


function addDataToFirestore(path, data){   
    db2.collection(path).add(data).
    then(()=>{
        console.log('saved');
    })
    .catch((error)=>{
        console.error('error caught', error);
    });   
}

function updateStatus(path, status){   
    //function that updates status
    // to be reverse called by 'getStatus(<email>)'
    db2.doc(path).update({status}).
    then(()=>{
        console.log('status updated');
    })
    .catch((error)=>{
        console.error('error caught', error);
    });   
}



var dataMe = []; var firestorePaths = [];
var slashCount = 0;
async function queryData(path){
    //function - pulls data makes a pathString way to that path passed through
    dataMe=[]; firestorePaths=[];
    await db2.collection(path).get().
    then(async (snap)=>{
        snap.forEach(async (doc)=>{
            // console.log('data', doc.data);
            await dataMe.push(doc);
            
        });
        for(var i=0; i<dataMe.length; i++){
            firestorePaths.push(dataMe[i].ref.path);
        }
        console.log('firestorePaths', firestorePaths);
    });  
}


//================================================


var savedDoc=[];
function pullDataFromFirestore(path){
    if(isOddOrEven(path)=="odd"){
        db2.doc(path).get().
        then((doc)=>{
            // console.log('docdata', doc.data());
            if(doc.exists){
                console.log('doc', doc.data());
                savedDoc.push(doc.data());
            }else{
                console.log('no doc');
            }
        }); 
    }
    if(isOddOrEven(path)=="even"){
        db2.collection(path).get().
        then((doc)=>{
            // console.log('docdata', doc.data());
            if(doc.exists){
                console.log('doc', doc);
                savedDoc.push(doc);
            }else{
                console.log('no doc');
            }
        });
    }
}

function isOddOrEven(str){
    if((str.split('/').length-1)%2==0){
        return "even";
    }else{
        return "odd";
    }
}

//================================================

//where function 
var docdata; var docId; var docMe=[]; var passedStatus="";
var whereFinderPaths = [];
var docDataArray=[];
var onePath="";
async function whereFinder(arg){  
    // path, field, comparedTo  
    //function that takes in an input date,
    //then calls where() for all logins before and after the date given

    //reseting whereFinderPaths[] 
    whereFinderPaths=[];
    docDataArray=[];

    
  
    await db2.collection(arg.path).where(arg.field, '==', arg.comparedTo)
    .get()
    .then(async (snapshot)=>{
        snapshot.forEach((doc)=>{
            docdata = doc.data();
            docDataArray.push(docdata);
            // console.log('doc.data()', doc.data());
            docId = doc.id;
            docMe.push(doc);
            console.log('docDataArray', docDataArray);

            onePath = doc.ref.path;
        });
        // for(var i in docMe){
            whereFinderPaths.push(docMe[i].ref.path);
        // }
        console.log('docdata1', docdata);
    }).then(async()=>{
        return new Promise(resolve=>{
            console.log('docdata2', docdata);
            passedStatus=docdata.status;
            resolve(docDataArray);
        });
    });

    // db2.collection(path).where(field, '==', comparedTo)
    // .get()
    // .then(async (snapshot)=>{
    //     snapshot.forEach((doc)=>{
    //         docdata = doc.data();
    //         docDataArray.push(docdata);
    //         // console.log('doc.data()', doc.data());
    //         docId = doc.id;
    //         docMe.push(doc);
    //         console.log('docDataArray', docDataArray);

    //         onePath = doc.ref.path;
    //     });
    //     for(var i in docMe){
    //         whereFinderPaths.push(docMe[i].ref.path);
    //     }
    //     console.log('docdata1', docdata);
    // }).then(async()=>{
    //     return new Promise(resolve=>{
    //         console.log('docdata2', docdata);
    //         passedStatus=docdata.status;
    //         resolve(docdata);
    //     });
    // });

} 
///========================================
function quickMakeUser(email, status){
    var tmp = new Date();
    addDataToFirestore('users', {email: email, status:status, date: tmp})
}



//========================================
async function makeStr(arr){
    return arr.join("")
}

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}
//promises
// wait(500).then(()=> doSomething())

//========================================