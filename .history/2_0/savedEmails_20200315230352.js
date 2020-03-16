
var savedEmailsArr=[];
async function savedEmails(email){
    try{
        var one1 = await one();
        var two2 = await two(one1);
        // var three3 = await three(two2, myStatus);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(){
        savedEmailsArr.push('<div class="gridSavedEmailAndX">');
        savedEmailsArr.push('<div>');
        
        savedEmailsArr.push('<li id=\"nope\">nope</li>');
        
        savedEmailsArr.push('</div>');
        savedEmailsArr.push('<div>');
        savedEmailsArr.push('<button class=\"w3-button w3-blue smfont\">X</button>');
        
        savedEmailsArr.push('</div>');
        savedEmailsArr.push('</div>');
        savedEmailsArr.push('</div>');
        
        document.getElementById('dynamicSavedEmails').innerHTML = savedEmailsArr.join("");
    }