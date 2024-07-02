import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Pagination from './components/Pagination';
import DarkModeToggle from './components/DarkModeToggle';
import { fetchBooks } from './api/googleBooksApi';

const App: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [selectedBook, setSelectedBook] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    const data = await fetchBooks(searchQuery);
    setBooks(data.items);
    setTotalPages(Math.ceil(data.totalItems / 10));
  };

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    const data = await fetchBooks(query, (page - 1) * 10);
    setBooks(data.items);
  };

  const handleSelectBook = (book: any) => {
    setSelectedBook(book);
  };

  const handleCloseDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Google Books Search</h1>
        <DarkModeToggle />
      </div>
      <SearchBar onSearch={handleSearch} />
        <BookList books={books} onSelectBook={handleSelectBook} />
        {books.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
        {selectedBook && (
          <BookDetail book={selectedBook} onClose={handleCloseDetail} />
        )}
      </div>
    );
  };

  export default App;

