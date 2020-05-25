import React, { useState } from 'react'
import BasketIng from './BasketIng/BasketIng'
import { setSalad } from '../../../../Service/service';
import './SaladMaker.css'
import { Link, useHistory } from 'react-router-dom';

const SaladMaker = ({ cartItems, handleRemoveFromCart, removeAllIngFromBasket }) => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const history = useHistory();

    const ingredients = cartItems
    console.log(ingredients);
    
    let arrCal = [];

    cartItems.forEach(element => {
        arrCal.push(Number(element.calories))
    });

    const totalcalories = arrCal.reduce((a, c) => a + c, 0)

    const handleClick = (e) => {
        e.preventDefault();
        setSalad(name, ingredients, desc, totalcalories).then((res) => {
            console.log(res.data);
            window.location.reload()
        });
        removeAllIngFromBasket();
        history.push('/saladspreview')
        e.target.reset()
    }

    return (
        <div className='ingredient-wrapper'>
            <div className='ingredient-container'>
                <div className='salad-maker-container'>
                    <div className='salad-maker-container-left'>
                        <div className="salad-maker-button">
                            <Link to="/ingredients" className="more-ing-link">add more ingredients</Link>
                        </div>
                        <div className="salad-maker-control">
                            <h1 style={{ fontSize: "50px", fontWeight: "bolder", textAlign: "center", padding:"10px" }}>add new salad</h1>
                            <div className="basket-container-saladMaker2">
                                <BasketIng cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
                            </div>
                            <form className='salad-maker-form' onSubmit={handleClick}>
                                <p style={{ padding: "15px 10px", fontSize: "17px" }}>total number of calories: {totalcalories}</p>
                                <input type='text' className="salad-maker-input name" placeholder='name' required onInput={e => {
                                    setName(e.target.value)
                                }} ></input>
                                <textarea className="desc" name="desc" placeholder="description"
                                    rows="8" cols="33" onInput={e => {
                                        setDesc(e.target.value)
                                    }}>
                                </textarea>
                                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", margin: "5px" }}>
                                    <input type='submit' className='btn-submit' value='add salad'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="basket-container-saladMaker">
                        <BasketIng cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SaladMaker