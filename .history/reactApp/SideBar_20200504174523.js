import React, { Component } from 'react';
class SideBar extends Component{

    render(){
        return(
            <div>
                <div id="navBar" className={this.props.changingMe}>
                </div>
            </div>
        );
    }


}
export default SideBar;