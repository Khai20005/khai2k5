import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Following from './pages/Following/Following.jsx';
import ProductDetail from './Component/Product/ProductDetail.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Introduct from './Component/Introduct/Introduct.jsx';
import { CartProvider } from './Component/Product/CartContext.jsx';
import {CartProviderWine} from './Component/ProductcardWine/CardContextWine.jsx';  
import CartPage from './Component/Product/CartPage.jsx';
import MixedWine from './Component/ProductcardWine/MixedWine.jsx';
import ForeignWine from './Component/ProductcardWine/ForeignWine.jsx';
import Wineforpeace from './Component/ProductcardWine/Wineforpeace.jsx';
import VolkaWine from './Component/ProductcardWine/VolkaWine.jsx';
import ImportedWine from './Component/ProductcardWine/ImportedWine.jsx';
import SpicalriceWine from './Component/ProductcardWine/SpicalriceWine.jsx';
import BestsellerWine from './Component/ProductcardWine/BestsellerWine.jsx';
import NewarivalWine from './Component/ProductcardWine/NewarivalWine.jsx';
import StoreWine from './Component/ProductcardWine/StoreWine.jsx';
import ThroughWine from './Component/ProductcardWine/ThroughWine.jsx';
import Contact from './Component/Contact/Contact.jsx';
import ProductWine from './Component/ProductcardWine/ProductWine.jsx';
import ProductDetailWine from './Component/ProductcardWine/ProductDetailWine.jsx';
import AddToCardModal from './Component/ProductcardWine/AddtocardModal.jsx';



function App() {
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [cartItems, setCartItems] = useState([]); // Giỏ hàng
  // const [quantity, setQuantity] = useState(1); // Số lượng sản phẩm 
  return (

    <CartProvider>
      <Routes>
        <Route path="/" element={<Following />} />
        <Route path="/gioithieu" element={<>
          <Navbar />
          <Introduct />
          <Footer />
        </>} />
        <Route path="/login" element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        } />
        <Route path='/register' element={
          <>
            <Navbar />
            <Register />
            <Footer />
          </>
        } />

        <Route path='/product/:id' element={<>
          <Navbar />
          <ProductDetail />
        </>} />

        <Route path='/cart' element={<>
          <Navbar />
          <CartPage />
          <Footer />
        </>} />

        <Route
          path='/sanpham' element={<>
            <Navbar />
            <ProductWine />
            <Footer />
          </>}
        />

        <Route path='/ruou_pha' element={<>
          <Navbar />
          <MixedWine />
          <Footer />
        </>} />
        <Route path='/ruou_ngoai' element={
          <>
            <Navbar />
            <ForeignWine />
            <Footer />
          </>} />

        <Route path='/ruou_tri_an' element={<>
          <Navbar />
          <Wineforpeace />
          <Footer />
        </>} />
        <Route path='/ruou_volka' element={<>
          <Navbar />
          <VolkaWine />
          <Footer />
        </>} />

        <Route path='/ruou_vang_nhap_khau' element={<>
          <Navbar />
          <ImportedWine />
          <Footer />
        </>} />

        <Route path='/gio_qua_bieu' element={
          <>
            <Navbar />
            <SpicalriceWine />
            <Footer />
          </>
        } />

        <Route path='/san_pham_ban_chay' element={<>
          <Navbar />
          <BestsellerWine />
          <Footer />
        </>} />

        <Route path='/hang_moi_ve' element={<>
          <Navbar />
          <NewarivalWine />
          <Footer />
        </>} />

        <Route path='/hang_sap_ve' element={<>
          <Navbar />
          <ThroughWine />
          <Footer />
        </>} />

        <Route path='/san_pham_gia_uu_dai' element={<>
          <Navbar />
          <StoreWine />
          <Footer />
        </>} />

        <Route path='/lienhe' element={<>
          <Navbar />
          <Contact />
          <Footer />
        </>} />

        <Route path='/product/:id' element={<><ProductDetailWine /></>} />
          <Route path='/add-to-cart' element={<><AddToCardModal /></>} />

        <Route path='/footer' element={<Footer />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
