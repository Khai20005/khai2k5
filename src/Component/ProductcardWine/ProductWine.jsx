import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const productWine = [
    {
        id: 1,
        name: "Rượu Wine Cheese",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou16-c6ec3060-8d74-485c-a972-2d77a6233372.jpg?v=1446197510767",
        price: "4.000.000₫",
    },
    {
        id: 2,
        name: "Giỏ rượu Mariana",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/product-3467-44480.jpg?v=1446169721130",
        price: "2.356.000₫",
        oldPrice: "2.450.000đ",
        discount: "4%"
    },
    {
        id: 3,
        name: "Rượu Royal Salute 200",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou38-c7a1b352-5ed6-49c0-9b8a-ad67cfaccc36.jpg?v=1446168342000",
        price: "1.200.000₫",
        oldPrice: "1.430.000đ",
        discount: "16%"

    },
    {
        id: 4,
        name: "Rượu CHIVAS",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou10.jpg?v=1446167039993",
        price: "700.000₫",
    },
    {
        id: 5,
        name: "Rượu Revel",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou41-min.jpg?v=1469182376523",
        price: "990.000₫",
        // oldPrice: "1.600.000₫",
        // discount: "6%",
    },
    {
        id: 6,
        name: "Rượu Royal Salute 100 Cask",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou37.jpg?v=1445848258203",
        price: "1.130.000₫",
        oldPrice: "1.500.000₫",
        discount: "25%",
    },
    {
        id: 7,
        name: "Rượu Merlot",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou43-min.jpg?v=1469500809613",
        price: "790.000₫",
        // oldPrice: "1.430.000₫",
        // discount: "16%",
    },
    {
        id: 8,
        name: "Rượu Rhum",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/xo3-2-d8de60ff-abd6-4834-9701-469b99ac63ba.jpg?v=1446196736543",
        price: "3.900.000₫",
    },
    {
        id: 9,
        name: "Rượu Whisky Nhật Bản",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou36-bd83d465-be7d-4358-a8df-b026930eb5d9.gif?v=1446197036540",
        price: "13.000.000₫",
        // oldPrice: "1.500.000₫",
        // discount: "25%",
    },
    {
        id: 10,
        name: "Rượu sake",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou51.jpg?v=1446086843400",
        price: "2.456.000₫",
        // oldPrice: "1.430.000₫",
        // discount: "16%",
    },
    {
        id: 11,
        name: "Rượu Mugi Shochu",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou11-2484f54b-d024-47c2-a103-1ad8a15a706f.jpg?v=1446197317800",
        price: "580.000₫",
    },
    {
        id: 12,
        name: "Rượu Merlot",
        image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou43-min-bbe904fd-08cd-4010-a4df-38dff2074c9f.jpg?v=1469500825617",
        price: "1.290.000₫",
        oldPrice: "1.450.000đ",
        discount: "11%"
    },
]

console.log("Product Wine List:", productWine);

export default function ProductWine() {
    const [productwine, setProductWine] = useState([]);

    const handleAddProductwine = (product) => {
        console.log("Da them vao gio hang : ", product);
        alert(`${product.name} da duoc them vao gio hang`)
    };


    return (
        <div>
            <div className=''>
                <div className='flex items-center gap-2 text-sm px-4 py-3 bg-gray-100 text-gray-600'>
                    <Link to="/">
                        <p className='wineHome'>Trang chủ</p>
                    </Link>
                    <p> | </p>
                    <p>Rượu pha</p>
                </div>

                <div className='MixedWine'>
                    <div className='MixedWine-container'>
                        <h2 className='MixedWine-title'>DANH MỤC 1 </h2>
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
                        <aside className="MixedWine-sidebar">
                            <h3>DANH MỤC 2</h3>
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
                    </div>

                    <div className="max-w-7xl mx-auto py-10 px-4">
                        <h2 className="text-xl font-semibold border-b pb-2 mb-6">RƯỢU PHA</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {productWine.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative group bg-white shadow-sm hover:shadow-md transition rounded-xl border border-gray-100 flex flex-col justify-between"
                                >
                                    {/* Giảm giá */}
                                    {item.discount && (
                                        <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                                            {item.discount}
                                        </span>
                                    )}

                                    {/* Hình ảnh */}
                                    <Link to={`/product/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-56 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </Link>

                                    {/* Thông tin */}
                                    <div className="text-center p-3 flex flex-col flex-grow justify-between">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-700 min-h-[40px]">
                                                {item.name}
                                            </h3>

                                            <div className="mt-2">
                                                <p className="text-orange-600 font-semibold">
                                                    {item.price.toLocaleString()}đ
                                                </p>
                                                {item.oldPrice && (
                                                    <p className="text-gray-400 text-sm line-through">
                                                        {item.oldPrice.toLocaleString()}đ
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        {/* Nút mua hàng luôn hiển thị */}
                                        <button
                                            onClick={() => handleAddProductwine(item)}
                                            className=" mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-medium"
                                        >
                                            Mua hàng
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
