import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BeerContextProvider } from '@/app/context/context';
import NavBar from './Navbar';

describe('NavBar', () => {
  it('renders the navigation bar correctly', () => {
    render(
      <BeerContextProvider>
        <NavBar />
      </BeerContextProvider>
    );

    expect(screen.getByText('Beer Gallery')).toBeInTheDocument();
    expect(screen.getByText('Choose your best beer')).toBeInTheDocument();
    expect(screen.getByText('Sort Ascending')).toBeInTheDocument();
    expect(screen.getByText('Add new beer')).toBeInTheDocument();
  });

  it('toggles the sorting order when the "Sort" button is clicked', () => {
    render(
      <BeerContextProvider>
        <NavBar />
      </BeerContextProvider>
    );

    fireEvent.click(screen.getByText('Sort Ascending'));
    expect(screen.getByText('Sort Descending')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Sort Descending'));
    expect(screen.getByText('Sort Ascending')).toBeInTheDocument();
  });

});
