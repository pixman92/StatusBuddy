//functions to hide/show navbar


var allPages = ["page1", "updateStatus"];
function hide(){
    for(var i=0; i<allPages.length; i++){
        document.getElementById(allPages[i]).style.display="none";
    }
}

function show(id){
    document.getElementById(id).style.display="block";
}

function showNavBar(){
    document.getElementById('navBar').classList.remove('showMe');
    document.getElementById('navBar').classList.add('showMe2');
}

function closeNavBar(){
    document.getElementById('navBar').classList.add('showMe');
    document.getElementById('navBar').classList.remove('showMe2');
}