import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders the button with the provided title', () => {
    const handleClick = jest.fn();
    render(<Button title="Click Me" handleClick={handleClick} />);

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls the handleClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button title="Click Me" handleClick={handleClick} />);

    fireEvent.click(screen.getByText('Click Me'));

    expect(handleClick).toHaveBeenCalled();
  });
});
