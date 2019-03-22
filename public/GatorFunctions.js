//================================================

// functions that use Gator to attach eventListeners
function eventForIdElem(id, callback, param){
    Gator(document.getElementById(id)).on('click', ()=>{
        callback(param);
    });
}
function eventOff(id){
    Gator(document.getElementById(id)).off();
}

function alertMe(msg){
    alert(msg);
}