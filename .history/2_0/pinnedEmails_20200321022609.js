
async function addToPinned(myEmail, emailToAdd){
    //function that saves emails to separate Doc
    // edge case? - email is already there, don't add duplicates
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1, emailToAdd);
        // var three3 = await three(two2, myStatus);
        // var four4 = await four(three3);

    }catch(e){
        console.log('e', e);
        throw e;
    }
    
    async function one(myEmail){
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

            }

        });


    }

    
}



var savedEmailsArr=[];
async function pullPinnedList(myEmail){
    // HTML maker! for savedEmails - from DOC saved within admin's email
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1);
        var three3 = await three(two2);
        var four4 = await four(three3);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(myEmail){
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
        await getAll('users/'+whereIds[0]+'/savedEmails', ()=>{});

    }

    async function three(two2){
        document.getElementById('dynamicSavedEmails').innerHTML = "";

        savedEmailsArr = [];
        
        for(var i=0; i<getaAllPaths.length; i++){
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
        
    }

    async function four(three3){
        getAllArr.forEach(async(elem)=>{
            document.getElementById(elem.savedEmail).addEventListener('click', async()=>{
                await pullStatus(elem.savedEmail);
            });
        });
        getAllArr.forEach(async(elem)=>{
            document.getElementById(elem.savedEmail+"del").addEventListener('click', async()=>{
                console.log('clicked on?', elem.savedEmail+"del");
            });
        });
        
        
    }

}

//========================================

async function erasePinnedEmail(myEmail){
    //function to remove emailOfSavedFriend

    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1);
        var three3 = await three(two2);
        // var four4 = await four(three3);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(myEmail){
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

}