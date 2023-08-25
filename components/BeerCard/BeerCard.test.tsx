import React from 'react';
import { render, screen } from '@testing-library/react';
import BeerCard from './BeerCard';
import '@testing-library/jest-dom';

const mockBeer = {
  id: 1,
  name: 'Test Beer',
  tagline: 'Test Tagline',
  image_url: '/test-image.png',
  ebc: 20,
  abv: 5.0,
  ibu: 30,
};

describe('BeerCard', () => {
  it('renders the beer card correctly', () => {
    render(<BeerCard beer={mockBeer} />);

    expect(screen.getByText('Test Beer')).toBeInTheDocument();
    expect(screen.getByText('Test Tagline')).toBeInTheDocument();
    expect(screen.getByAltText('beer-image')).toBeInTheDocument();
    expect(screen.getByText('20 EBC')).toBeInTheDocument();
    expect(screen.getByText('5 ABV')).toBeInTheDocument();
    expect(screen.getByText('30 IBU')).toBeInTheDocument();
  });
});
