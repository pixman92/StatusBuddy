import React, { Component } from 'react'

class DynamicInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value1: '',
        value2: ''
    };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.logicMe = this.logicMe.bind(this);
    }  

  handleChange1(event){
    this.setState({value1: event.target.value});
    console.log('change1 ' + this.state.value1);      
  }

  handleChange2(e){
    this.setState({value2: e.target.value});
    console.log('change2 ' +this.state.value2);  
  }

  
  
  onSubmit(e){
      console.log('i ran')
      this.logicMe(this.state.value1,this.state.value2);
      event.preventDefault();
    }
    
    logicMe(param1){
        console.log('hey');
        if(param1=="hello"){
            alert('hello World');
        }
    }


  render() {
    return (
      <div>
          <input type="text" onChange={this.handleChange1}></input>
          <input type="text" onChange={this.handleChange2}></input>
          <input onClick={this.onSubmit} type="submit"></input>
      </div>
    )   
  }
}



export default DynamicInput
