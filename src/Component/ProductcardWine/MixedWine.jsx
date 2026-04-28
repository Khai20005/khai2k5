import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../ProductcardWine/ProductcardWine.css'
import axios from 'axios';

const productMixedWine = [
  {
    id: 1,
    name: "CHAMPANGE PHÁP",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/59.jpg?v=1445850613170",
    price: "250.000₫",
  },
  {
    id: 2,
    name: "Rượu Black Tie Affair",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou-black-tie-affair.jpg?v=1444808783813",
    price: "1.400.000₫",
  },
  {
    id: 3,
    name: "Rượu Cross Sauvignon",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/53-min.png?v=1469181800943",
    price: "1.500.000₫",
  },
  {
    id: 4,
    name: "Rượu Mugi Shochu",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou11-2484f54b-d024-47c2-a103-1ad8a15a706f.jpg?v=1446197317800",
    price: "580.000₫",
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
    name: "Rượu Royal Salute 100 Cask",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou37.jpg?v=1445848258203",
    price: "1.130.000₫",
    oldPrice: "1.500.000₫",
    discount: "25%",
  },
  {
    id: 7,
    name: "Rượu Royal Salute 200",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou38-c7a1b352-5ed6-49c0-9b8a-ad67cfaccc36.jpg?v=1446168342000",
    price: "1.200.000₫",
    oldPrice: "1.430.000₫",
    discount: "16%",
  },
  {
    id: 8,
    name: "Rượu Whisky Nhật Bản",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou36-bd83d465-be7d-4358-a8df-b026930eb5d9.gif?v=1446197036540",
    price: "13.000.000₫",
  },
];

export default function MixedWine() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMixed = async () => {
      try {
        const res = await axios.get('');
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu rượu pha:", error);
      }
    }
    fetchMixed();
  }, []);

  // if (loading) {
  //   return <div className='text-center text-gray-500 mt-10'>Loading...</div>;
  // };

  const handleAddToCartMixed = (product) => {
    console.log("Da them vao gio", product);
    alert(`${product.name} da duoc them vao gio hang!`);
    // addToCartMixedWine(product);
  };



  // Hàm thêm sản phẩm vào giỏ hàng

  const addToCartMixedWine = (product) => {
    const exits = cart.find((item) => item.id === product.id);
    if (exits) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exits, quantity: exits.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  // const removeCartMixedWine = (productId) => {
  //   setCart(cart.filter((item) => item.id !== productId));
  // };

  return (
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
            {productMixedWine.map((item) => (
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
                    onClick={() => handleAddToCartMixed(item)}
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
