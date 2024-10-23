import './App.css';
import Navbar from './components/Navbar';
import Smartwatches from './pages/Smartwatches';
import Footer from './components/Footer'

import Main from './pages/Main';

import Login from './pages/signinout/login';
import {  Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/product/Products';


const App = () => {
  return (
    <div className="App">
      {/* it will show in home page */}
      <Navbar />
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/services' element={<Services />} />
      <Route path='/watches' element={<Smartwatches />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />


      </Routes>

      {/* it will show in home page */}
      <Footer />
    </div>
  )
}

export default App



