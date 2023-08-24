import React from 'react'


const FiltersList = (props: any) => {

    const  {filterByABV, filterByPH} = props

    return (
        <div>
            <p  className="filter__title">Filter Beers by:</p>
            <div className="filters__list">
                <div className="filter__options">
                    <input onClick={filterByABV} type="checkbox" id="abv" name="abv" />
                    <label  className="filter__label" htmlFor="abv">High Alcohol (ABV &rsaquo; 6.0%)</label>
                </div>
                <div className="filter__options">
                    <input onClick={filterByPH} type="checkbox" id="ph" name="ph" />
                    <label className="filter__label" htmlFor="ph">High Acidity (pH &lsaquo; 4.0%)</label>
                </div>
            </div>
        </div>
    )
}

export default FiltersList