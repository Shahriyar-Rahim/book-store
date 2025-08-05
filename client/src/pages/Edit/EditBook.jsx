import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useBooks } from '../../components/BookContext';
import { useForm } from "react-hook-form"
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';

const EditBook = () => {
    const { id } = useParams();
    // console.log(id)

     const {
    register,
    handleSubmit,
    setValue,
  } = useForm()


    const { currentBook, fetchBookDetails, updateCurrentBook} = useBooks();

    useEffect(() => {
        fetchBookDetails(id);
    }, [id, fetchBookDetails])


    useEffect(() => {
        if(currentBook) {
            setValue('title', currentBook.title);
            setValue('author', currentBook.author);
            setValue('publishedYear', currentBook.publishedYear);
            setValue('genre', currentBook.genre);
            setValue('price', currentBook.price);
            setValue('imageUrl', currentBook.imageUrl);
            setValue('description', currentBook.description);
        }
    }, [currentBook, setValue])

    const onSubmit = async (data) => {
        const price = parseFloat(data.price);
        data.price = price;

        try {
            const response = await axios.patch(`${baseUrl}/books/${id}`, data);
            if(response.data.acknowledged) {
                alert("Book updated successfully");
            }
        } catch (error) {
            console.error("Error updating book:", error.message);
            alert(error.message);
        }
    }
    
  return (
      <div className="section-container py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-5xl">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            {...register('title')}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            {...register('author')}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Published Year</label>
          <input
            type="number"
            {...register('publishedYear')}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Genre</label>
          <input
            type="text"
            {...register('genre')}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            step="0.01"
            {...register('price')}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register('description')}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            {...register('imageUrl')}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditBook