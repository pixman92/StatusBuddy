window.onload = ()=>{

    
    // console logging personal status
    Gator(document.getElementById('personalStatus')).on('input', ()=>{
        console.log(document.getElementById('personalStatus').innerText);
    });

    // send request event listener
    Gator(document.getElementById('searchButton')).on('click', ()=>{
        alert('Request sent to: ' + document.getElementById('searchBar').value);
        console.log(document.getElementById('searchBar').value);
        sendRequest('tmp', document.getElementById('searchBar').value);
    });

    // hide('requestsPage');

    Gator(document.getElementById('requestButton')).on('click', ()=>{
        hide('main');
        show('requestsPage');
        Gator(document.getElementById('backToMain')).on('click', ()=>{
            hide('requestsPage');
            show('main');
        });
    });

}