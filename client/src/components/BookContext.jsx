import { createContext, use, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

const BookConext = createContext();

export const BookProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [filters, setFilters] = useState({
        page: 1,
        limit: 8,
        genre: '',
        minYear: '',
        maxYear: '',
        author: '',
        minPrice: '',
        maxPrice: '',
        sortBy: 'title',
        order: 'asc',
        search: '',
    })

    const [pagination, setPagination] = useState({
        totalBooks: 0,
        currentPage: 1,
        totalPages: 1
    })


    const fetchBooks = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const params = new URLSearchParams();
            Object.entries(filters).forEach(([key, value]) => {
                if( value !== '') {
                    params.append(key, value);
                }
            })

            const response = await axios.get(`${baseUrl}/books?${params}`);
            setBooks(response.data.books);
            setPagination({
                currentPage: response.data.currentPage,
                totalBooks: response.data.totalBooks,
                totalPages: response.data.totalPages,
            })

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    const clearCurrentBook = useCallback(() => {
        setBooks(null)
    }, []);

    const updateFilters = useCallback(async(newFilters) => {
        setFilters(prev => ({
            ...prev,
            ...newFilters,
            page: newFilters.hasOwnProperty('page') ? newFilters.page : 1,
        }))
    }, []);

    const fetchBookDetails = useCallback(async (bookId) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`${baseUrl}/books/${bookId}`);
            setCurrentBook(response.data);
            return response.data
        } catch (error) {
            setError(error.message);
            throw Error
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchBooks();
    }, [filters]);


    const value = {
        books,
        currentBook,
        loading,
        error,
        filters,
        pagination,
        fetchBooks,
        clearCurrentBook,
        updateFilters,
        fetchBookDetails,
    }
    return (
        <BookConext.Provider value={value}>
            {children}
        </BookConext.Provider>
    )
}

export const useBooks = () => {
    const context = useContext(BookConext);
    if (!context) {
        throw new Error('useBooks must be used within a BookProvider');
    }
    return context;
}