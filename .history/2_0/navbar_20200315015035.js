//functions to hide/show navbar


var allPages = ["page1", "navBar"];
function hide(){
    for(var i=0; i<allPages.length; i++){
        document.getElementById(allPages[i]).style.display="none";
    }
}

function showNavBar(){
    // document.getElementById('navBar').style.display="block";

    // document.getElementById('navBar').style.visibility="visible";

    // document.getElementById('navBar').style.width = "0%";
    // wait(500).then(()=>{
    //     document.getElementById('navBar').style.width = "20%";
    // });

    document.getElementById('navBar').classList.remove('navbar');
    document.getElementById('navBar').classList.add('showMe');
}

function closeNavBar(){
    document.getElementById('navBar').classList.add('navbar');
    document.getElementById('navBar').classList.remove('showMe');
}