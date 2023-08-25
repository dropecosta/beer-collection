import React from 'react';
import { render, waitFor, act  } from '@testing-library/react';
import AddBeerForm from './AddBeerForm';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

interface BeerDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    onAddBeer: (newBeer: any) => void;
  }

describe('AddBeerForm', () => {
  const mockProps: BeerDetailsProps = {
    isOpen: true,
    closeModal: jest.fn(),
    onAddBeer: jest.fn(),
  };

  it('renders the form correctly', async () => {
    const { getByText, getByLabelText } = render(<AddBeerForm {...mockProps} />);
    
    expect(getByText('Add a New Beer')).toBeInTheDocument();
    expect(getByLabelText('Tagline:')).toBeInTheDocument();
    expect(getByLabelText('EBC:')).toBeInTheDocument();
    expect(getByLabelText('EBC:')).toBeInTheDocument();
    expect(getByLabelText('ABV:')).toBeInTheDocument();
    expect(getByLabelText('IBU:')).toBeInTheDocument();
    expect(getByText('Add Beer')).toBeInTheDocument();
  });
});
