# BOOKCLUB.

This is a MERN stack web application for managing a bookstore. Users can view, add, edit, and delete books. The application also includes features for sorting books, viewing book details, and is fully responsive.

![Sample Image](<cover.png>)

## Live Demo

  - **Vercel URL:** https://book-store-client-chi-nine.vercel.app/

## Features

  - **View Books:** Browse through a collection of books.
  - **Add Books:** Add new books to the store with details like title, author, and price.
  - **Edit Books:** Update the information of existing books.
  - **Delete Books:** Remove books from the collection.
  - **Sort Books:** Sort books by different criteria.
  - **Responsive Design:** The application is optimized for various devices, including desktops, tablets, and mobile phones.
  - **CRUD Operations:** Full Create, Read, Update, and Delete functionality.

## Technologies Used

### Frontend

  - **React:** A JavaScript library for building user interfaces.
  - **Vite:** A build tool that provides a fast development experience.
  - **Axios:** A promise-based HTTP client for making API requests.
  - **React Router:** For handling navigation and routing within the application.
  - **Tailwind CSS:** A utility-first CSS framework for styling.
  - **React Hook Form:** For managing forms and their validation.

### Backend

  - **Node.js:** A JavaScript runtime environment.
  - **Express.js:** A web application framework for building RESTful APIs.
  - **MongoDB:** A NoSQL database for storing book data.
  - **CORS:** Middleware to enable Cross-Origin Resource Sharing.
  - **dotenv:** To load environment variables from a `.env` file.
  - **Node-cache:** A caching module for Node.js.

## Getting Started

### Prerequisites

  - Node.js installed
  - MongoDB installed or a MongoDB Atlas account

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shahriyar-Rahim/book-store.git
    cd book-store
    ```

2.  **Install backend dependencies:**

    ```bash
    cd book-management-server
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1.  **Start the backend server:**

      - Navigate to the `book-management-server` directory.
      - Create a `.env` file with your MongoDB connection string:
        ```
        MONGODB_URI = "your_mongodb_connection_string"
        ```
      - Run the development server:
        ```bash
        npm run start:dev
        ```

2.  **Start the frontend:**

      - Navigate to the `client` directory.
      - Run the development server:
        ```bash
        npm run dev
        ```

3.  Open your browser and visit `http://localhost:5173` to see the application.

## Repository Structure

```
book-store/
├── book-management-server/   # Backend (Express.js)
│   ├── index.js              # Main server file
│   ├── .env.example          # Example environment file
│   ├── package.json          # Backend dependencies
│   └── ...
└── client/                   # Frontend (React + Vite)
    ├── src/
    │   ├── components/       # Reusable React components
    │   ├── pages/            # Page components
    │   ├── App.jsx           # Main application component
    │   └── ...
    ├── public/
    ├── index.html
    └── package.json          # Frontend dependencies
```

## Contributing

Feel free to open issues or submit pull requests. Any contributions are welcome\!

## License

This project is licensed under the ISC License.