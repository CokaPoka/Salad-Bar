import React from 'react';
import Ingredient from '../Ingredient/Ingredient'

const IngredientList = ({ ingredients, handleAddCart}) => {
       
    return (     
        <div className='ingredient-list'>
            {ingredients.map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient} handleAddCart={handleAddCart} />)}
        </div>
    )
}

export default IngredientList;
