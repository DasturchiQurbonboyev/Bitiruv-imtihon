import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './page/home/Home'
import About from './page/about/About'
import BlogPage from './page/blog-page/BlogPage'
import KatalogPage from './page/katalog-page/KatalogPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/katalog' element={<KatalogPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
