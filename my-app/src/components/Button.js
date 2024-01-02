import React from "react"

function Button(props) {
    return (
        <button onClick={props.action}
        style={{
            width: '100px',
            fontSize: 'larger',
            backgroundColor: 'lightgoldenrodyellow'
        }}
        >{props.children}</button>
    )
}

export default Button