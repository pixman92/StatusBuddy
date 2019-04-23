
//things to load on starutp
window.onload = ()=>{
    loadStatus(email='leo@gmail.com');
    onStatusChange(email='leo@gmail.com');
}

function loadStatus(email='leo@gmail.com'){
    getStatus(email);
    wait(100).then(()=>{
        document.getElementById('personalStatus').innerText = passedStatus;

    });
    wait(1000).then(()=>{
        if(document.getElementById('personalStatus').innerText=="undefined"||document.getElementById('personalStatus').innerText==""){
            loadStatus(email='leo@gmail.com');
        }

    });
}