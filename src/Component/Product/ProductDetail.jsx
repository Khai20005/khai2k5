import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Component/Product/CartContext';

const ProductDetail = () => {
    const [quantity, setQuantity] = React.useState(1);
    const [cart, setCart] = useState([]);

    const { addToCart } = useContext(CartContext);


    const handleAddToCart = () => {
        const product = {
            id: 1,
            name: "Rượu Remy Martin CLUB",
            price: 1230000,
            originalPrice: 1340000,
            image: "https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou24.jpg?v=1445851659983",
            quantity: quantity
        };
        addToCart(product);
        setCart([...cart, product]);
        alert(`${product.name} đã được thêm vào giỏ hàng!`);
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto p-6 flex gap-8">
                <div className="w-1/2">
                    <img
                        src="https://bizweb.dktcdn.net/thumb/large/100/022/044/products/ruou24.jpg?v=1445851659983"
                        alt="Remy Martin Club"
                        className="w-full object-contain"
                    />
                    <div className="flex gap-2 mt-4">
                        <img src="/img1.jpg" className="w-20 border cursor-pointer" />
                        <img src="/img2.jpg" className="w-20 border cursor-pointer" />
                    </div>
                </div>

                {/* Thông tin sản phẩm */}
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold">RƯỢU REMY MARTIN CLUB</h1>
                    <div className="text-yellow-600 text-xl mt-2 font-bold">
                        1.230.000₫{" "}
                        <span className="text-gray-400 line-through text-base ml-2">
                            1.340.000₫
                        </span>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-1">SỐ LƯỢNG:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="border rounded px-2 py-1 w-20"
                        />
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded"
                    >
                        <Link to='/cart'>Mua hàng</Link>
                    </button>

                    <div className="mt-6 text-sm text-gray-700">
                        <p className="mb-2">
                            <strong>Mô tả:</strong> Dung Tích: 750ml <br />
                            Xuất Sứ: Pháp <br />
                            Với những mùi vị, hương thơm hiếm có như: hoa iris, mùi thủy tiên,
                            candies fruit (kẹo), passion fruit (trái lạc tiên), mật ong, vị
                            trầm, và nhiều mùi vị khác.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
