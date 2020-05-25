import React from 'react'
import './BasketDrawer.css'

const BasketDrawer = ({ cartItems2, show, handleRemoveFromCart }) => {
    let basketClasses = 'basket-drawer';
    console.log(cartItems2.length);


    if (show) {
        basketClasses = 'basket-drawer open';
    }

    return (
        <div className={basketClasses}>
            <div>
                <ul>
                    {cartItems2.length === 0 ? <div style={{ textAlign: "center" }}><h3>basket is empty</h3><p>add ingredients</p></div> :
                        <div style={{ display: "flex", justifyContent:"center" ,alignItems: "center", padding: "5px", width:"100%" }}>you have {cartItems2.length}
                            {cartItems2.length === 1 ? <p style={{ padding: "3px", color: "black" }}> ingredient</p> : <p style={{ padding: "3px", color:"black" }}> ingredients</p>} in basket
                        </div>}
                    {cartItems2.map(item =>
                        <li key={item._id} style={{ display: "flex", alignItems: "center", padding: "2px" }}>
                            <div style={{ padding: "5px" }}>
                                <b>{item.name}</b>
                            </div>
                            <button className="remove-btn" onClick={(e) => { handleRemoveFromCart(e, item) }}>x</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default BasketDrawer