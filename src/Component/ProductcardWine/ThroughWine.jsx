import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const productThrough = [
  {
    id: 1,
    name: "Rượu Merlot",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou43-min-bbe904fd-08cd-4010-a4df-38dff2074c9f.jpg?v=1469500825617",
    price: "1.200.000₫",
    oldPrice: "1.450.000đ",
    discount: "11%"
  },
  {
    id: 2,
    name: "Rượu Royal Salute 100 Cask",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou37.jpg?v=1445848258203",
    price: "1.230.000₫",
    oldPrice: "1.500.000₫",
    discount: "25%",
  },
  {
    id: 3,
    name: "Rượu Hennessy VSOP",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou33.jpg?v=1445848941820",
    price: "1.300.000₫",
    oldPrice: "2.400.000đ",
    discount: "46%"
  },
  {
    id: 4,
    name: "CHAMPAGE PHÁP",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/59.jpg?v=1445850613170",
    price: "250.000₫",
    // oldPrice: "1.000.000₫",
    // discount: "2%",
  },
  {
    id: 5,
    name: "Rượu Luxury Altair Red",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/3.png?v=1445851165587",
    price: "2.330.000₫",
    // oldPrice: "980.000₫",
    // discount: "16%"
  },
  {
    id: 6,
    name: "Rượu Hennessy X.O 3 liter",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/xo3.jpg?v=1445851304120",
    price: "1.200.000₫",
    // oldPrice: "1.340.000₫",
    discount: "8%",
  },
  {
    id: 7,
    name: "Rượu Johnnie Walker",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/60-6cf50d41-2718-4270-ab20-da96c7f01325.jpg?v=1445851426303",
    price: "870.000₫",
    // odlPrice: "160.000đ",
    // discount: "16%",
  },
  {
    id: 8,
    name: "Rượu Remy Martin CLUB",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou24.jpg?v=1445851659983",
    price: "1.230.000₫",
    odlPrice: "1.340.000đ",
    discount: "8%"
  },
]

export default function ThroughWine() {
  const [through, setThrough] = useState([]);

  const handleAddThroughwine = (productWine) => {
    console.log("Da duoc them vao gio hang ", productWine);
    alert(`${productWine.name} da duoc them vao gio hang`);
  };


  return (
    <div>
      <div className=''>
        <div className='flex items-center gap-2 text-sm px-4 py-3 bg-gray-100 text-gray-600'>
          <Link to="/">
            <p className='wineHome'>Trang chủ</p>
          </Link>
          <p> | </p>
          <p>Hàng sắp về</p>
        </div>


        <div className='ForeignWine'>

          <div className='MixedWine'>
            <div className='MixedWine-container'>
              <h2 className='MixedWine-title'>DANH MỤC 1 </h2>
              <ul>
                <li><Link to='/ruou_pha'>Rượu Pha (8)</Link></li>
                <li><Link to='/ruou_ngoai'>Rượu ngoại (8)</Link></li>
                <li> <Link to='/ruou_tri_an'>Rượu tri ân (12)</Link></li>
                <li><Link to='/ruou_volka'>Rượu volka (8)</Link></li>
                <li><Link to='/gio_qua_bieu'>Giỏ quà biếu (9) </Link></li>
                <li><Link to='/ruou_vang_nhap_khau'>Rượu vang nhập khẩu (8)</Link></li>
                <li><Link to='/hang_sap_ve'>Hàng sắp về (8)</Link></li>
                <li><Link to='/hang_moi_ve'>Hàng mới về (9)</Link></li>
              </ul>
              <aside className="MixedWine-sidebar">
                <h3>DANH MỤC 2</h3>
                <ul>
                  <li><Link to="/ruou_pha">Rượu pha (8)</Link></li>
                  <li><Link to="/ruou_ngoai">Rượu ngoại (8)</Link></li>
                  <li><Link to="/ruou_tri_an">Rượu tri ân (12)</Link></li>
                  <li><Link to="/ruou_volka">Rượu Vodka (8)</Link></li>
                  <li><Link to="/gio_qua_bieu">Giỏ quà biếu (9)</Link></li>
                  <li><Link to="/ruou_vang_nhap_khau">Rượu vang nhập khẩu (8)</Link></li>
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
              <h2 className="text-xl font-semibold">SẢN PHẨM ĐI BIẾU , TẶNG</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {productThrough.map((item) => (
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
                      onClick={() => handleAddThroughwine(item)}
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
