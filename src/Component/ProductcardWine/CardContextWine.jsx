import React, { useState } from 'react';
import { createContext } from 'react';

export const CardContextWine = createContext();

export const CartProviderWine = ({ children }) => {
    const [cartWine, setCartWine] = useState([]);
    const [modalProductWine, setModalProductWine] = useState(null);

    const AddToCard = (product) => {
        setCartWine(prevCart => [...prevCart, product]);
        setModalProductWine(product);// mo popup khi them san pham vao gio hang
    };

    const CloseModal = () => {
        setModalProductWine(null);
    }


    return (
        <CardContextWine.Provider value={{ cartWine, setCartWine, modalProductWine, setModalProductWine }}>
            {children}
        </CardContextWine.Provider>
    );
};
