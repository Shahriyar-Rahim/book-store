import axios from "axios"
import { useForm } from "react-hook-form"
import { baseUrl } from "../../utils/baseUrl"

const AddBook = () => {
     const {
        register,
        handleSubmit,
      } = useForm()

      const onSubmit = async (data) => {

        const price = parseFloat(data.price);
        data.price = price;
        
        try {
            // const response = await axios.post(`${baseUrl}/books`, data);
            console.log(response.data);
            // alert("Book created successfully");
            
        } catch (error) {
            // alert(error.message);
            alert("Upload button is deactivatd")
        }
    }
    

  return (
     <div className="section-container py-8">
      <h1 className="text-3xl font-bold mb-4">Add A New Book</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-5xl">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            {...register('title')}
            placeholder="Book Title"
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            {...register('author')}
            placeholder="Book Author"
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Published Year</label>
          <input
            type="number"
            {...register('publishedYear')}
            placeholder="Published Year"
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Genre</label>
          <input
            type="text"
            {...register('genre')}
            placeholder="Genre"
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            step="0.01"
            {...register('price')}
            placeholder="Price"
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register('description')}
            placeholder="Description"
            rows={4}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            {...register('imageUrl')}
            placeholder="Image URL"
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
        >
          Upload Now
        </button>
      </form>
    </div>
  )
}

export default AddBook