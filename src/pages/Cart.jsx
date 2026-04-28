import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState([]);

    // Lấy dữ liệu giỏ hàng
    useEffect(() => {
        axios.delete(`http://localhost:8000/winehouse/cart/${id}`)
            .then(res => {
                console.log("DATA:", res.data); // debug
                setCart(res.data);
            })
            .catch(err => console.error("Lỗi kết nối:", err));
    }, []);

    // Sửa số lượng
    const handleUpdateQty = async (id, newQty) => {
        if (!id) {
            console.error("ID bị undefined!");
            return;
        }
        if (newQty < 1) return;

        try {
            const res = await axios.put(`http://localhost:8000/winehouse/cart/${id}`, {
                quantity: newQty
            });
            setCart(res.data.updatedCart);
        } catch (err) {
            console.error("Lỗi update:", err);
        }
    };

    // Xóa sản phẩm
    const handleDelete = async (id) => {
        if (!id) {
            console.error("ID bị undefined!");
            return;
        }

        if (window.confirm("Xóa sản phẩm này khỏi giỏ hàng?")) {
            try {
                const res = await axios.delete(`http://localhost:8000/winehouse/cart/${id}`);
                setCart(res.data.updatedCart);
            } catch (err) {
                console.error("Lỗi xóa:", err);
            }
        }
    };

    // Thanh toán
    const handleCheckout = async () => {
        try {
            const res = await axios.post('http://localhost:8000/winehouse/checkout');
            alert(res.data.message);
            setCart(res.data.updatedCart);
        } catch (err) {
            console.error("Lỗi thanh toán:", err);
        }
    };

    // Quên mật khẩu
    const handleForgotPass = async () => {
        const email = prompt("Nhập email cần lấy lại mật khẩu:");
        if (email) {
            try {
                const res = await axios.post('http://localhost:8000/api/forgot-password', { email });
                alert(res.data.message);
            } catch (err) {
                alert("Email không tồn tại!");
            }
        }
    };

    // Tổng tiền
    const totalMoney = cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>GIỎ HÀNG CỦA BẠN</h2>
                <button 
                    onClick={handleForgotPass}
                    style={{ color: 'blue', border: 'none', background: 'none', cursor: 'pointer' }}
                >
                    Quên mật khẩu?
                </button>
            </div>

            {cart.map(item => (
                <div 
                    key={item._id} 
                    style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '15px 0' }}
                >
                    <img src={item.image} alt="" style={{ width: '80px', marginRight: '20px' }} />

                    <div style={{ flex: 1 }}>
                        <h4 style={{ margin: 0 }}>{item.name}</h4>
                        <p>{item.price.toLocaleString()}đ</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', margin: '0 30px' }}>
                        <button onClick={() => handleUpdateQty(item._id, item.quantity - 1)}>-</button>
                        <span style={{ margin: '0 15px' }}>{item.quantity}</span>
                        <button onClick={() => handleUpdateQty(item._id, item.quantity + 1)}>+</button>
                    </div>

                    <p style={{ width: '120px', fontWeight: 'bold' }}>
                        {(item.price * item.quantity).toLocaleString()}đ
                    </p>

                    <button 
                        onClick={() => handleDelete(item._id)}
                        style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                        Xóa
                    </button>
                </div>
            ))}

            <div style={{ textAlign: 'right', marginTop: '30px' }}>
                <h3>
                    Tổng thanh toán: 
                    <span style={{ color: 'red' }}>
                        {totalMoney.toLocaleString()}đ
                    </span>
                </h3>

                <button 
                    onClick={handleCheckout}
                    style={{ background: '#e67e22', color: 'white', padding: '15px 30px', border: 'none', fontSize: '18px', cursor: 'pointer' }}
                >
                    THANH TOÁN (MUA HÀNG)
                </button>
            </div>
        </div>
    );
};

export default Cart;