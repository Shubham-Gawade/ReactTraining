import React, { useState } from 'react'

export default function ColorButton() {
    const [buttonColor, setButtonColor] = useState("red")
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
    const [disabled, setDisabled] = useState(false)
    return (
        <div>
            <button 
                style={{backgroundColor : buttonColor}}
                onClick={() => setButtonColor(newButtonColor)}
                disabled = {disabled}
            >Change Color to {newButtonColor}</button>

            <input 
                id="disable-button-checkbox" 
                type="checkbox"
                defaultChecked = {disabled}
                onChange = {(e) => setDisabled(e.target.checked)}
            />
            <label title="lable1" htmlFor="disable-button-checkbox">Disable Button</label>
        </div>
    )
}
