import React from "react";
import './filterlist.css';
interface FiltersListProps {
  filterByABV: () => void;
  filterByIbu: () => void;
  className?: string;
}

const FiltersList: React.FC<FiltersListProps> = ({
  filterByABV,
  filterByIbu,
}) => {
  return (
    <div className="xl:flex-col">
      <p className="filter__title">Filter Beers by:</p>
      <div className="filters__list">
        <div className="filter__options">
          <input onClick={filterByABV} type="checkbox" id="abv" name="abv" />
          <label className="filter__label" htmlFor="abv">
            High Alcohol (ABV &rsaquo; 6.0%)
          </label>
        </div>
        <div className="filter__options">
          <input onClick={filterByIbu} type="checkbox" id="ibu" name="ibu" />
          <label className="filter__label" htmlFor="ibu">
            Bitterness (ibu &lsaquo; 50)
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltersList;
