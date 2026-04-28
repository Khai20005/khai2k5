import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { ShoppingCart } from 'react-feather'; // Assuming you're using react-feather for icons


function Navbar() {
    const [isOpen, setIsopen] = useState(false);
    const cartCount = 0; // Replace with actual cart count logic
    
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="nav-links">
                        <h3> Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, Hà Nội ; 1900 6750 ; 9h - 21h từ thứ 2 đến thứ 7</h3>
                        <div className='nav-links-right'>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <input type="text" placeholder="Search..." />
                            <button type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="navbar-main">
                <div className='navbar-container'>
                    <Link to="/" className="container-link">Trang chủ</Link>
                    <Link to='/gioithieu' className="container-link">Giới thiệu</Link>
                    <Link to="/" className="container-link">
                        <img src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/logo.png?1753153258463' alt='logo' />
                    </Link>


                    <div className="relative group"
                        onMouseEnter={() => setIsopen(true)}
                        onMouseMove={() => setIsopen(true)}>
                        <Link to='/sanpham' className="container-link">
                            <span className='text-orange-500 font-semibold cursor-pointer'>
                                Sản phẩm
                            </span>
                            {
                                isOpen && (
                                    <div className='absolute top-full left-0 mt-2 w-56 bg-white border shadow-lg z-50'>
                                        <ul className='text-sm py-2'>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/ruou_pha">Rượu pha</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/ruou_ngoai">Rượu ngoại</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/ruou_tri_an">Rượu tri ân</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/ruou_volka">Rượu Volka</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/gio_qua_bieu">Giỏ quà biếu</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/ruou_vang_nhap_khau">Rượu vang nhập khẩu</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/hang_sap_ve">Hàng sắp về</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/hang_moi_ve">Hàng mới về</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/san_pham_ban_chay">Sản phẩm bán chạy</Link></li>
                                            <li className="px-4 py-2 hover:bg-gray-100"><Link to="/san_pham_gia_uu_dai">Sản phẩm giá ưu đãi</Link></li>
                                        </ul>
                                    </div>
                                )}
                        </Link>
                    </div>

                    <Link to='/lienhe' className="container-link">Liên hệ</Link>
                    <Link to="/cart" className="relative">
                        <ShoppingCart size={28} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-0.5">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
