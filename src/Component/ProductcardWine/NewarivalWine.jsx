import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProductcardWine.css'

const productNewarival = [
  {
    id: 1,
    name: "Rượu Trius",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/golda1-256x350-1a746827-83d1-43c7-b45a-be5235d7890d-min-min.jpg?v=1469499850787",
    price: "980.000₫",
    oldPrice : "1.000.000đ",
    discount : "2%"
  },
  {
    id: 2,
    name: "Rượu Revel",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou41a-min.jpg?v=1469500139307",
    price: "600.000₫",
  },
  {
    id: 3,
    name: "Rượu Mariana 2013",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou39-min1-min.jpg?v=1469499977917",
    price: "500.000₫",
  },
  {
    id: 4,
    name: "Rượu Johnnie Walker Blue",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/31.png?v=1445850758393",
    price: "729.000₫",
    oldPrice : "870.000đ",
    discount : "16%",
  },
  {
    id: 5,
    name: "Rượu Passion Sparkling",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/49-min.jpg?v=1469181848227",
    price: "150.000₫",
    oldPrice: "1.600.000₫",
    discount: "6%",
  },
  {
    id: 6,
    name: "Rượu Remy Martin CLUB",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou24.jpg?v=1445851659983",
    price: "1.230.000₫",
    oldPrice: "1.340.000₫",
    discount: "8%",
  },
  {
    id: 7,
    name: "Rượu Passion Sparkling",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/49-min.jpg?v=1469181848227",
    price: "150.000₫",
    oldPrice: "160.000₫",
    discount: "6%",
  },
  {
    id: 8,
    name: "Rượu Royal Salute 200",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou38-c7a1b352-5ed6-49c0-9b8a-ad67cfaccc36.jpg?v=1446168342000",
    price: "1.200.000₫",
  },
]
export default function NewarivalWine() {
  const [newArival, setNewArival] = useState([]);


  const handleAddNewarival = (product) => {
    console.log("Da them vao gio hang", product);
    alert(`${product.name} da duoc them vao gio hang`)
  }
  return (
    <div>
      <div className=''>
        <div className='flex items-center gap-2 text-sm px-4 py-3 bg-gray-100 text-gray-600'>
          <Link to="/">
            <p className='wineHome'>Trang chủ</p>
          </Link>
          <p> | </p>
          <p>Hàng mới về </p>
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
            <h2 className="text-xl font-semibold border-b pb-2 mb-6">SẢN PHẨM ĐƯỢC ƯA CHUỘNG</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {productNewarival.map((item) => (
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
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />

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
                      onClick={() => handleAddNewarival(item)}
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
      )
    </div>
  )
}
