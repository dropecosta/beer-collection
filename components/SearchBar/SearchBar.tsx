import React from 'react';
import './searchbar.css';

interface SearchBarProps {
    searchTerm: string;
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = (props: any) => {

    const {searchTerm, handleInput} = props;

    return (
        <div className='searchbar'>
            <input className='searchbar__input' type="text" value={searchTerm} onChange={handleInput} placeholder="Search for your beer..."/>
        </div>
    )
}

export default SearchBar