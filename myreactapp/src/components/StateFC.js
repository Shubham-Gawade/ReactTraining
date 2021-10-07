import React,{useState} from 'react'

export default function StateFC(props){
    // const [username,setUserName]=useState("Admin")
    // const [password,setPassword]=useState("Admin123")
    const [username,setUserName]=useState(props.uname)
    const [password,setPassword]=useState(props.pass)

    
    return(
        <diV>
            Username : {username}
            <br/>
            Password : {password}
        </diV>
    )  
}

StateFC.defaultProps={
    uname:"Admin",
    pass: "Admin@123"
}
