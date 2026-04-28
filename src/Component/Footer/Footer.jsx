import React, { use, useEffect } from 'react'
import { FaTwitter, FaFacebookF, FaPinterestP, FaGooglePlusG, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Footer() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", //Cuộn trượt
        })
    }


    return (
        <div>
            <div className='winelist-images'>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/thumb/medium/100/022/044/themes/895031/assets/brand1.jpg?1753153258463'
                        alt='anh'
                        className='wine-list-image'
                    />
                </Link>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/thumb/medium/100/022/044/themes/895031/assets/brand2.jpg?1753153258463'
                        alt='anh'
                        className='wine-list-image'
                    />
                </Link>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/thumb/medium/100/022/044/themes/895031/assets/brand3.jpg?1753153258463'
                        alt='anh'
                        className='wine-list-image'
                    />
                </Link>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/thumb/medium/100/022/044/themes/895031/assets/brand4.jpg?1753153258463'
                        alt='anh'
                        className='wine-list-image'
                    />
                </Link>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/thumb/medium/100/022/044/themes/895031/assets/brand5.jpg?1753153258463'
                        alt='anh'
                        className='wine-list-image'
                    />
                </Link>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/thumb/medium/100/022/044/themes/895031/assets/brand6.jpg?1753153258463'
                        alt='anh'
                        className='wine-list-image'
                    />
                </Link>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/thumb/medium/100/022/044/themes/895031/assets/brand7.jpg?1753153258463'
                        alt='anh'
                        className='wine-list-image'
                    />
                </Link>
            </div>
            <footer className="bg-white shadow-lg border-t mt-10">
                {/* Email + Social */}
                <div className="bg-black text-white py-6 px-6 flex flex-col md:flex-row justify-between items-center">
                    {/* Email */}
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <span className="font-bold uppercase">Gửi Email</span>
                        <input
                            type="email"
                            placeholder="Email của bạn"
                            className="p-2 rounded-l-md outline-none text-black"
                        />
                        <button className="bg-yellow-600 px-4 py-2 rounded-r-md hover:bg-yellow-700 transition">
                            Gửi Ngay
                        </button>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-4">
                        <span className="font-bold uppercase">Theo dõi chúng tôi</span>
                        <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
                        <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
                        <FaPinterestP className="hover:text-yellow-500 cursor-pointer" />
                        <FaGooglePlusG className="hover:text-yellow-500 cursor-pointer" />
                        <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-3 gap-8 px-6 py-10 text-sm text-gray-700">
                    <div>
                        <h3 className="font-bold uppercase mb-4">Thông Tin</h3>
                        <ul className="space-y-2">
                            <li><Link to="/"> > Trang chủ</Link></li>
                            <li><Link to="/gioithieu"> > Giới thiệu</Link></li>
                            <li><Link to="/sanpham"> > Sản phẩm</Link></li>
                            <li><Link to="/tintuc"> > Tin tức</Link></li>
                        </ul>
                    </div>

                    {/* Bài viết */}
                    <div>
                        <h3 className="font-bold uppercase mb-4">Các Bài Viết Đã Đăng</h3>
                        <ul className="space-y-2">
                            <li>- Whiskey là vàng ngọc và lục bảo</li>
                            <li>- 10 bí quyết giúp uống rượu để bảo vệ sức khỏe</li>
                            <li>- Vòng đời của sản phẩm rượu vang</li>
                            <li>- 21 công dụng bất ngờ của Vodka</li>
                        </ul>
                    </div>

                    {/* Liên hệ */}
                    <div>
                        <h3 className="font-bold uppercase mb-4">Liên Hệ</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <MdLocationOn /> Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, Hà Nội
                            </li>
                            <li className="flex items-center gap-2">
                                <MdEmail /> support@sapo.vn
                            </li>
                            <li className="flex items-center gap-2">
                                <MdPhone /> 18006750
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t py-4 text-center text-gray-600 text-sm">
                    © Bản quyền thuộc về <span className="font-bold">Awesome Team</span> | Cung cấp bởi{" "}
                    <span className="font-bold">Sapo</span>
                    <div className="flex justify-center mt-2 gap-4">
                        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" className="h-6" />
                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
                        <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="h-6" />
                        <img src="https://img.icons8.com/color/48/000000/maestro.png" alt="Maestro" className="h-6" />
                    </div>
                </div>
                <>
                    {
                        visible && (
                            <button
                                onClick={scrollToTop}
                                className="fixed bottom-4 right-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
                            >
                                <FaArrowUp size={24} />
                            </button>
                        )
                    }
                </>
            </footer>
        </div>
    )
}
