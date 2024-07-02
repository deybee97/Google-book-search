import React from 'react';

interface BookDetailProps {
  book: any;
  onClose: () => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, onClose }) => {
  const { volumeInfo } = book;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full max-h-screen overflow-auto">
        <button onClick={onClose} className="text-red-500 dark:text-red-300 float-right">Close</button> 
        <img
          src={volumeInfo.imageLinks?.thumbnail}
          alt={volumeInfo.title}
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{volumeInfo.title}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{volumeInfo.authors?.join(', ')}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{volumeInfo.publishedDate}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{volumeInfo.publisher}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{volumeInfo.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
