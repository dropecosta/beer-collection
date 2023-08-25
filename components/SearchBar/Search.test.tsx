import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders the SearchBar component with the correct placeholder and value', () => {
    const searchTerm = 'Test Beer';
    const handleInput = jest.fn();

    render(<SearchBar searchTerm={searchTerm} handleInput={handleInput} />);
    
    const inputElement = screen.getByPlaceholderText('Search for your beer...');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(searchTerm);
  });
});
