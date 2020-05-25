import React, { Component } from 'react';
import './BasketIng.css'

class BasketIng extends Component {
    render() {
        const cartItems = this.props.cartItems

        return (
            <div className="basket-ing-container">
                <div style={{ height: '100%' }}>
                    {cartItems.length === 0 ? <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}><h3>basket is empty</h3><p> please add ingredients</p></div> :
                        <div style={{ textAlign: "center", paddings: "15px" }}><h3>you have {cartItems.length}
                            {cartItems.length === 1 ? <span> ingredient</span> : <span> ingredients</span>} in basket</h3>
                        </div>}
                    {cartItems.length > 0 &&
                        <div className="basket-control" >
                        <ul style={{ display: "flex", alignItems: "center", flexDirection: "column", minWidth: "400px" }}>
                                {cartItems.map(item =>
                                    <li key={item._id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", padding: "5px", paddingRight: "40px", minWidth: "400px" }}>
                                        <div style={{ display: "flex", alignItems: "center", width: "80%", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", margin: "0 20px", alignItems: "center" }}>
                                                <img src={item.avatar} alt="img-item" className='item-img' style={{ margin: "0 40px" }}></img>
                                                <div>
                                                    <b>{item.name}</b>
                                                    <p>calories: {item.calories}</p>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: "center", width:"110px" }}>
                                                <p>{item.tag}</p>
                                            </div>
                                        </div>
                                        <button className="remove-btn" onClick={(e) => { this.props.handleRemoveFromCart(e, item) }}>x</button>
                                    </li>)}
                            </ul>
                        </div>}
                </div>
            </div>
        )
    }
}

export default BasketIng