import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer content correctly', () => {
    render(<Footer />);

    expect(screen.getByText('@2023 - Powered by Punk API')).toBeInTheDocument();
    
    const link = screen.getByText('Pedro Reis');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/dropecosta/');
    expect(link.closest('a')).toHaveAttribute('target', '_blank');
  });
});
