import React from 'react'
import { Link } from 'react-router-dom'
import './Winelist.css'
import { useContext, useState } from 'react'
import { CartContext } from '../Product/CartContext.jsx'


export default function Winelist() {

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



    return (
        <div>

            <div className='winelist'>
                <div className='winelist-container'>
                    <h2> Danh sách rượu</h2>
                    <ul>
                        <li><Link to='/ruou_pha'>Rượu Pha (9)</Link></li>
                        <li><Link to='/ruou_ngoai'>Rượu ngoại (8)</Link></li>
                        <li> <Link to='/ruou_tri_an'>Rượu tri ân (20)</Link></li>
                        <li><Link to='/ruou_volka'>Rượu volka (8)</Link></li>
                        <li><Link to='/gio_qua_bieu'>Giỏ quà biếu (9) </Link></li>
                        <li><Link to='/ruou_vang_nhap_khau'>Rượu vang nhập khẩu (9)</Link></li>
                        <li><Link to='/hang_sap_ve'>Hàng sắp về (8)</Link></li>
                        <li><Link to='/hang_moi_ve'>Hàng mới về (9)</Link></li>
                    </ul>
                </div>

                <div className='winelist-content'>
                    <div className="home-winelist" style={
                        { textAlign: 'center', padding: '20px', fontSize: '24px', color: '#333', marginTop: '40px', fontWeight: 'bold', backgroundColor: '#f8f8f8' }
                    }>
                        <h2>HÓT NHẤT HÔM NAY</h2>
                        <div >
                            ❦
                        </div>
                    </div>
                    <div className='product-wine-list'>
                        <div className="product-wine">
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

                        <div className="product-wine">
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

                        <div className="product-wine">
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
                        <div className="product-wine">
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
                        <div className="product-wine">
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
