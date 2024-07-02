import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookItem from './BookItem';

const book = {
  volumeInfo: {
    title: 'React Testing',
    authors: ['Author 1'],
    publishedDate: '2021',
    imageLinks: {
      thumbnail: 'https://example.com/thumbnail.jpg'
    }
  }
};

describe('BookItem', () => {
  test('it renders book information', () => {
    render(<BookItem book={book} onSelectBook={jest.fn()} />);
    
    const title = screen.getByText(/react testing/i);
    const authors = screen.getByText(/author 1/i);
    const date = screen.getByText(/2021/i);
    
    expect(title).toBeInTheDocument();
    expect(authors).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  test('it calls onSelectBook when clicked', () => {
    const handleSelectBook = jest.fn();
    render(<BookItem book={book} onSelectBook={handleSelectBook} />);
    
    const bookItem = screen.getByText(/react testing/i);
    fireEvent.click(bookItem);
    
    expect(handleSelectBook).toHaveBeenCalledWith(book);
  });
});
