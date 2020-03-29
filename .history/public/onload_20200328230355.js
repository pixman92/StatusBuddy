var searchArr = [];
var myEmail;
var MAINEMAIL="";
window.onload = ()=>{
    

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.

          
          console.log('in')
          console.log('MAINEMAIL', MAINEMAIL);
          document.getElementById('buttonCenter').style.display="none";
          var user = firebase.auth().currentUser;
          MAINEMAIL = user.email;
          hide();
          show('page1');
          onLoadFunc();
        } else {
          // No user is signed in.
          console.log('out')
          hide();
          show('buttonCenter')
        //   document.getElementById('buttonCenter').style.display="block";
        }
    });
    // check(()=>{
    //     if(user!=null){
    //         console.log('i ran');
    //         onLoadFunc();
    //     }        
    // });

    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       // User is signed in.
    //       console.log('in')
    //       document.getElementById('buttonCenter').style.display="none";
    //       var user = firebase.auth().currentUser;
    //       MAINEMAIL = user.email;
    //       hide();
    //       show('page1');
    //       onLoadFunc();
    //     } else {
    //       // No user is signed in.
    //       console.log('out')
    //       hide();
    //       show('buttonCenter')
    //     }
    //   });




    document.getElementById('loginButton').addEventListener('click', ()=>{
        signIn();
    });


        



}

//=====================================================

async function onLoadFunc(){
    // update status function (!)
    await addStatusToHTML();

    if(wholeDoc==""){
        document.getElementById('status').innerHTML = "NO SUCH STATUS...YET";
    }
    
    // closeNavBar();

    // X button on side nav bar
    document.getElementById('xbutton').addEventListener('click', ()=>{
        closeNavBar();
    });


    // 3 bar clickable
    document.getElementById('hamburgerDiv').addEventListener('click', ()=>{
        showNavBar();
    });

    // li elements for changing screen
    document.getElementById('searchLink').addEventListener('click', ()=>{
        hide();
        closeNavBar();
        show('search');
    });

    document.getElementById('updateLink').addEventListener('click', ()=>{
        hide();
        closeNavBar();
        show('updateStatus');
    });
    document.getElementById('homeLink').addEventListener('click', ()=>{
        hide();
        closeNavBar();
        show('page1');
    });


    // buttons ... Search and Update

    document.getElementById('updateBtn').addEventListener('click', async()=>{
        var statusElem = document.getElementById('statusUpdateForm').value;
        await pushStatus(statusElem); 
        if(wholeDoc[0].status!=undefined){
            alert("Saved!");
        }else{
            alert("Something went wrong");
        }
        document.getElementById('statusUpdateForm').value="";
    });  

    document.getElementById('searchButton').addEventListener('click', async()=>{
        var emailElem = document.getElementById('searchInput').value;
        if(emailElem==""){
            alert("Please enter an email!");
        }else{
            

        }
        if(whereIds[0]==undefined){
            alert("None found")
        }
    });

    //========================================
    //pull pinned list on first call, when window loads
    // pullPinnedList();
    
    //========================================
    document.getElementById('addToSaved').addEventListener('click', async()=>{
        // saving Email to pinnedEmails
        var emailElem = document.getElementById('searchInput').value;
        await addToPinned(emailElem);
        if(saved==true){
            alert("Saved!");
        }
    });

    //========================================
}




//=====================================================
async function addStatusToHTML(){
    //status maker for page1

    try{
        // var zero0 = await zero();
        var one1 = await one();
        var two2 = await two(one1);
    }catch(e){
        console.log(e);
        throw e;
    }

    // async function zero(){
    //     // check();
    //     console.log('email', email);
    // }

    async function one(){
        try{
            await pullStatusMain();
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    
    async function two(one1){
        try{
            if(wholeDoc.length!=0){
                console.log('wholeDoc', wholeDoc);
                document.getElementById('status').innerHTML = wholeDoc[0].status;
                document.getElementById('myEmail').innerHTML = wholeDoc[0].email;
                document.getElementById('dateStatus').innerHTML = secsToDate(wholeDoc[0].date.seconds);

            }else{
                console.log('user not found'); 
                document.getElementById("status").innerHTML = "NO STATUS...YET!"; 

            }
            
            
        }catch(e){
            console.log(e);
            throw e;
        }
        return wholeDoc;
    }
}
