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

    document.getElementById('updateStatus').addEventListener('click', ()=>{
        hide();
        closeNavBar();
        show('updateStatus');
    });


}
