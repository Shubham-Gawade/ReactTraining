import { render, screen } from '@testing-library/react';
import App from './App';

test('rendered Home Link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('check the Home link text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement.textContent).toBe("Home");
});

test('Search button is rendered', () => {
  render(<App />);
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
})

test('button has text as Search', () => {
  render(<App />);
  const textOnButton = screen.getByRole("button")
  expect(textOnButton.textContent).toBe("Search");
})


test('button has text as Home', () => {
  render(<App />);
  const textOnButton = screen.getByRole("button")
  expect(textOnButton.textContent).toBe("Search");
})


test('button has text as Search', () => {
  render(<App />);
  const textOnButton = screen.getByRole("button")
  expect(textOnButton.textContent).toBe("Search");
})