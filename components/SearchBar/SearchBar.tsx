import React from 'react';

const SearchBar = (props: any) => {

    const {searchTerm, handleInput} = props;

    return (
        <div className='searchbar'>
            <input className='searchbar__input' type="text" value={searchTerm} onChange={handleInput} placeholder="Search for your beer..."/>
        </div>
    )
}

export default SearchBar