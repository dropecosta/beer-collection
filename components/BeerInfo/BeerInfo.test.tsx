import React from 'react';
import { render, screen } from '@testing-library/react';
import BeerInfo from './BeerInfo';

describe('BeerInfo', () => {
  const mockBeer = {
    name: 'Test Beer',
    tagline: 'Test Tagline',
    description: 'Test Description',
    abv: 5.0,
    ibu: 30,
    ebc: 20,
    food_pairing: ['Food 1', 'Food 2', 'Food 3'],
  };

  it('renders the BeerInfo component correctly', () => {
    render(<BeerInfo beer={mockBeer} />);

    expect(screen.getByText('Test Beer')).toBeInTheDocument();
    expect(screen.getByText('Test Tagline')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('5 ABV')).toBeInTheDocument();
    expect(screen.getByText('30 IBU')).toBeInTheDocument();
    expect(screen.getByText('20 EBC')).toBeInTheDocument();
    expect(screen.getByText('Food 1')).toBeInTheDocument();
    expect(screen.getByText('Food 2')).toBeInTheDocument();
    expect(screen.getByText('Food 3')).toBeInTheDocument();
  });
});