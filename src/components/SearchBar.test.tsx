import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search bar', () => {
  render(<SearchBar onSearch={() => {}} />);
  const inputElement = screen.getByPlaceholderText(/search for books/i);
  expect(inputElement).toBeInTheDocument();
});

test('calls onSearch when search button is clicked', () => {
  const onSearchMock = jest.fn();
  render(<SearchBar onSearch={onSearchMock} />);
  const inputElement = screen.getByPlaceholderText(/search for books/i);
  const buttonElement = screen.getByText(/search/i);

  fireEvent.change(inputElement, { target: { value: 'Harry Potter' } });
  fireEvent.click(buttonElement);

  expect(onSearchMock).toHaveBeenCalledWith('Harry Potter');
});
