import React, { useContext } from 'react'
import { CartContext } from '../../Component/Product/CartContext';
import '../Product/Product.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function CartPage() {
  const { cart, handleRemoveCart } = useContext(CartContext);

  // Tính tổng tiền
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price ? item.price.toString().replace(/[^\d]/g, '') : 0) * (item.quantity || 1),
    0
  );
  console.log("Total Price : ", totalPrice);

  const handleIncreaseCart = async (id, fetchCart) => {
    try {
      const token = localStorage.getItem("token"); //Lay token tu localStorage
      if (!token) {
        alert("Vui lòng đăng nhập để thực hiện thao tác này.");
        return;
      }
      // console.log("token : ", token);

      const response = await axios.put(`http://localhost:8000/winehouse/increaseCart/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Tang so luong thanh cong : " , response.data);
        
      fetchCart();
    } catch (error) {
      console.error("Error increasing cart item:", error.response.data || error.message);
    }
  };

  const handleDecreaseCart = async (id, fetchCart) => {
    try {
      const token = localStorage.getItem("token"); //Lay token tu localStorage
      console.log("token : ", token);

      await axios.put(`http://localhost:8000/winehouse/decreaseCart/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      fetchCart();
    } catch (error) {
      console.log("Decreaded error : ", error.response?.data || error.message);

    }
  };

  return (
    <div className="p-6">
      <div className="cart_path mb-4">
        <Link to="/">Trang chủ</Link> | <span>Giỏ hàng</span>
      </div>

      <h2 className="text-2xl font-bold mb-4">🛒 Giỏ hàng của bạn</h2>

      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <div>
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item._id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} width="60" />
                  <span>{item.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-200 px-2 rounded"
                    onClick={() => handleDecreaseCart(item._id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-gray-200 px-2 rounded"
                    onClick={() => handleIncreaseCart(item._id)}
                  >
                    +
                  </button>
                </div>

                <span> {(Number(item.price) * item.quantity).toLocaleString()}₫</span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleRemoveCart(item._id)}
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right mt-4 font-bold text-lg">
            Tổng tiền: {totalPrice.toLocaleString()}₫
          </div>
        </div>
      )}
    </div>
  )
}
