window.onload = ()=>{

    
    // console logging personal status
    Gator(document.getElementById('personalStatus')).on('input', async ()=>{

        console.log(document.getElementById('personalStatus').innerText);
        await quickStatus('jim', document.getElementById('personalStatus').innerText);
    });

    // click on personalStatus, make empty
    Gator(document.getElementById('personalStatus')).on('click', ()=>{
        if(document.getElementById('personalStatus').innerText=="Change me!"){
            document.getElementById('personalStatus').innerText="";
        }
    });

    // send request event listener
    Gator(document.getElementById('searchButton')).on('click', ()=>{
        alert('Request sent to: ' + document.getElementById('searchBar').value);
        console.log(document.getElementById('searchBar').value);
        sendRequest('tmp', document.getElementById('searchBar').value);
    });

    // hide('requestsPage');
    Gator(document.getElementById('requestButton')).on('click', async ()=>{
        hide('main');
        show('requestsPage');
        //================================================
        //all logic after requestPage is made in HTML
        await populateRequests('me2@gmail.com');
        document.getElementById('requestsElem').innerHTML="";
        await addToRequestHTML();
        await makeEventsWithGatorForRequests();
        //================================================
        //make HTML for requestsPage
        Gator(document.getElementById('backToMain')).on('click', ()=>{
            hide('requestsPage');
            show('main');
        });
    });



}