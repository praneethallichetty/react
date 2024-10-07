import React, { Component } from 'react'
import Regularcomponent from './Regularcomponent';
// import PureComp from './PureComp';
import MemoComp from './MemoComp';

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Praneeth"
      }
    }
    
    componentDidMount(){
        setInterval(() => {
          this.setState({
            name:'Praneeth'
          })
        }, 2000);
    }
  render() {
    console.log("****parent component rendering****")
    return (
      <div>
        Parent component
        <MemoComp name={this.state.name} />
        {/* <Regularcomponent name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
