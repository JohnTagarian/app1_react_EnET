import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the router navigation links', () => {
  window.history.pushState({}, '', '/products');
  render(<App />);
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument();
});

test('renders the products table at /products', () => {
  window.history.pushState({}, '', '/products');
  render(<App />);
  expect(screen.getByRole('table')).toBeInTheDocument();
  expect(screen.getByText('React Native')).toBeInTheDocument();
});
