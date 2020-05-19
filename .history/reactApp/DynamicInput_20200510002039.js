import React, { Component } from 'react'

class DynamicInput extends Component {

  handleChange1 = (e) =>{
    alert('change' + this.state.value)      
  }

  handleChange2 = (e) =>{
    alert('change' + this.state.value)  
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
