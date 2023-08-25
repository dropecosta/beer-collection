import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
  it('renders the rating component with empty stars', () => {
    render(<Rating count={5} value={0} />);
    const emptyStars = screen.getAllByTestId('empty-star');
    expect(emptyStars).toHaveLength(5);
  });

  it('renders the rating component with full stars', () => {
    render(<Rating count={5} value={3} />);
    const fullStars = screen.getAllByTestId('full-star');
    expect(fullStars).toHaveLength(3);
  });

});
