import React from 'react'
import { deleteSalad } from '../../../../../Service/service';
import './Salad.css'


const Salad = ({ salad, handleSaladDetails, handleClickColseDetails }) => {
    let ingredients = salad.ingredients

    ingredients.map(item => item.name)

    return (
        <div className='salad-item'>
            <div className='salad-item-info'>
                <h3>{salad.name}</h3>
                <p>number of ingredients: {ingredients.length}</p>
            </div>
            <div className="salad-buttons">
                <div className="remove-item">
                    <input type="submit" className="remove-btn" value="X" onClick={() => {
                        deleteSalad(salad._id).then(res => res.data);
                        handleClickColseDetails()
                    }}></input>
                </div>
                <div>
                    <button className="btn-salad-details" onClick={(e) => handleSaladDetails(e, salad)} >details</button>
                </div>
            </div>
        </div>
    )
}

export default Salad