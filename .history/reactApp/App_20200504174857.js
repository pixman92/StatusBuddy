import React, { Component } from 'react';
import SideBar from './SideBar';
class App extends Component{

   constructor(props){
      super(props);
   }

   getIntialState(){
      return {"changingMe": "showMe"};
   }

   toggleSideBar(){
      this.props.changingMe == "showMe" ? "showMe2" : "showMe"
   }


   render(){
      return(
         <div>
            <div className="center">
            <div className="headerGrid w3-blue w3-bottombar">
               <div onClick={()=>{
                 this.toggleSideBar();
                 console.log('yup'); 
               }}>
                  <div className="hamburger"></div>
                  <div className="hamburger"></div>
                  <div className="hamburger"></div>
               </div>
   
               <div className="header">Status Buddy</div>
   
               <div>
               <SideBar className={this.props.changingMe}/>
   
               </div>
            </div>
   
   
      </div>
     </div>
      );
   }
}
export default App;