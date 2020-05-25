import React, { useState, useEffect } from 'react'
import { getSalad } from '../../../../Service/service';
import SaladList from './SaladList/SaladList';
import './SaladPreview.css'
import SaladDetails from './SaladDetails/SaladDetails';



const SaladsPreview = () => {
    const [salads, setSalads] = useState([]);
    const [details, setDetails] = useState({})

    useEffect(() => {
        getSalad().then(res => res.data.salads)
            .then(data => {
                setSalads(data);
            })
    }, [salads]);

    const handleSaladDetails = (e, salad) => {
        setDetails({ ...salad });
    }

    const handleClickColseDetails = (e) => {
        setDetails({})
    }

    function isEmpty(details) {
        for (var key in details) {
            if (details.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    return (
        <div className='ingredient-wrapper'>
            <div className='ingredient-container'>
                <div className="salad-container">
                    <SaladList salads={salads} handleSaladDetails={handleSaladDetails} handleClickColseDetails={handleClickColseDetails} />
                    <div className="salad-preview-container">
                        {isEmpty(details) ? <h1 style={{fontSize:"40px", fontWeight:"bolder"}}>salad preview</h1> :
                            <SaladDetails details={details} handleClickColseDetails={handleClickColseDetails} />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SaladsPreview