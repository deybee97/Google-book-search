import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query: string, startIndex: number = 0) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        startIndex,
        maxResults: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};


