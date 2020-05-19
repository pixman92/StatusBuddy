import React, { Component } from 'react';
class SideBar extends Component{

    render(){
        return(
            <div>
                <div className={this.props.changingMe}>
                </div>
            </div>
        );
    }


}
export default SideBar;