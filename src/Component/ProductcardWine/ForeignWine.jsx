import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../ProductcardWine/ProductcardWine.css'
import axios from 'axios';

const productForeign = [
  {
    id: 1,
    name: "Rượu Hennessy X.O 3 liter",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/xo3.jpg?v=1445851304120",
    price: "1.250.000₫",
  },
  {
    id: 2,
    name: "Rượu Johnnie Walker Blue",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/31.png?v=1445850758393",
    price: "729.000₫",
    oldPrice: "870.000₫",
    discount: "16%",
  },
  {
    id: 3,
    name: "Rượu Cross SauvignonRượu Hennessy Paradis",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou35.jpg?v=1445848452090",
    price: "1.500.000₫",
  },
  {
    id: 4,
    name: "Rượu Whisky Nhật Bản",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou36-bd83d465-be7d-4358-a8df-b026930eb5d9.gif?v=1446197036540",
    price: "13.000.000₫",
  },
  {
    id: 5,
    name: "Rượu Merlot",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou43-min-bbe904fd-08cd-4010-a4df-38dff2074c9f.jpg?v=1469500825617",
    price: "1.290.000₫",
    oldPrice: "1.600.000₫",
    discount: "11%",
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
    name: "Rượu Royal Salute 200",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/xo3-2-d8de60ff-abd6-4834-9701-469b99ac63ba.jpg?v=1446196736543",
    price: "3.950.000₫",
    discount: "16%",
  },
  {
    id: 8,
    name: "Rượu CHIVAS",
    image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou10.jpg?v=1446167039993",
    price: "690.000₫",
  },
];
export default function ForeignWine() {
  const [wines, setWines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await axios.get('');
        setWines(response.data);
      } catch (error) {
        console.error("Lỗi tải dữ liệu : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWines();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  const handleAddToCart = (product) => {
    console.log("Da them gio hang : ", product);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  }


  return (
    <div className=''>
      <div className='flex items-center gap-2 text-sm px-4 py-3 bg-gray-100 text-gray-600'>
        <Link to="/">
          <p className='wineHome'>Trang chủ</p>
        </Link>
        <p> | </p>
        <p>Rượu ngoại</p>
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
            <h2 className="text-xl font-semibold">RƯỢU NGOẠI</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {productForeign.map((item) => (
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
                    onClick={() => handleAddToCart(item)}
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
  )
}
