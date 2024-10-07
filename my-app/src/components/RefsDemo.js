//REFS:---------------
//Refs are used to focus the input value after refreshing the browser


import React, { Component } from 'react'

 class RefsDemo extends Component {

    constructor(props) {
        super(props)
//1st APPROACH of refs by creating refs
        this.inputRef=React.createRef()
//2nd approach of refs by callbacking refs
        this.cbRef = null
        this.setcbRef = (Element)=>{
            this.cbRef = Element
        }
        
      }
      componentDidMount(){
        //2nd approach
        if(this.cbRef){
            this.cbRef.focus()
        }
        //1st approach
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

      }

      clickhandler=()=>{
        alert(this.inputRef.current.value)
      }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />   <br></br>
        <input type='text' ref={this.setcbRef}/>     <br></br>
        <button onClick={this.clickhandler}>Click here</button>
      </div>
    )
  }
}

export default RefsDemo
