import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from './CartContext';


function Product() {
  const { addToCart } = React.useContext(CartContext);

  const product = [
    {
      id: 1,
      name: "Rượu Remy Martin CLUB",
      price: 1230000,
      originalPrice: 1340000,
      discount: "8%",
      image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou24.jpg?v=1445851659983"
    },
    {
      id: 2,
      name: "Rượu Luxury Altair Red",
      price: 2300000,
      image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/3.png?v=1445851165587",
    },
    {
      id: 3,
      name: "Rượu Johnnie Warker Blue",
      price: 729000,
      originalPrice: 870000,
      discount: "16%",
      image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/31.png?v=1445850758393",
    },
    {
      id: 4,
      name: "Rượu California Muscat ",
      price: 2000000,
      originalPrice: 2000000,
      image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/19.png?v=1445850433743",
    }
  ];


  const [cart, setCart] = useState([]);
  // Thêm sản phẩm vào giỏ hàng
  const handleBuy = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      // nếu đã có thì tăng số lượng
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // nếu chưa có thì thêm mới
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCart([...cart, { ...product, quantity: 1 }]);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };



  // const handleDelete = (id) => {
  //   setCart(cart.filter((item) => item.id !== id));
  //   alert('Sản phẩm đã được xóa khỏi giỏ hàng!');
  // };
  // // câp nhật số lượng sản phẩm trong giỏ hàng
  // const handleUpdateQuantity = (id, newQuantity) => {
  //   if (newQuantity < 1) return;
  //   setCart(
  //     cart.map((item) =>
  //       item.id === id ? { ...item, quantity: newQuantity } : item
  //     )
  //   );
  // };

  // Connect to API (if needed)
  // const ProductList = () => {
  //     const handleBuy = async (product) => {
  //         try {
  //             await axios.post("", {
  //                 ...product,
  //                 quantity: 1                 
  //             });
  //             alert(`${product.name} đã được thêm vào giỏ hàng!`);
  //         } catch (error) {
  //             console.log("Có lỗi thêm vào giỏ hàng:", error);
  //             alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng.');
  //         }
  //     }
  // }

  return (
    <div>
      <div className="flex gap-6 justify-center p-6 flex-wrap">
        {product.map((product) => (
          <div key={product.id} className="relative bg-white p-4 shadow rounded-lg w-64 text-center">
            <Link to='/product-detail'>
              <img src={product.image} alt={product.name} className="h-48 w-full object-contain mx-auto" />
            </Link>
            <p className="mt-2 text-gray-800">{product.name}</p>
            <span className="text-orange-600 font-bold text-lg">
              {product.price.toLocaleString()}₫
            </span>
            <button
              className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              onClick={() => { addToCart(product); handleBuy(product); }}
            >
              Mua hàng
            </button>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Product
