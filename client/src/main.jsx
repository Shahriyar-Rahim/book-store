import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import ShopPage from './pages/Shop/ShopPage.jsx';
import EditBook from './pages/Edit/EditBook.jsx';
import BookDetails from './pages/bookDetails/BookDetails.jsx';
import AddBook from './pages/add book/AddBook.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route path='/' element={<Home />} />
        <Route path='/books' element={<ShopPage />} />
        <Route path='/ebooks' element={<h1>Ebooks</h1>} />
        <Route path='/books/add' element={<AddBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/:id' element={<BookDetails />} />

      </Route>
    </Routes>
  </BrowserRouter>,
)
