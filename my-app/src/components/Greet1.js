//2. class component

import React,{ Component } from 'react';
class Greet1 extends Component {
    render() {
        //Destructing of props method
        const{name,city}= this.props
        return (
            <h1>Hello {name} from {city}</h1>
        )
    }
}

export default Greet1