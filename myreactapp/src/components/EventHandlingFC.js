import React from 'react'

function clickHandler(){
    alert("Button is Clicked Function Component")
}

export default function EventHandlingFC() {
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
