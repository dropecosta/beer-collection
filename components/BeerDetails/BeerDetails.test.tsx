import React from 'react';
import { render, screen } from '@testing-library/react';
import BeerDetails from './BeerDetails';

describe('BeerDetails', () => {
  const mockBeer = {
    id: 1,
    name: 'Test Beer',
  };

  it('renders the BeerDetails component correctly', () => {
    const closeModal = jest.fn();
    const isOpen = true;

    render(<BeerDetails isOpen={isOpen} closeModal={closeModal} beer={mockBeer} />);

    expect(screen.getByText('Test Beer')).toBeInTheDocument();
    expect(screen.getByText('How likely are you to recommend this beer?')).toBeInTheDocument();
  });
});
