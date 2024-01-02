import React from "react"

function GoodsCard(props) {
    return (
        <div style={
            {
                width: '350px',
                height: '400px',
                paddingTop: '10px',
                marginLeft: '10px',
                marginTop: '10px',
                float: "left",
                fontSize: 'large',
                textAlign: 'center',
                fontWeight: 'bold',
                border: '1px solid black',
                borderRadius: '5%'
            }
        }
        >
            <img src={props.src} alt="Some groceries" style={{width: '250px'}}></img>
            <p>{props.children}</p>
            <p style={{color: 'green'}}>Price: {props.price}</p>
        </div>
    )
}

export default GoodsCard