//mounting lifecycle

//type rce for shortcut of code snippet

import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
//type rconst for constructor code snippet
//method-1
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Bunny'
      }
      console.log("LifecycleA constructor")
    }
//method-2
    static  getDerivedStateFromProps(Props,state) {
        console.log('LIfecycleA getDerivedstateFromprops')
       return null
    }
//method-4
    componentDidMount(){
       console.log("lifecycleA componentDidMount()")
    }

    shouldComponentUpdate(){
      console.log('LifecycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleA getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
          name:'ReactJS'
        })
    }
 //method-3   
  render() {
    console.log('LifecycleA render')
    return <div>
        <div><h4>LifecycleA</h4></div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB/>
        </div>
  }
}

export default LifecycleA
