import React from 'react'

function Input({name, placeholder, change}) {
    return (
        <input
            type="text" 
            name={name}
            placeholder={placeholder}
            onChange={change}
        />
    )
}

export default Input