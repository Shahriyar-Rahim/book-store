import { useEffect } from "react";
import { useBooks } from "../../components/BookContext";
import BookGrid from "./BookGrid";
import CategoryNav from "./CategoryNav";
import SortBooks from "./SortBooks";
import Pagination from "./Pagination";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const ShopPage = () => {
    const {
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
    } = useBooks();

    const categories = ["All Collections", "Fiction", "Adventure", "Romance", "Historical", "Dystopian", "Non-Fiction"]

    useEffect(() => {
        fetchBooks();
    }, [filters, fetchBooks]);

    const handleCategoryChanges = (category) => {
        updateFilters({
            genre: category === "All Collections" ? '' : category,
            page: 1,
        })
    }

    const handleSortChange = (sortConfig) => {
        updateFilters({
            sortBy: sortConfig.sortBy,
            order: sortConfig.order,
            page: 1,
        })
    }

    const handlePageChange = (newPage) => {
        updateFilters({
            page: newPage
        })
    }


    const handleDeleteBook = async (id) => {
        try {
            console.log("Book deleted", id);
        await axios.delete(`${baseUrl}/books/${id}`);
        alert("Book deleted successfully");
        fetchBooks(); //for refetching
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }



    // console.log(books)
    return (
        <div className='section-container py-12 min-h-screen'>

            {/* searching and sorting */}
            <div className="flex items-center justify-between flex-wrap border-b border-gray-200 pb-4">
                <div>
                    <CategoryNav
                    activeCategory={filters.genre || "All Collections"}
                    categories={categories} 
                    onCategoryChange={handleCategoryChanges}
                    />
                </div>

                <div className=" py-4 flex justify-end">
                    <SortBooks 
                    currentSort={{
                        sortBy: filters.sortBy,
                        order: filters.order,
                    }}


                    onSortChange={handleSortChange}
                    />
                </div>
            </div>

            {/* result summary */}

            <div className=" py-4 text-gray-600 px-4">
                Showing {pagination.totalBooks > 0 ? (pagination.currentPage -1) * filters.limit + 1 : 0} - <span>{Math.min(pagination.currentPage * filters.limit, pagination.totalBooks) }</span> of <span>{pagination.totalBooks}</span> Books 
            </div>

            {/* books card */}
           <div className=" py-8 md:px-4">
             <BookGrid books={books} loading={loading} error={error} onDeleteBook={handleDeleteBook} />
           </div>

           {/* pagination */}
           {
            pagination.totalPages > 1 && <Pagination 
                totalPages = {pagination.totalPages}
                currentPage = { pagination.currentPage }
                onPageChange = {handlePageChange}
            />
           }
        </div>
    )
}

export default ShopPage