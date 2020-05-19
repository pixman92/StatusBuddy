import React, { Component } from 'react';
class SideBar extends Component{

    render(){
        return(
            <div>
            <div id="navBar" class="showMe">
        <div class="inner w3-grey">
            <ul>
                <div class="gridX w3-blue">
                    <div><div class="nav">Navigation</div></div>
                    <div class="w3-border-blue center">
                        <button class="w3-btn" id="xbutton">X</button>
                    </div>
                </div>
                <li id="homeLink">Home</li>
                <li id="searchLink">Search</li >
                <li id="updateLink">Update My Status</li>

                
                <div id="savedEmailMarg">
                    <li class="w3-blue">Saved Emails</li>
                    <div id="dynamicSavedEmails">
                        <div class="gridSavedEmailAndX">
                            <div>
                                <li id="hello">hello</li>
                            </div>
                            <div>
                                <button class="w3-button w3-blue smfont">X</button>
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