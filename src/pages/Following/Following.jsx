import React from 'react'
import Navbar from '../../Component/Navbar/Navbar.jsx'
import Home from '../../Component/Home/Home.jsx'
import Product from '../../Component/Product/Product.jsx'
import ProductDetail from '../../Component/Product/ProductDetail.jsx'
import ProducCard from '../../Component/Product/ProductCard.jsx'
import Staticimage from '../../Component/Staticimage/Staticimage.jsx'
import BeerCategory from '../../Component/BeerCategory/BeerCategory.jsx'
import CartPage from '../../Component/Product/CartPage.jsx'
import Winelist from '../../Component/Winelist/Winelist.jsx'
import Footer from '../../Component/Footer/Footer.jsx'

function Following() {
  return (
    <div>
      <Navbar />
      <Home />
      <Product />
      <Staticimage />
      <BeerCategory />
      <Winelist />
      <Footer />
    </div>
  )
}

export default Following
