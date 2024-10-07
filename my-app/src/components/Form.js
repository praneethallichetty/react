import React, { Component } from 'react'
const style={
    color:'orange',
    fontsize:"40px"
}

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         Skills:'HTML&CSS'
      }
    }
    
    handlerUsernamechange=(Event)=>{
        this.setState({
            username:Event.target.value
        })
    }

    handlecomment=(Event)=>{
        this.setState({
            comment:Event.target.value
        })
    }
    
    handleskill=(Event)=>{
        this.setState({
            Skills:Event.target.value
        })
    }

    handlesubmit=Event=>{
     alert(`${this.state.username} ${this.state.comment} ${this.state.Skills}`)
    }
  render() {
    return (
        <form onSubmit={this.handlesubmit}>
      <div style={style}>
        <label>USERNAME--</label>
        <input type='text' value={this.state.username} onChange={this.handlerUsernamechange} />
      </div>
      <div>
        <label>Comment--</label>
        <textarea value={this.state.comment} onChange={this.handlecomment}></textarea>
      </div>
      <div>
        <label>Skills--</label>
        <select value={this.state.Skills} onChange={this.handleskill}>
            <option value='PYTHON'>PYTHON</option>
            <option value='REACT'>REACT</option>
            <option value='HTML&CSS'>HTM:&CSS</option>
            <option value='JAVA'>JAVA</option>
            <option value='UI&UX'>UI&UX</option>
        </select>
      </div>

      <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form
