import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './page/home/Home'
import About from './page/about/About'
import BlogPage from './page/blog-page/BlogPage'
import KatalogPage from './page/katalog-page/KatalogPage'
import ShippingPage from './page/shipping/ShippingPage'
import GarantPage from './page/garant/GarantPage'
import ReturnPage from './page/return/ReturnPage'
import ContactPage from './page/contact/ContactPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/katalog' element={<KatalogPage />} />
        <Route path='/shipping' element={<ShippingPage />} />
        <Route path='/garant' element={<GarantPage />} />
        <Route path='/return' element={<ReturnPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/katalog' element={<KatalogPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
