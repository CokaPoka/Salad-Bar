import React from 'react'
import './BackdropBasket.css'

const BackdropBasket = (props) => {
    return (
        <div className="backdrop-basket" onClick={props.click}></div>
    )
}

export default BackdropBasket