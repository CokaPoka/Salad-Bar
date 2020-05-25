import React from 'react';

const Filter = ({ handleSearch }) => {
    return (
        <div className="filter-control">
            <div className="search">
                <input type="text" placeholder="search by name" className="addingredient-input" onInput={(e) => { handleSearch(e) }} ></input>
            </div>
        </div>
    )

}

export default Filter