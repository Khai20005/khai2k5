import React from 'react'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Lấy giỏ hàng từ API khi load trang
    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const response = await axios.get("http://localhost:8000/winehouse/cart");
            setCart(response.data);
        } catch (error) {
            console.log("Error fetching cart: ", error);
        }
    };

    // Thêm + tăng sản phẩm
    const addToCartDetail = async (product) => {
        await axios.post("http://localhost:8000/winehouse/updateCart", {
            productID: product.id,
            name: product.id,
            price: product.id,
            image: product.id,
        });
        fetchCart(); // cập nhật lại giỏ hàng
    };

    // Cập nhật số lượng tăng/ giảm
    const handleUpdateQuantity = async (id, newQuantity) => {
        try {
            await axios.put(`http://localhost:8000/winehouse/updateCartGories/${id}`, { newQuantity });
            fetchCart();
        } catch (error) {
            console.error("Error updating quantity: ", error);
        }
    };


    // xóa sản phẩm
    const handleRemoveCart = async (id) => {
        try {
            const item = await axios.delete(`http://localhost:8000/winehouse/removeCart/${id}`);
            console.log("Xoa thanh cong: ", item);
            fetchCart();
        } catch (error) {
            console.log("Loi khi xoa! ", error);
        }
    };


    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCart((prevCart) => {
            // check xem da co sanpham chua
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantrity: item.quantity + product.quantity }
                        : item
                );
            }
            return [...prevCart, { ...product, quantify: 1 }];
        });
    };

    // xóa product
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    const updateQuantify = (id, newQuantify) => {
        if (newQuantify < 1) return;
        setCart((item) =>
            item.id === id ? { ...item, quantify: newQuantify } : item
        );
    };


    // Giỏ hàng rượu ProductCardWine
    const [cartWine, setCartWine] = useState([]);
    const [modalProductWine, setModalProductWine] = useState(null);

    const AddToCardWine = (product) => {
        setCartWine(prevCart => [...prevCart, product]);
        setModalProductWine(product);// mo popup khi them san pham vao gio hang
    };

    const CloseModal = () => {
        setModalProductWine(null);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantify, addToCartDetail, handleUpdateQuantity, handleRemoveCart, cartWine, AddToCardWine, modalProductWine, CloseModal }}>
            {children}
        </CartContext.Provider>
    )   
}
