import React, { Component } from 'react'

class DynamicInput extends Component {

  onChange = () =>{

  }

  render() {
    return (
      <div>
          <input type="text" onChange></input>
          <input type="text"></input>
          <input type="submit"></input>
      </div>
    )
  }
}

export default DynamicInput
