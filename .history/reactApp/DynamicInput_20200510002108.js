import React, { Component } from 'react'

class DynamicInput extends Component {

  handleChange1 = (e) =>{
    this.s
    alert('change' + )      
  }

  handleChange2 = (e) =>{
    this.s
    alert('change' + )  
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
