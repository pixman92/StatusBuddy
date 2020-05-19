import React, { Component } from 'react'

class DynamicInput extends Component {

  handleChange1 = (e) =>{
    this.setState({value: e.target.value})
    alert('change' + value)      
  }

  handleChange2 = (e) =>{
    this.setState({value: e.target.value})
    alert('change' +value)  
  }

  render() {
    return (
      <div>
          <input type="text" onChange={this.handleChange1}></input>
          <input type="text" onChange={this.handleChange2}></input>
          <input type="submit"></input>
      </div>
    )   
  }
}

export default DynamicInput
