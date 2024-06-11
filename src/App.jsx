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
import Like from './page/like/Like'
import Single from './page/single/Single'
import ProductsPage from './page/products/ProductsPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartPage from './page/cart/CartPage'
import Auth from './components/auth/Auth'
import AdminPage from './page/admin/AdminPage'
import LogInPage from './page/login/LogInPage'
import NotFound from './components/not-found/NotFound'
import CreateProductPage from './page/admin/create-product/CreateProductPage'
import CreateCategoryPage from './page/admin/create-category/CreateCategoryPage'
import ManageProductPage from './page/admin/manage-product/ManageProductPage'
import ManageCategoryPage from './page/admin/manage-category/ManageCategoryPage'

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
        <Route path='/wishlist' element={<Like />} />
        <Route path='/single' element={<Single />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/' element={<Auth />} >
          <Route path='/admin' element={<AdminPage />} >
            <Route path='create-product' element={<CreateProductPage />} />
            <Route path='create-category' element={<CreateCategoryPage />} />
            <Route path='manage-product' element={<ManageProductPage />} />
            <Route path='manage-category' element={<ManageCategoryPage />} />
          </Route>
        </Route >
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
