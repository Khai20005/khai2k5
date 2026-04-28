import React from 'react'
import { Link } from 'react-router-dom';
import '../ProductcardWine/ProductcardWine.css'

const productSpicalrice = [
  {
    id: 1,
    name: "Rượu Black Tie Affair",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou-black-tie-affair.jpg?v=1444808783813",
    price: "1.250.000₫",
  },
  {
    id: 2,
    name: "Giỏ Wine and Cheese",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/gio-wine-and-cheese.jpg?v=1444808783367",
    price: "4.000.000₫",
  },
  {
    id: 3,
    name: "Rượu Hennessy X.O 3 liter",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/xo3.jpg?v=1445851304120",
    price: "1.200.000₫",
  },
  {
    id: 4,
    name: "Rượu Passion Sparkling",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/49-min.jpg?v=1469181848227",
    price: "150.000₫",
    oldPrice : "160.000đ",
    discount: "6%",
  },
  {
    id: 5,
    name: "Rượu sake",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou51.jpg?v=1446086843400",
    price: "150.000₫",
    oldPrice: "160.000₫",
    discount: "6%",
  },
  {
    id: 6,
    name: "Rượu Whisky Nhat Ban",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou36-bd83d465-be7d-4358-a8df-b026930eb5d9.gif?v=1446197036540",
    price: "1.130.000₫",
    oldPrice: "1.500.000₫",
    // discount: "25%",
  },
  {
    id: 7,
    name: "Rượu Rhum",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/xo3-2-d8de60ff-abd6-4834-9701-469b99ac63ba.jpg?v=1446196736543",
    price: "3.950.000₫",
    // oldPrice: "1.430.000₫",
    // discount: "16%",
  },
  {
    id: 8,
    name: "Rượu Whisky Nhật Bản",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/product-3467-44480.jpg?v=1446169721130",
    price: "2.365.000₫",
    oldPrice: "2.500.000₫",
    discount: "5%",
  },
];

export default function SpicalriceWine() {

  const handleAddSpicalrice = (productSpicalrice) => {
    console.log("Da them vao gio hang : ", productSpicalrice);
    alert(`${productSpicalrice.name} da duoc them vao gio hang!`);
  }
  return (
    <div>
      <div className='flex items-center gap-2 text-sm px-4 py-3 bg-gray-100 text-gray-600'>
        <Link to="/">
          <p className='wineHome'>Trang chủ</p>
        </Link>
        <p> | </p>
        <p>Giỏ quà biếu</p>
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
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">GIỎ QUÀ BIẾU</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {productSpicalrice.map((item) => (
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
                    onClick={() => handleAddSpicalrice(item)}
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
}
