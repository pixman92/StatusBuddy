// =================
// file that allows for the quick change of my user name for User

// TODO save new name to User Data
function change(){
    document.getElementsByClassName('nickname')[0].setAttribute("contenteditable", "true");
  
  }
  let text = '';
  function printMe(){
    text = document.getElementsByClassName('nickname')[0].innerText;
    console.log(text);
  }
  
  function changeNameListener(){
    document.getElementsByClassName('nickname')[0].addEventListener('click', ()=>{
      change();
    });
    
    
    window.addEventListener('click', function(e){   
      if (document.getElementsByClassName('nickname')[0].contains(e.target)){
        // Clicked in box
        console.log('in');
      } else{
        // Clicked outside the box
        console.log('out');
        printMe();
        updateProfile(UIDFromResult, 'nickname', text);
      }
    });
  
  }
  
//   eventListeners();