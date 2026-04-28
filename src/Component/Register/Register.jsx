import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Xóa lỗi của field đó khi người dùng bắt đầu nhập lại
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Hàm kiểm tra dữ liệu (Validate)
    const validate = () => {
        let newErrors = {};
        if (!formData.lastName.trim()) newErrors.lastName = 'Vui lòng nhập họ';
        if (!formData.firstName.trim()) newErrors.firstName = 'Vui lòng nhập tên';
        
        if (!formData.email) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        if (!formData.phone) {
            newErrors.phone = 'Vui lòng nhập số điện thoại';
        } else if (!/^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])[0-9]{7}$/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ';
        }

        if (!formData.password) {
            newErrors.password = 'Vui lòng nhập mật khẩu';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }

        return newErrors;
    };

    // Hàm xử lý Đăng ký qua API
    const handleRegisterAPI = async (e) => {
        e.preventDefault();
        
        // 1. Kiểm tra lỗi validate trước khi gửi
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // 2. Gọi API (Đã sửa URL: xóa dấu / ở đầu http)
            const response = await axios.post('http://localhost:8000/winehouse/register', formData);
            
            console.log("Đăng ký thành công:", response.data);
            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            
            // Chuyển hướng sang trang login
            navigate('/login');

        } catch (error) {
            console.error("Lỗi kết nối API:", error);
            
            if (!error.response) {
                // Lỗi ERR_CONNECTION_REFUSED (Server chưa bật hoặc sai cổng)
                alert('Lỗi: Không thể kết nối tới Server (Cổng 8000). Vui lòng kiểm tra backend!');
            } else {
                // Lỗi từ phía Server trả về (ví dụ: Email đã tồn tại)
                alert(error.response.data.message || 'Đăng ký thất bại. Vui lòng thử lại.');
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 uppercase">
                    Đăng ký tài khoản
                </h2>

                <form onSubmit={handleRegisterAPI} className="space-y-4">
                    {/* Họ và tên */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700">Họ *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700">Tên *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Số điện thoại */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Số điện thoại *</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Mật khẩu */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mật khẩu *</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    {/* Nút đăng ký */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
                    >
                        Đăng ký ngay
                    </button>
                </form>

                {/* Đăng nhập bằng MXH */}
                <div className="mt-6 text-center">
                    <div className="relative flex py-3 items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">Hoặc</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="flex items-center px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                            Facebook
                        </button>
                        <button className="flex items-center px-6 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition">
                            Google
                        </button>
                    </div>
                    <p className="mt-6 text-sm text-gray-600">
                        Đã có tài khoản? <span className="text-yellow-600 font-bold cursor-pointer hover:underline" onClick={() => navigate('/login')}>Đăng nhập</span>
                    </p>
                </div>
            </div>
        </div>
    );
}