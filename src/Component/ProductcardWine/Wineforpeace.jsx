import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../ProductcardWine/ProductcardWine.css'
const productcardWine = [
  {
    id: 1,
    name: "Giỏ Wine and Cheese",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/gio-wine-and-cheese.jpg?v=1444808783367",
    price: "4.000.000₫",
  },
  {
    id: 2,
    name: "Rượu Black Tie Affair",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou-black-tie-affair.jpg?v=1444808783813",
    price: "1.400.000₫",
    // oldPrice: "870.000₫",
    // discount: "16%",
  },
  {
    id: 3,
    name: "Giỏ Italian Wine Tasting",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/53401551104439gio_17_1[1].jpg?v=1444808782660",
    price: "1.000.000₫",
  },
  {
    id: 4,
    name: "Rượu Bubbles And Truffles",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/1719608marianavineyard13chardonnay_600x800_2334870[1].jpg?v=1444808783437",
    price: "500.000₫",
  },
  {
    id: 5,
    name: "Rượu Johnnie Walker",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/60-6cf50d41-2718-4270-ab20-da96c7f01325.jpg?v=1445851426303",
    price: "870.000₫",
    // oldPrice: "1.600.000₫",
    // discount: "11%",
  },
  {
    id: 6,
    name: "Rượu Revel",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou41a-min.jpg?v=1469500139307",
    price: "600.000₫",
    oldPrice: "1.500.000₫",
    discount: "25%",
  },
  {
    id: 7,
    name: "Rượu Hennessy X.O 3 liter",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/xo3.jpg?v=1445851304120",
    price: "1.200.000₫",
    // discount: "16%",
  },
  {
    id: 8,
    name: "Rượu LUXURY ALtair Red",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/3.png?v=1445851165587",
    price: "2.338.000₫",
  },
  {
    id: 9,
    name: "Rượu Johnie Walker Blue",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/31.png?v=1445850758393",
    price: '729.000₫',
    oldPrice: "870.000₫",
  },
  {
    id: 10,
    name: "Rượu California Muscat",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/19.png?v=1445850433743",
    price: "1.500.000₫",
  },
  {
    id: 11,
    name: "Rượu cross SauvignonRượu Hennessy Paradis",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/53-min.png?v=1469181800943",
    price: " 1.500.000₫",
  },
  {
    id: 12,
    name: "Rượu Trius",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/golda1-256x350-1a746827-83d1-43c7-b45a-be5235d7890d-min-min.jpg?v=1469499850787",
    price: "980.000đ",
    oldPrice : "1.200.000₫",
  },
]
export default function Wineforpeace() {
  const [forPeace, setForPeace] = useState("");
  const [loading, setLoading] = useState(true);

  const handleAddToCartForpeace = (productForPeace) => {
    console.log("Thêm vào giỏ hàng:", productForPeace);
    alert(`Đã thêm ${productForPeace.name} vào giỏ hàng!`);
  }

  return (
    <div>
      <div className=''>
        <div className='flex items-center gap-2 text-sm px-4 py-3 bg-gray-100 text-gray-600'>
          <Link to="/">
            <p className='wineHome'>Trang chủ</p>
          </Link>
          <p> | </p>
          <p>Rượu tri ân</p>
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
              <h2 className="text-xl font-semibold">RƯỢU TRI ÂN</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {productcardWine.map((item) => (
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
                      onClick={() => handleAddToCartForpeace(item)}
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
