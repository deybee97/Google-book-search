import React from 'react';

interface BookItemProps {
  book: any;
  onSelectBook: (book: any) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onSelectBook }) => {
  const { volumeInfo } = book;
  return (
    <div
      className="border p-4 rounded-md shadow hover:shadow-lg transition cursor-pointer bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
      onClick={() => onSelectBook(book)}
    >
      <img
        src={volumeInfo.imageLinks?.thumbnail}
        alt={volumeInfo.title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{volumeInfo.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{volumeInfo.authors?.join(', ')}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{volumeInfo.publishedDate}</p>
    </div>
  );
};

export default BookItem;
