import React from "react";

// HIGHER ORDER COMPONENTS (HOCs)allow you to reuse component logic across multiple components.
const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        //Common functionality for both clickcounter.js and hover counter.js
        constructor(props) {
            super(props)
          
            this.state = {
               Count : 0
            }
          }
          incrementCount= () =>{
              this.setState(prevstate => {
                  return {Count: prevstate.Count + 1}
              })
          }
          //
        render() {
            
            return <OriginalComponent Count={this.state.Count}
            incrementCount={this.incrementCount} />;
        }
    }
    return NewComponent;
}

export default UpdatedComponent;
