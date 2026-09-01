// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenVaultDiamond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenVaultDiamond/i);
    expect(titleElement).toBeInTheDocument();
});
