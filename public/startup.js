window.onload = ()=>{
    // Gator(document.getElementById(''))
    Gator(document.getElementById('personalStatus')).on('input', ()=>{
        console.log(document.getElementById('personalStatus').innerText);
    });

    Gator(document.getElementById('searchButton')).on('click', ()=>{
        alert('Request sent to: ' + document.getElementById('searchBar').value);
        console.log(document.getElementById('searchBar').value);
        sendRequest('tmp', document.getElementById('searchBar').value);
    });



}