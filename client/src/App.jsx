import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import { BookProvider } from './components/BookContext'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BookProvider> 
      <NavBar/>
      <main className='min-h-[calc(100vh-100px)] mt-16'>
        <Outlet/>
      </main>
      <Footer />
    </BookProvider>
      
    </>
  )
}

export default App
