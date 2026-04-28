import React from 'react'
import { useParams } from 'react-router-dom';
import productWine  from './ProductWine.jsx';

export default function ProductDetailWine() {
    const { id } = useParams();
    const productID = productWine.find(product => product.id === parseInt(id));
    console.log("Product ID:", productID);

    if (!productID) {
        return <h2>Không tìm thấy sản phẩm</h2>;
    };


    return (
        <div>
            <div className="p-6 max-w-3xl mx-auto">
                <img src={productID.image} alt={productID.name} className="w-full h-80 object-contain" />

                <h2 className="text-2xl font-bold mt-4">{productID.name}</h2>
                <p className="text-orange-600 text-xl mt-2">{productID.price}</p>
                {productID.oldPrice && (
                    <p className="text-gray-400 line-through">{productID.oldPrice}</p>
                )}

                <p className="mt-6">
                    Đây là trang chi tiết sản phẩm của: <b>{productID.name}</b>.
                </p>
            </div>
        </div>
    )
}
