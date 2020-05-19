import React, { Component } from 'react'

export class MainStatus extends Component {
    constructor(props){
        super(props);
        this.state={
           newDate: new Date(),
        }
     }
    render() {
        return (
            <div>
                <div>{this.props.email}</div>
                <div>{this.props.status}</div>
                <div>{new Date()}</div>
            </div>
        )
    }
}

export default MainStatus
