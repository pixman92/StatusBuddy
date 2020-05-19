import React, { Component } from 'react'


//class for ReactJS - for Running code based on 2 input fields
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
      this.logicMe(this.state.value1,this.state.value2);
      event.preventDefault();
    }
    
    logicMe(param1, param2){
        if(param1=="hello"){
            alert('hello World');
        }
        // if(param1=="1"){
        //         return (
        //             <div>
        //                 <h1>Hello</h1>
        //             </div>
        //         );
        }
    }


  render() {
    if(this.state.value1=="1"){
            <div>
                Hello
            </div>
        );
    }

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
