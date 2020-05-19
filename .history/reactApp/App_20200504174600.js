import React, { Component } from 'react';
class App extends Component{

   toggleSideBar(){
      this.props.showHideSideBar == "hidden" ? "show" : "hidden"
   }


   render(){
      return(
         <div>
            <div className="center">
            <div className="headerGrid w3-blue w3-bottombar">
               <div onClick={()=>{
                 this.toggleSideBar(); 
               }}>
                  <div className="hamburger"></div>
                  <div className="hamburger"></div>
                  <div className="hamburger"></div>
               </div>
   
               <div className="header">Status Buddy</div>
   
               <div>
               
   
               </div>
            </div>
   
   
      </div>
     </div>
      );
   }
}
export default App;