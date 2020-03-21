var searchArr = [];
window.onload = ()=>{

    // update status function (!)
    addStatusToHTML('sam@gmail.com');

    // closeNavBar();

    // X button on side nav bar
    document.getElementById('xbutton').addEventListener('click', ()=>{
        closeNavBar();
    });


    // 3 bar clickable
    document.getElementById('hamburgerDiv').addEventListener('click', ()=>{
        showNavBar();
    });

    // li elements for changing screen
    document.getElementById('searchLink').addEventListener('click', ()=>{
        hide();
        closeNavBar();
        show('search');
    });

    document.getElementById('updateLink').addEventListener('click', ()=>{
        hide();
        closeNavBar();
        show('updateStatus');
    });
    document.getElementById('homeLink').addEventListener('click', ()=>{
        hide();
        closeNavBar();
        show('page1');
    });


    // buttons ... Search and Update

    document.getElementById('updateBtn').addEventListener('click', async()=>{
        var statusElem = document.getElementById('statusUpdateForm').value;
        await pushStatus('sam@gmail.com', statusElem ); 
        if(wholeDoc[0].status!=undefined){
            alert("Saved!");
        }else{
            alert("Something went wrong");
        }
        document.getElementById('statusUpdateForm').value="";
    });  

    document.getElementById('searchButton').addEventListener('click', async()=>{
        var emailElem = document.getElementById('searchInput').value;
        if(emailElem==""){
            alert("Please enter an email!");
        }else{
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

    //========================================
    pullPinnedList('sam@gmail.com')''
    

}

async function addStatusToHTML(email){
    try{
        var one1 = await one(email);
        var two2 = await two(one1);
    }catch(e){
        console.log(e);
        throw e;
    }

    async function one(email){
        try{
            await pullStatus(email);
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    
    async function two(one1){
        try{
            console.log('wholeDoc', wholeDoc);
            document.getElementById('status').innerHTML = wholeDoc[0].status;
            document.getElementById('myEmail').innerHTML = wholeDoc[0].email;
            document.getElementById('dateStatus').innerHTML = secsToDate(wholeDoc[0].date.seconds);
            
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}
