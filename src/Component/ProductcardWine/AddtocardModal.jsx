import React, { useContext, useState } from 'react';
import { CartContext } from '../Product/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

export const AddToCardModal = () => {
  const [modalProduct, closeModal] = useContext(CartContext);
  const navigate = useNavigate();

  if (!modalProduct) {
    return null;
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white w-[420px] rounded shadow-lg">

          {/* Header */}
          <div className="bg-yellow-400 text-white px-4 py-3 flex justify-between items-center">
            <span>✔ Thêm vào giỏ hàng thành công</span>
            <button onClick={closeModal}>✖</button>
          </div>

          {/* Content */}
          <div className="p-4 flex gap-4">
            <img
              src={modalProduct.image}
              alt=""
              className="w-16 h-20 object-cover"
            />
            <div>
              <h3 className="font-semibold">{modalProduct.name}</h3>
              <p className="text-yellow-600 font-bold">
                {modalProduct.price.toLocaleString()} đ
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="p-4 space-y-2">
            <button
              onClick={closeModal}
              className="w-full border border-yellow-400 text-yellow-600 py-2 rounded"
            >
              Tiếp tục mua hàng
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="w-full bg-yellow-400 text-white py -2 rounded"
            >
              Tiến hành thanh toán »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCardModal;
