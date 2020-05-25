import React from 'react';
import './SaladDetails.css'

const SaladDetails = ({ details, handleClickColseDetails }) => {

    return (
        <div className="details-container">
            <div className="btn-close-container">
                <button className="btn-close" onClick={(e) => handleClickColseDetails(e)}>close</button>
            </div>
            <div className="details-info-container">
                <h1>{details.name}</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h3>total number of calories: </h3>
                    <p style={{ paddingLeft: "5px", fontSize: "20px" }}>{details.totalcalories}</p>
                </div>
                <h3>ingredients: </h3>
            </div>
            <div className="details-ingredients-container">
                {details.ingredients.map(item => <div className="details-ingredient"><img src={item.avatar} alt='item-img' className='item-img'></img>
                    <p>{item.name}</p></div>)}
            </div>
            <div className="details-desc-container">
                <h3 style={{ paddingBottom: "5px" }}>description:</h3>
                <div className="desc-container">
                    <p style={{padding:"10px"}}>{details.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SaladDetails