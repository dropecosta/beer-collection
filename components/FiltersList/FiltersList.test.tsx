import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FiltersList from './FiltersList';

describe('FiltersList', () => {
  it('renders the filter options correctly', () => {
    const filterByABV = jest.fn();
    const filterByIbu = jest.fn();

    render(<FiltersList filterByABV={filterByABV} filterByIbu={filterByIbu} />);

    expect(screen.getByText('Filter Beers by:')).toBeInTheDocument();
    expect(screen.getByText('High Alcohol (ABV › 6.0%)')).toBeInTheDocument();
  });
});

