import React, { Component } from 'react';
class SideBar extends Component{

    render(){
        return(
            <div>
            <div className={()=>{}
            this.props.changingSomething}
            >
        <div className="inner w3-grey">
            <ul>
                <div className="gridX w3-blue">
                    <div><div className="nav">Navigation</div></div>
                    <div className="w3-border-blue center">
                        <button className="w3-btn" id="xbutton">X</button>
                    </div>
                </div>
                <li id="homeLink">Home</li>
                <li id="searchLink">Search</li >
                <li id="updateLink">Update My Status</li>

                
                <div id="savedEmailMarg">
                    <li className="w3-blue">Saved Emails</li>
                    <div id="dynamicSavedEmails">
                        <div className="gridSavedEmailAndX">
                            <div>
                                <li id="hello">hello</li>
                            </div>
                            <div>
                                <button className="w3-button w3-blue smfont">X</button>
                            </div>

                        </div >
                    </div>

                </div>
            </ul>
        </div>


    </div>
            </div>
        );
    }


}
export default SideBar;