//mounting lifecycle

//type rce for shortcut of code snippet

import React, { Component } from 'react'

 class LifecycleB extends Component {
//type rconst for constructor code snippet
//method-1
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Bunny'
      }
      console.log("LifecycleB constructor")
    }
//method-2
    static  getDerivedStateFromProps(Props,state) {
        console.log('LIfecycleB getDerivedstateFromprops')
       return null
    }
//method-4
    componentDidMount(){
       console.log("lifecycleB componentDidMount()")
    }
    
    shouldComponentUpdate(){
      console.log('LifecycleB shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleB getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('LifecycleB componentDidUpdate')
    }
 //method-3   
    
  render() {
    console.log('LifecycleB render')
    return <div>
        <div><h4>LifecycleA</h4></div>
        <div>LifecycleB</div>
        </div>
           
  }
}

export default LifecycleB
