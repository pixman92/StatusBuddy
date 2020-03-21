
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
        //removes "" elements from pulledPinnedEmails
        await getAll('users/'+whereIds[0]+'/savedEmails', ()=>{     
            getAllArr.forEach((elem, i)=>{
                if(elem.savedEmail==""){
                    getAllArr.splice(i, 1);
                    getaAllPaths.splice(i, 1);
            }
        });

        })

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
                await pullStatus(elem.savedEmail); //populates wholeDoc[];

                //========================================
                //funcitonality - push to search page

                hide();
                show('search');
                document.getElementById('searchInput').value=wholeDoc.email;
                await pullStatus(emailElem);
            searchArr=[];
            searchArr.push('<div class=\"w3-card marginAroundMe\">');
            searchArr.push(wholeDoc[0].status);
            searchArr.push('</div>');
            // searchArr.join("");
            document.getElementById('statusFromSearch').innerHTML = searchArr.join("");

        }
        if(whereIds[0]==undefined){
            alert("None found")
        }


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

async function erasePinnedEmail(myEmail, unpinMe){
    //function to remove one emailOfSavedFriend

    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1);
        var three3 = await three(two2);
        var four4 = await four(three3, unpinMe);

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

    async function four(three3, unpinMe){
        for(var i=0; i<getaAllPaths.length; i++){
            if(getAllArr[i].savedEmail==unpinMe){
                console.log('same!', i);
                addDoc('users/'+whereIds[0]+'/savedEmails', getaAllPaths[i], {savedEmail: ""});

            }
        }
    }

}