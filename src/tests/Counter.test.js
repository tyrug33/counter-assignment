// Import necessary React Testing Library helpers
// Import the Counter component

// followed example from App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component

  // followed example from App.test.js
  render(<Counter />);
});

test('renders counter message', () => {
  // Test if the Counter message renders

  // followed example from App.test.js
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Test if the initial count is 0

  // gets the value of the count variable
  const countValue = screen.getByTestId('count');
  // compares the value to zero
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Test if clicking "+" increments the count

  // create variable for count value
  const countValue = screen.getByTestId('count');
  // create variable so that the increment button can be clicked
  const incrementButton = screen.getByText('+');

  // check 3 times if the correct value is given after clicking the button
  fireEvent.click(incrementButton);
  expect(countValue).toHaveTextContent('1');
  fireEvent.click(incrementButton);
  expect(countValue).toHaveTextContent('2');
  fireEvent.click(incrementButton);
  expect(countValue).toHaveTextContent('3');
});

test('clicking - decrements the count', () => {
  // Test if clicking "-" decrements the count

  // create variable for count value
  const countValue = screen.getByTestId('count');
  // create variable so that the decrement button can be clicked
  const decrementButton = screen.getByText('-');

  // check 3 times if the correct value is given after clicking the button
  fireEvent.click(decrementButton);
  expect(countValue).toHaveTextContent('-1');
  fireEvent.click(decrementButton);
  expect(countValue).toHaveTextContent('-2');
  fireEvent.click(decrementButton);
  expect(countValue).toHaveTextContent('-3');
});
