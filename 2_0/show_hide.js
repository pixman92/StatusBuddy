//functions to hide/show navbar


var allPages = ["page1", "updateStatus", "search"];
function hide(){
    for(var i=0; i<allPages.length; i++){
        document.getElementById(allPages[i]).style.display="none";
    }
}

function show(id){
    document.getElementById(id).style.display="block";

    if(id=="page1"){
        addStatusToHTML('sam@gmail.com');
        pullPinnedList('sam@gmail.com');
    }
}

function showNavBar(){
    document.getElementById('navBar').classList.remove('showMe');
    document.getElementById('navBar').classList.add('showMe2');
    pullPinnedList('sam@gmail.com');
}

function closeNavBar(){
    document.getElementById('navBar').classList.add('showMe');
    document.getElementById('navBar').classList.remove('showMe2');
}