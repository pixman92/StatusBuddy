

var saved = false;
async function addToPinned(emailToAdd){
    //function that saves emails to separate Doc
    // edge case? - email is already there, don't add duplicates
    myEmail = callUserEmail();
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
async function pullPinnedList(){
        // HTML maker! for savedEmails - from DOC saved within admin's email
    myEmail = callUserEmail();
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
            await whereMe('users', 'email', myEmail, ()=>{
            });
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    
    async function two(one1){
        //removes "" elements from pulledPinnedEmails
        await getAll('users/'+whereIds[0]+'/savedEmails', ()=>{     
            getAllArr.forEach((elem, i)=>{
                if(elem.savedEmail==""){
                    getAllArr = getAllArr.splice(i, 1);
                    getAllPaths = getAllPaths.splice(i, 1);
            }
        });

        })

    }

    async function three(two2){

        if(getAllArr.savedEmail!=""){       //does the user have any saved space(?)

            try{

            document.getElementById('dynamicSavedEmails').innerHTML = "";

            savedEmailsArr = [];
            
            for(var i=0; i<getAllPaths.length; i++){
                savedEmailsArr.push('<div class="gridSavedEmailAndX">');
                savedEmailsArr.push('<div>');
                
                savedEmailsArr.push('<li id=');
                savedEmailsArr.push('\"'+getAllArr[i].savedEmail+'\"');
                savedEmailsArr.push('>')
                
                
                savedEmailsArr.push(getAllArr[i].savedEmail)
                savedEmailsArr.push('</li>');
                
                savedEmailsArr.push('</div>');
                savedEmailsArr.push('<div>');
                savedEmailsArr.push('<button class=\"w3-button w3-blue smfont\"');
                
                savedEmailsArr.push('id=\"'+getAllArr[i].savedEmail+'del\"');
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
        if(getAllArr.savedEmail!=""){       //does the user have any saved space(?)

            try{
                
                getAllArr.forEach(async(elem)=>{
                    if(document.getElementById(elem.saved)!=null){      //is the doucment null(?)
                        document.getElementById(elem.savedEmail).addEventListener('click', async()=>{
                            try{
                                await pullStatus(elem.savedEmail); //populates wholeDoc[];
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
        
                        //same functioning for search button, duplicated here
                        document.getElementById('searchInput').value=wholeDoc[0].email.toString();      //this puts email into <input>
                        await pullStatus(elem.savedEmail);  //pull status for email
                        
                        //HTML stuff for making card
                        searchArr=[];
                        searchArr.push('<div class=\"w3-card marginAroundMe\">');
                        searchArr.push(wholeDoc[0].status);
                        searchArr.push('</div>');
                        // searchArr.join("");
                        document.getElementById('statusFromSearch').innerHTML = searchArr.join("");
                        
                        if(whereIds[0]==undefined){
                            alert("None found")
                        }
                    });
                    
                }
            });
            }catch(e){
                console.log(e);
                throw e;
            }

        }
        getAllArr.forEach(async(elem)=>{
            document.getElementById(elem.savedEmail+"del").addEventListener('click', async()=>{
                console.log('clicked on?', elem.savedEmail+"del");
            });
        });
        
        
}
}

//========================================

async function erasePinnedEmail(unpinMe){
    //function to remove one emailOfSavedFriend
    myEmail = callUserEmail();
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
            await whereMe('users', 'email', myEmail, ()=>{
            });
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function two(one1){
        await getting('users', whereIds[0],  ()=>{})
    }

    async function three(two2){
        await getAll('users/'+whereIds[0]+'/savedEmails', ()=>{
            console.log('getaAllPaths', getaAllPaths );
        });
    }

    async function four(three3, unpinMe){
        for(var i=0; i<getaAllPaths.length; i++){
            if(getAllArr[i].savedEmail==unpinMe){
                console.log('same!', i);
                addDoc('users/'+whereIds[0]+'/savedEmails', getaAllPaths[i], {savedEmail: ""});

            }
        }
    }

}