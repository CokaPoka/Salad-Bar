import React, { useState } from 'react';
import './AllIngredients.css'
import Filter from './Filter/Filter'
import { Link } from 'react-router-dom';
import Sort from './Sort/Sort';
import IngredientList from './IngredientList/IngredientList';
import BasketDrawer from './BasketDrawer/BasketDrawer';
import BackdropBasket from './BackdropBasket/BackdropBasket';

const AllIngredients = ({ ingredients, handleSearch, sort, length, handleAddCart, cartItems, handleRemoveFromCart }) => {
    const [basketDrawerOpen, setBasketDrawerOpen] = useState(false);

    const handleBtnBasketClick = () => {
        setBasketDrawerOpen(!basketDrawerOpen)
    }
    const backdropClickHandler = () => {
        setBasketDrawerOpen(false);
    }

    let backdrop;
    if (basketDrawerOpen===true) {
        backdrop = <BackdropBasket click={backdropClickHandler} />
    }

    return (
        <div className='ingredient-wrapper'>
            <div className='ingredient-container'>
                <div>
                    <h1>ingredients ({ingredients.length})</h1>
                    <div className="ingredient-func-control">
                        <div className='filter-container'>
                            <Filter handleSearch={handleSearch} />
                            <Sort sort={sort} />
                        </div>
                        <div className="ingrediant-btn">
                            <button className='btn-basket' onClick={()=> handleBtnBasketClick() }>basket({cartItems.length})</button>
                            <BasketDrawer show={basketDrawerOpen} cartItems2={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
                            {backdrop}
                            <Link to="/saladmaker" className="btn-make-salad">make salad</Link>
                        </div>
                    </div>
                </div>
                <div className='ingrediant-control'>
                    <IngredientList ingredients={ingredients} length={length} handleAddCart={handleAddCart} />
                    <div className="title-container">
                        <h3 className="ingrediant-title">choose ingredients</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllIngredients