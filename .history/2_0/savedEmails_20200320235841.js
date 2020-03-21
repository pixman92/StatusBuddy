
async function addToSavedEmails(myEmail, emailToAdd){
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
async function pullFromSavedEmails(myEmail){
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
            savedEmailsArr.push('<button class=\"w3-button w3-blue smfont\">X</button>');
            
            savedEmailsArr.push('</div>');
            savedEmailsArr.push('</div>');
            savedEmailsArr.push('</div>');
            
        }
        
        
        document.getElementById('dynamicSavedEmails').innerHTML = savedEmailsArr.join("");
        
    }

    async function four(three3){
        // document.getElementById('dynamicSavedEmails').addEventListener('load', ()=>{
        //     console.log('run');

        for(var i=0; i<getAllArr.length; i++){
            console.log('i', i);
            // document.getElementById(getAllArr[i].savedEmail).addEventListener('click', async()=>{
            //     // console.log('i ran');
            //     pullStatus(getAllArr[1].savedEmail);
            // });

            Gator(document.getElementById(getaAllArr[i]).on('click'))


        }
        // });
        
    }

}