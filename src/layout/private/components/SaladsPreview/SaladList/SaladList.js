import React from 'react';
import Salad from '../Salad/Salad';


const SaladList = ({ salads, handleSaladDetails, handleClickColseDetails }) => {

    return (
        <div className='salad-list'>
            {salads.map(salad => <Salad key={salad._id} salad={salad} handleSaladDetails={handleSaladDetails} handleClickColseDetails={handleClickColseDetails}/>)}
        </div>
    )
}

export default SaladList;