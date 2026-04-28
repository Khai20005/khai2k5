import React, { useState } from 'react'
import './BeerCategory.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { CartContext } from '../Product/CartContext'; // Adjust the import path as necessary
import { useContext } from 'react';
function formatCurrency(value) {
    return value.toLocaleString('vi-VN') + '₫';
}



export default function BeerCategory() {
    const [products, setProducts] = React.useState([]);
    const [hovered, setHovered] = useState(false);

    const { addToCart } = useContext(CartContext);

    const product =
    {
        id: 1,
        name: "Rượu Remy Martin CLUB",
        price: 1230000,
        image:
            "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/ruou24.jpg?v=1445851659983",
    }
    const LuxuryProduct = {
        id: 2,
        name: "Rượu Luxury Altair Red",
        price: 2338000,
        image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/3.png?v=1445851165587"
    }

    const JohnnieProduct = {
        id: 3,
        name: "Rượu Johnnie Walker Blue",
        price: 729000,
        image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/31.png?v=1445850758393"
    }

    const CaliforniaProduct = {
        id: 4,
        name: "Rượu California Muscat",
        price: 2000000,
        image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/19.png?v=1445850433743"
    }
    const CrossProduct = {
        id: 5,
        name: "Rượu Cross Sauvignon",
        price: 1500000,
        image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/53-min.png?v=1469181800943"
    }




    // const fetchProducts = [
    //     {
    //         id: 1,
    //         name: "Rượu Remy Martin CLUB",
    //         price: 1230000,
    //         oldPrice: 1340000,
    //         discount: 8,
    //         image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/ruou24.jpg?v=1445851659983"
    //     },
    //     {
    //         id: 2,
    //         name: "Rượu Luxury Altair Red",
    //         price: 2338000,
    //         oldPrice: null,
    //         discount: null,
    //         image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/3.png?v=1445851165587"
    //     },
    //     {
    //         id: 3,
    //         name: "Rượu Johnnie Walker Blue",
    //         price: 729000,
    //         oldPrice: 870000,
    //         discount: 16,
    //         image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/31.png?v=1445850758393"
    //     },
    //     {
    //         id: 4,
    //         name: "Rượu California Muscat",
    //         price: 2000000,
    //         oldPrice: null,
    //         discount: null,
    //         image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/19.png?v=1445850433743"
    //     },
    //     {
    //         id: 5,
    //         name: "Rượu Cross Sauvignon",
    //         price: 1500000,
    //         oldPrice: null,
    //         discount: null,
    //         image: "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/53-min.png?v=1469181800943"
    //     }
    // ]


    // useEffect(() => {
    //     fetch('https://api.example.com/products') // Replace with your API endpoint     
    //         .then(response => response.json())
    //         .then(data => setProducts(data))
    //     // .catch(error => console.error('Error fetching products:', error));
    // }, []);
    return (
        <div>
            <div className="container">
                <aside className="sidebar">
                    <h3>DANH MỤC BIA</h3>
                    <ul>
                        <li><Link to="/products/beer-mix">Rượu pha (9)</Link></li>
                        <li><Link to="/products/foreign-wine">Rượu ngoại (8)</Link></li>
                        <li><Link to="/products/appreciation-wine">Rượu tri ân (20)</Link></li>
                        <li><Link to="/products/vodka">Rượu Vodka (9)</Link></li>
                        <li><Link to="/products/gift-basket">Giỏ quà biếu (9)</Link></li>
                        <li><Link to="/products/imported-wine">Rượu vang nhập khẩu (9)</Link></li>
                        <li><Link to="/products/coming-soon">Hàng sắp về (9)</Link></li>
                        <li><Link to="/products/new-arrivals">Hàng mới về (9)</Link></li>
                        <li><Link to="/products/best-sellers">Sản phẩm bán chạy (9)</Link></li>
                        <li><Link to="/products/special-offers">Sản phẩm giá ưu đãi (9)</Link></li>
                    </ul>
                </aside>

                <div className="main-content">
                    <div className="home-banner" style={
                        { textAlign: 'center', padding: '20px', fontSize: '24px', color: '#333', marginTop: '40px', fontWeight: 'bold', backgroundColor: '#f8f8f8' }
                    }>
                        <h2 >SẢN PHẨM BÁN CHẠY</h2>
                        <div>
                            ❦
                        </div>
                    </div>
                    <div className="product-grid">
                        <div className="product-card">
                            <Link to="/ruou-remy-martin-club" className="product-link">
                                <img
                                    src={product.image}
                                    alt="Banner"
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <p>{product.name}</p>
                            </Link>
                            <p className="product-price">
                                {product.price.toLocaleString("vi-VN")}đ
                            </p>
                            <button className="buy-btn" onClick={() => addToCart(product)}>
                                Mua hàng
                            </button>
                        </div>

                        <div className="product-card">
                            <Link to="/ruou-luxury-altair-red" className="product-link">
                                <img
                                    src={LuxuryProduct.image}
                                    alt='Banner'
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <p>{LuxuryProduct.name}</p>
                            </Link>
                            <p>
                                {LuxuryProduct.price.toLocaleString("vi-VN")}đ
                            </p>
                            <button className='buy-btn' onClick={() => addToCart(LuxuryProduct)}>
                                Mua hàng
                            </button>
                        </div>

                        <div className="product-card">
                            <Link to="/ruou-johnnie-walker-blue" className="product-link">
                                <img
                                    src={JohnnieProduct.image}
                                    alt='Banner'
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <p>{JohnnieProduct.name}</p>
                            </Link>
                            <p>
                                {JohnnieProduct.price.toLocaleString("vi-VN")}đ
                            </p>
                            <button className='buy-btn' onClick={() => addToCart(JohnnieProduct)}>
                                Mua hàng
                            </button>
                        </div>
                        <div className="product-card">
                            <Link to="/ruou-california-muscat" className="product-link">
                                <img
                                    src={CaliforniaProduct.image}
                                    alt='Banner'
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <p>{CaliforniaProduct.name}</p>
                            </Link>
                            <p>
                                {CaliforniaProduct.price.toLocaleString("vi-VN")}đ
                            </p>
                            <button className='buy-btn' onClick={() => addToCart(CaliforniaProduct)}>
                                Mua hàng
                            </button>
                        </div>
                        <div className="product-card">
                            <Link to="/ruou-cross-sauvignon" className="product-link">
                                <img
                                    src={CrossProduct.image}
                                    alt='Banner'
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <p>{CrossProduct.name}</p>
                            </Link>
                            <p>
                                {CrossProduct.price.toLocaleString("vi-VN")}đ
                            </p>
                            <button className='buy-btn' onClick={() => addToCart(CrossProduct)}>
                                Mua hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
