import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const productStoreWine = [
  {
    id: 1,
    name: "Rượu Hennessy VSOP",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou33.jpg?v=1445848941820",
    price: "2.000.000₫",
    oldPrice: "2.400.000đ",
    discount: "46%"
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
    name: "Rượu Merlot",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou43-min-bbe904fd-08cd-4010-a4df-38dff2074c9f.jpg?v=1469500825617",
    price: "1.290.000₫",
    oldPrice: "1.450.000đ",
    discount: "11%"
  },
  {
    id: 4,
    name: "Rượu Trius",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/golda1-256x350-1a746827-83d1-43c7-b45a-be5235d7890d-min-min.jpg?v=1469499850787",
    price: "980.000₫",
    oldPrice: "1.000.000₫",
    discount: "2%",
  },
  {
    id: 5,
    name: "Rượu Johnnie Walker Blue",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/31.png?v=1445850758393",
    price: "820.000₫",
    oldPrice: "980.000₫",
    discount: "16%"
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
    odlPrice: "160.000đ",
    discount: "16%",
  },
  {
    id: 8,
    name: "Giỏ rượu Mariana ",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/product-3467-44480.jpg?v=1446169721130",
    price: "2.350.000₫",
    odlPrice: "2.450.000đ",
    discount: "4%"
  },
]
export default function StoreWine() {
  const [storeWine, setStorewine] = useState([]);

  const handleAddStorewine = (product) => {
    console.log("Da duoc them vao gio hang ", product);
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
          <p>Sản phẩm giá ưu đãi</p>
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
              <h2 className="text-xl font-semibold">SẢN PHẨM GIÁ ƯU ĐÃI</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {productStoreWine.map((item) => (
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
                      onClick={() => handleAddStorewine(item)}
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
