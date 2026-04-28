import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../ProductcardWine/ProductcardWine.css'
import axios from 'axios';


const productVolka = [
  {
    id: 1,
    name: "Rượu Luxury Altair Red",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/3.png?v=1445851165587",
    price: "2.338.000₫",
  },
  {
    id: 2,
    name: "Rượu Mariana 2013",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou39-min1-min.jpg?v=1469499977917",
    price: "300.000₫",
    // oldPrice: "870.000₫",
    // discount: "16%",
  },
  {
    id: 3,
    name: "Rượu Bubbles And Truffles",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/1719608marianavineyard13chardonnay_600x800_2334870[1].jpg?v=1444808783437",
    price: "500.000₫",
  },
  {
    id: 4,
    name: "Rượu Cross Sauvignon",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/53-min.png?v=1469181800943",
    price: "1.550.000₫",
  },
  {
    id: 5,
    name: "Rượu SAKE",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou51.jpg?v=1446086843400",
    price: "2.500.000₫",
    // oldPrice: "1.600.000₫",
    // discount: "11%",
  },
  {
    id: 6,
    name: "Rượu Merlot",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou43-min.jpg?v=1469500809613",
    price: "2.000.000₫",
    oldPrice: "200.000₫",
    // discount: "25%",
  },
  {
    id: 7,
    name: "Rượu Mugi Shochu",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou11-2484f54b-d024-47c2-a103-1ad8a15a706f.jpg?v=1446197317800",
    price: "550.000₫",
    // discount: "16%",
  },
  {
    id: 8,
    name: "Rượu California Muscat",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/19.png?v=1445850433743",
    price: "2.000.000₫",
  },
]

export default function VolkaWine() {
  const [volka, setVolka] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddVolka = (product) => {
    console.log("Da them gio hang : ", product);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };


  return (
    <div>
      <div className=''>
        <div className='flex items-center gap-2 text-sm px-4 py-3 bg-gray-100 text-gray-600'>
          <Link to="/">
            <p className='wineHome'>Trang chủ</p>
          </Link>
          <p> | </p>
          <p>Rượu Volka</p>
        </div>


        <div className='ForeignWine'>

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
                  <li><Link to="/ruou_pha">Rượu pha (9)</Link></li>
                  <li><Link to="/ruou_ngoai">Rượu ngoại (8)</Link></li>
                  <li><Link to="/ruou_tri_an">Rượu tri ân (20)</Link></li>
                  <li><Link to="/ruou_volka">Rượu Vodka (9)</Link></li>
                  <li><Link to="/gio_qua_bieu">Giỏ quà biếu (9)</Link></li>
                  <li><Link to="/ruou_vang_nhap_khau">Rượu vang nhập khẩu (9)</Link></li>
                  <li><Link to="/hang_sap_ve">Hàng sắp về (9)</Link></li>
                  <li><Link to="/hang_moi_ve">Hàng mới về (9)</Link></li>
                  <li><Link to="/san_pham_ban_chay">Sản phẩm bán chạy (9)</Link></li>
                  <li><Link to="/san_pham_gia_uu_dai">Sản phẩm giá ưu đãi (9)</Link></li>
                </ul>
              </aside>
            </div>
          </div>

          <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="flex justify-between items-center border-b pb-2 mb-6">
              <h2 className="text-xl font-semibold">RƯỢU Volka</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {productVolka.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between"
                >
                  {/* Nhãn giảm giá */}
                  {item.discount && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-tr-md rounded-bl-md">
                      {item.discount}
                    </span>
                  )}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Thông tin */}
                  <div className="text-center p-3">
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
                    <button
                      onClick={() => handleAddVolka(item)}
                      className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-medium"
                    >
                      Mua hàng
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}
