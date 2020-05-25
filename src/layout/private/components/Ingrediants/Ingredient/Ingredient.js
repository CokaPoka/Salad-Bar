import React from 'react'
import './Ingredient.css'
import { deleteIngredient} from '../../../../../Service/service'

const Ingredient = ({ ingredient, handleAddCart }) => {
    
    return (
        <div className='ingredient-item'>
            <button className="btn-add" onClick={(e)=> handleAddCart(e,ingredient)}>Add</button>
            <img src={ingredient.avatar} alt='item-img' className='item-img'></img>
            <div className='item-desc'>
                <h3>{ingredient.name}</h3>
                <p>number of calories: {ingredient.calories}</p>
            </div>
            <div className='item-tag'>
                <p>{ingredient.tag}</p>
            </div>
            <div className="remove-item">
                <input type="submit" className="remove-btn" value="X" onClick={()=>{
                    deleteIngredient(ingredient._id).then((res) => {
                        console.log(res.data);
                        window.location.reload()
                    }); 
                }}></input>
            </div>
        </div>
    )
}

export default Ingredient