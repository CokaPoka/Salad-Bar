import React, { useState } from 'react';
import './AddIngredient.css'
import { setIngredient } from '../../../../Service/service';
import ingredientsImg from '../../../../img/ingredients.jpg'
import { Link } from 'react-router-dom';

const AddIngrediant = ({ ingredients }) => {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [avatar, setAvatar] = useState('');
    const [tag, setTag] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        setIngredient(name, avatar, tag, calories).then((res) => {
            console.log(res.data.ingredients);
            window.location.reload()
        });
        e.target.reset();
    }

    return (
        <div className='ingredient-wrapper'>
            <div className='ingredient-container'>
                <div className='ingredient-container-control'>
                    <div className='ingredient-container-form'>
                        <div className="addIngredient-title-container">
                            <h1 className='addIngredient-title'>add new ingredient</h1>
                        </div>
                        <form className='addIngrediant-form' onSubmit={handleClick}>
                            <div className="input-container-control">
                                <div className="addIngredient-name-container">
                                    <input type='text' className="addingredient-input name" placeholder='name' required onInput={e => {
                                        setName(e.target.value)
                                    }} ></input>
                                </div>
                                <div className="addIngredient-calories-container">
                                    <input type='text' className="addingredient-input calories" placeholder='calories' required onInput={e => {
                                        setCalories(e.target.value)
                                    }}></input>
                                </div>
                            </div>
                            <div style={{ width: "100%" }}>
                                <input type='text' className="addingredient-input img-url" placeholder='image URL' required onInput={e => {
                                    setAvatar(e.target.value)
                                }} ></input>
                                <input type='text' className="addingredient-input tag" placeholder='add tags...' required onInput={e => {
                                    setTag(e.target.value)
                                }} ></input>
                            </div>
                            <div className="addIngredient-form-btns">
                                <input type='submit' className='btn-submit' value='add Ingredient'></input>
                                <div className="all-ing-btn-container">
                                    <Link to="/ingredients" className="all-ing-btn" style={{ padding: "8px 15px" }}>all ingredients ({ingredients.length})</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='ingrediant-container-right'>
                        <img className='ingrediant-img' src={ingredientsImg} alt='ingredient-img' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddIngrediant