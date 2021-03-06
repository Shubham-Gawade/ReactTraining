import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('check the link text', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement.textContent).toBe("Learn React");
});
