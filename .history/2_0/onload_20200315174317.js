window.onload = ()=>{

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

    document.getElementById('updateBtn').addEventListener('click', ()=>{
        var statusElem = document.getElementById('statusUpdateForm').nodeValue;
        pushStatus('sam@gmail.com', )


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
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}
