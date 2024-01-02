import React from "react"

function Image(props) {
    return (
        <img src="https://www.amazingczechia.com/wp-content/uploads/2017/05/czechia-brno-01.jpg" alt="Brno scenery" 
            style={{width: props.width}}
        />
    )
}

export default Image