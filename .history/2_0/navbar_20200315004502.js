//functions to hide/show navbar


var allPages = ["page1", "navBar"];
function hide(){
    for(var i=0; i<allPages.length; i++){
        document.getElementById(allPages[i]).style.display="none";
    }
}

function showNavBar(){
    document.getElementById('navBar').style.display="block";
    document.getElementById('navBar').style.width = "0%";
    document.getElementById('navBar').style.width = "20%";
    document.getElementById('navBar').style.width = "60%";
    document.getElementById('navBar').style.width = "80%";
    document.getElementById('navBar').style.width = "100%";
}

function closeNavBar(){
    document.getElementById('navBar').style.width = "100%";
}