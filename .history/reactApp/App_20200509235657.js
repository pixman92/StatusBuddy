import React, { Component } from 'react';
import SideBar from './SideBar';
import MainStatus from './MainStatus';
class App extends Component{

   constructor(props){
      super(props);
      this.state={
         "changingMe": "showMe2",
         
      }
   }

   // getIntialState(){
   //    return {"changingMe": "showMe2"};
   // }

   toggleSideBar(){
      var tmp = (this.state.changingMe == "showMe2") ? "showMe" : "showMe2";
      console.log('tmp', tmp);
      this.setState({"changingMe":tmp});
      console.log('yup'); 
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
               <SideBar changingSomething={this.state.changingMe} />
   
               </div>
               <div>
                  <MainStatus email={this.state.email} status={this.state.status} />
               </div>
            </div>
         </div>
     </div>
      );
   }
}
export default App;