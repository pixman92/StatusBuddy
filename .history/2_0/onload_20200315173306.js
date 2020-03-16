window.onload = ()=>{

    // closeNavBar();
    document.getElementById('xbutton').addEventListener('click', ()=>{
        closeNavBar();
    });

    document.getElementById('hamburgerDiv').addEventListener('click', ()=>{
        showNavBar();
    });

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
        await   pullStatus(email);
    }

    async function two(one1){
        await document.getElementById('status').innerHTML = wholeDoc[0].status;
    }
}
