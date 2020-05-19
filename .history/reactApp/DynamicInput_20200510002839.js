import React, { Component } from 'react'

class DynamicInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value1: '',
        value2: ''
    };
    }  

  handleChange1(e){
    this.setState({value1: e.target.value});
    console.log('change1' + value1);      
  }

  handleChange2(e){
    this.setState({value2: e.target.value});
    console.log('change2' +value2);  
  }

  render() {
    return (
      <div>
          <input type="text" onChange={()=>{this.handleChange1()}></input>
          <input type="text" onChange={this.handleChange2}></input>
          <input type="submit"></input>
      </div>
    )   
  }
}

export default DynamicInput
