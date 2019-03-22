window.onload = ()=>{

    //loading pinnedFriends
    loadingFriends();



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
            //making requests populate()
            await populateRequests('jim');
            document.getElementById('requestsElem').innerHTML="";
            await addToRequestHTML();
            await makeEventsWithGatorForRequests();

            //making friends populate()
            await pullFriends('jim')
            document.getElementById('friendsElem').innerHTML="";
            await populateFriends('jim')
            await addToFriendHTML()
            await makeEventsWithGatorForFriends();

        //================================================
        //make HTML for requestsPage
        Gator(document.getElementById('backToMain')).on('click', ()=>{
            hide('requestsPage');
            show('main');
        });
    });


}

//function for loading friends on Page: Main
async function loadingFriends(myEmail){
    await pullFriends
}


