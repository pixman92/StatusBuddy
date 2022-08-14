let selectedItem; 
function eventListeners(){
    document.getElementById('menu-item-0').addEventListener('click', ()=>{
        removeAllBackgrounds();
        document.getElementById('menu-item-0').classList.toggle('bg-slate-300');
        selectedItem = 'available';
    });
    document.getElementById('menu-item-1').addEventListener('click', ()=>{
        removeAllBackgrounds();
        document.getElementById('menu-item-1').classList.toggle('bg-slate-300');
        selectedItem = 'busy'
    });
    document.getElementById('menu-item-2').addEventListener('click', ()=>{
        removeAllBackgrounds();
        document.getElementById('menu-item-2').classList.toggle('bg-slate-300');
        selectedItem = 'idle'
    });
}

function removeAllBackgrounds(){
    document.getElementById('menu-item-0').classList.remove('bg-slate-300');
    document.getElementById('menu-item-1').classList.remove('bg-slate-300');
    document.getElementById('menu-item-2').classList.remove('bg-slate-300');
}