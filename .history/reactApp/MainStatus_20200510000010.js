import React, { Component } from 'react'

export class MainStatus extends Component {
    constructor(props){
        super(props);
        this.state={
           newDate: ""
        }
     }
    render() {
        return (
            <div>
                <div>{this.props.email}</div>
                <div>{this.props.status}</div>
                <div>{this.state.newDate}</div>
            </div>
        )
    }
}

export default MainStatus
