import React from 'react';
import { Link } from 'react-router-dom';
// import { ShoppingCart } from 'react-feather'; // Assuming you're using react-feather for icons
import { CartContext } from './CartContext'; // Adjust the import path as necessary
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductIcon = () => {
    // const [cart, setCart] = React.useState([]);
    // const [quantity, setQuantity] = React.useState(1);
    // const removeFromCart = 0;
    // const updateQuantity = 0;
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const product = {
        id: 1,
        name: "Rượu Remy Martin CLUB",
        price: 1230000,
        image:
            "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/ruou24.jpg?v=1445851659983",
    };


    return (
        <div>
            {/* <div className="border p-4">
                <img src={product.image} alt="" />
                <h3>{product.name}</h3>
                <p>{product.price.toLocaleString()} đ</p>

                <button
                    onClick={() => addToCart(product)}
                    className="bg-yellow-400 text-white px-4 py-2 mt-2"
                >
                    Thêm vào giỏ hàng
                </button>
            </div> */}

            <div className="product-card">
                <img src={product.image} alt='' />
                <h4>{product.name}</h4>
                <p>{product.price.toLocaleString()}đ</p>

                <button onClick={() => navigate(`/product/${product.id}`)}>
                    Mua hàng
                </button>
            </div>
        </div>
    );
}

export default ProductIcon;
