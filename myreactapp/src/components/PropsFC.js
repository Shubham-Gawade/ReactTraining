import React from 'react'

//we can change name props in function component because it is parameter
export default function PropsFS(props){
    //props.uname="ABC"
    return(
        <diV>
            Hello, {props.uname} , You stay at {props.city}
        </diV>
    )  
}

PropsFS.defaultProps={
    uname:"Guest",
    city: "Delhi"
}
