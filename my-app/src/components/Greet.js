import React from 'react';
//1.functional component syntax
// function Greet() {
//      return <h1>Functional component</h1>
//  }

//Destructuring of props in 2 ways in functional component 
//  1- in function name giving values in parametes
//const Greet=({name,city,age})=>{
//  2- in function body giving values and for as props in parameter
const Greet=(props)=>{
    const {name,city,age}=props
   console.log(props)
    return(
        <div>
            <h1>
                Hello {name} from {city} ur age{age}
            </h1>
            {/* {props.children} */}
        </div>
    );
}
export default Greet



