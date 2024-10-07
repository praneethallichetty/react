import React,{ Component } from 'react';
class Message extends Component {
    constructor() {
        super() 
        this.state={
            Message:'Welcome man'
        }

        }
    changeMessage(){
        this.setState(
            {
                Message:'Thanks dude for subscribing!'
            }
        )
    }

    render() {
        return(
            <div>
            <h1>
                {this.state.Message}
            </h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message