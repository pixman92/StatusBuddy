
async function addToSavedEmails(myEmail, savedEmail){
    //function that saves emails to separate Doc
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1, savedEmails);
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
    async function two(one1, savedEmail){
        await getAll('users/'+whereIds[0]+'/savedEmails', async()=>{
            for(var i=0; i<getAllArr.length; i++){
                if(getAllArr[i].savedEmail==savedEmail){
                    alert('Already on your list!');
                }else{
                    await adding('users/'+whereIds[0]+'/savedEmails',  {savedEmail: savedEmail});
                }
            }

        });


    }

    
}



var savedEmailsArr=[];
async function savedEmails(email){
    try{
        var one1 = await one(email);
        if(wholeDoc.length!=0){
            var two2 = await two(one1);
        }else{
        }
        // var three3 = await three(two2, myStatus);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(email){
        // function to pull and see if email has status
        await pullStatus(email);
    }


    async function two(one1){
        savedEmailsArr.push('<div class="gridSavedEmailAndX">');
        savedEmailsArr.push('<div>');
        
        savedEmailsArr.push('<li id=');
        savedEmailsArr.push('\"'+wholeDoc[0].email+'\"');
        savedEmailsArr.push('>')


        savedEmailsArr.push(wholeDoc[0].email)
        savedEmailsArr.push('</li>');
        
        savedEmailsArr.push('</div>');
        savedEmailsArr.push('<div>');
        savedEmailsArr.push('<button class=\"w3-button w3-blue smfont\">X</button>');
        
        savedEmailsArr.push('</div>');
        savedEmailsArr.push('</div>');
        savedEmailsArr.push('</div>');
        
        document.getElementById('dynamicSavedEmails').innerHTML = savedEmailsArr.join("");
    }
}