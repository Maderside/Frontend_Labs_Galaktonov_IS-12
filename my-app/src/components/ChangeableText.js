import React, { useState } from "react"

function ChangeableText({children}) {
    const [active, setActive] = useState(0);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <span onClick={handleClick}
            style={{ backgroundColor: active ? "lightblue" : "lightgreen", 
            color: active ? "black" : "darkblue", 
            cursor: "pointer"}}>
            {children}
        </span>
    )
}

export default ChangeableText
