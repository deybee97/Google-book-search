import React from 'react';
import BookItem from './BookItem';

interface BookListProps {
  books: any[];
  onSelectBook: (book: any) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onSelectBook }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onSelectBook={onSelectBook} />
      ))}
    </div>
  );
};

export default BookList;
