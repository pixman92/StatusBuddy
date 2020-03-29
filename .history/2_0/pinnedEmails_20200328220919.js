

var saved = false;
async function addToPinned(emailToAdd){
    //function that saves emails to separate Doc
    // edge case? - email is already there, don't add duplicates
    // myEmail = callUserEmail();
    try{
        var one1 = await one();
        var two2 = await two(one1, emailToAdd);
        // var three3 = await three(two2, myStatus);
        // var four4 = await four(three3);

    }catch(e){
        console.log('e', e);
        throw e;
    }
    
    async function one(){
        try{
            whereIds=[];
            await whereMe('users', 'email', myEmail, ()=>{
            });
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function two(one1, emailToAdd){
        var added = [];
        await getAll('users/'+whereIds[0]+'/savedEmails', async()=>{
            for(var i=0; i<getAllArr.length; i++){
                if(getAllArr[i].savedEmail==emailToAdd){
                    alert('Already on your list!');
                    // added.push(i);
                    added.push(i);
                }
                // else{
                // }
            }
            console.log('added', added);
            if(added.length == 0){
                await adding('users/'+whereIds[0]+'/savedEmails',  {savedEmail: emailToAdd});
                alert("Saved!");
            }

        });


    }

    
}



var savedEmailsArr=[];
var lenOfArrOfPaths;
var arrOfRemainingSaved = [];
async function pullPinnedList(){
        // HTML maker! for savedEmails - from DOC saved within admin's email
    // myEmail = callUserEmail();
    // check();
    try{
        // var zero0 = await zero()
        var one1 = await one();
        var two2 = await two(one1);
        var three3 = await three(two2);
        var four4 = await four(three3);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(){
        
        // function to pull and see if email has status
        // await pullStatus(email);
        try{
            whereIds=[];
            await whereMe('users', 'email', MAINEMAIL, ()=>{
                // lenOfArrOfPaths = getAllArr.length;   
            });
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    
    async function two(one1){
        //removes "" elements from pulledPinnedEmails
        
        arrOfRemainingSaved=[];
        getAllArr=[];
        getAllPaths=[];

        await getAll('users/'+whereIds[0]+'/savedEmails', async()=>{  
            // getAllArr.forEach((elem, i)=>{
            //     if(elem.savedEmail==""){
            //         getAllArr = getAllArr.splice(i, 1);
            //         getAllPaths = getAllPaths.splice(i, 1);
            // }
            // for(var i=0; i<lenOfArrOfPaths; i++){
        });
                console.log('paths', getAllPaths);
                console.log('before forEach, ', getAllArr);
                getAllArr.forEach((elem, i)=>{
                    console.log('i', i);
                    console.log('elem', elem);
                    // if(getAllArr[i].savedEmail==""){
                    //     getAllArr = getAllArr.splice(i, 1);
                    //     getAllPaths = getAllPaths.splice(i, 1);
                    // }
                    if(elem.savedEmail!=""){
                        console.log('true');
                        arrOfRemainingSaved.push(elem.savedEmail);
                    }
                    console.log('after, ', getAllArr);
                });
            console.log('arrOfRemainingSaved', arrOfRemainingSaved);
            // getAllArr=[];
        // });

    }

    async function three(two2){

        if(getAllArr!=""){       //does the user have any saved space(?)

            try{

            document.getElementById('dynamicSavedEmails').innerHTML = "";

            savedEmailsArr = [];
            
            for(var i=0; i<arrOfRemainingSaved.length; i++){
                savedEmailsArr.push('<div class="gridSavedEmailAndX">');
                savedEmailsArr.push('<div>');
                
                savedEmailsArr.push('<li id=');
                savedEmailsArr.push('\"'+arrOfRemainingSaved[i]+'\"');
                savedEmailsArr.push('>')
                
                
                savedEmailsArr.push(arrOfRemainingSaved[i])
                savedEmailsArr.push('</li>');
                
                savedEmailsArr.push('</div>');
                savedEmailsArr.push('<div>');
                savedEmailsArr.push('<button class=\"w3-button w3-blue smfont\"');
                
                savedEmailsArr.push('id=\"'+arrOfRemainingSaved[i]+'del\"');
                savedEmailsArr.push('>X</button>');
                
                savedEmailsArr.push('</div>');
                savedEmailsArr.push('</div>');
                savedEmailsArr.push('</div>');
                
            }
            
            
            document.getElementById('dynamicSavedEmails').innerHTML = savedEmailsArr.join("");
        
    }catch(e){
        console.log(e);
        throw e;
    }
    }
}

    async function four(three3){
        // if(getAllArr.savedEmail!=""){       //does the user have any saved space(?)

            try{
                
                arrOfRemainingSaved.forEach(async(elem)=>{
                    if(document.getElementById(elem)!=null){      //is the doucment null(?)
                        document.getElementById(elem).addEventListener('click', async()=>{
                            try{
                                await pullStatus(elem); //populates wholeDoc[];
                            }catch(e){
                                alert("No status from that person!")
                                console.log(e);
                                throw e;
                            }
            
                            //========================================
                            //funcitonality - push to search page
                            hide();
                        closeNavBar();
                        show('search');

                        await pullStatusAny(elem);  //pull status for email
                        if(whereIds[0]==undefined){
                            alert("None found")
                        }else{
                            //same functioning for search button, duplicated here
                            document.getElementById('searchInput').value=wholeDoc[0].email.toString();      //this puts email into <input>
                            
                            //HTML stuff for making card
                            searchArr=[];
                            searchArr.push('<div class=\"w3-card marginAroundMe\">');
                            searchArr.push(wholeDoc[0].status);
                            searchArr.push('</div>');
                            // searchArr.join("");
                            document.getElementById('statusFromSearch').innerHTML = searchArr.join("");

                        }
                        
                        
                    });
                    
                }
            });
        }catch(e){
            console.log(e);
            throw e;
        }
        arrOfRemainingSaved.forEach(async(elem)=>{
            document.getElementById(elem+"del").addEventListener('click', async()=>{
                console.log('clicked on?', elem+"del");
            });
        });
        
        
}
}

//========================================

async function erasePinnedEmail(unpinMe){
    //function to remove one emailOfSavedFriend
    // working! just add <email> to be erased
    // myEmail = callUserEmail();
    try{
        var one1 = await one();
        var two2 = await two(one1);
        var three3 = await three(two2);
        var four4 = await four(three3, unpinMe);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(){
        // function to pull and see if email has status
        // await pullStatus(email);
        try{
            whereIds=[];
            await whereMe('users', 'email', m, ()=>{
            });
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function two(one1){
        await getting('users', whereIds[0],  ()=>{
            console.log('user found');
        });
    }

    async function three(two2){
        try{
            await getAll('users/'+whereIds[0]+'/savedEmails', ()=>{
                console.log('getAllPaths', getAllPaths );
            });

        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function four(three3, unpinMe){
        for(var i=0; i<getAllPaths.length; i++){
            if(getAllArr[i].savedEmail==unpinMe){
                console.log('same!', i);
                addDoc('users/'+whereIds[0]+'/savedEmails', getAllPaths[i], {savedEmail: ""});

            }
        }
    }

}