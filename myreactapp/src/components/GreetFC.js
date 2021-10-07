import React from 'react'

//Default Export
//We can change name while importing
//No need to add {} while importing

// function Greet(){
//     return <h1>Hello World</h1>
// }
// export default Greet

//Named Export
//We can not change name while importing
//Need to add {} while importing

// export const Greet = () => {
//     return <h1>Hello World</h1>
// }

//Return multiple lines
export const Greet = () => {
    return(
        <diV>
            <h1>Hello World</h1>
            <p>This is paragraph</p>
            <Hello/>
        </diV>
    )  
}

export const Hello = () =>{
    return <h2>This is Hello component</h2>
}