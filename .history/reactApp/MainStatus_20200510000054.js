import React, { Component } from 'react'

export class MainStatus extends Component {
    constructor(props){
        super(props);
        this.state={
           newDate: new Date().toLocaleString()
        }
     }
     getDate() {
        var date = {  };
    
        this.setState({
          date: date
        });
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
