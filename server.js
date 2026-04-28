const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// --- DỮ LIỆU GIẢ LẬP (Sẽ reset khi khởi động lại server) ---
let users = [
    { email: "admin@gmail.com", password: "123", firstName: "Admin" }
];

// ===================== HỆ THỐNG TÀI KHOẢN =====================

// 1. Đăng ký
app.post('/winehouse/register', (req, res) => {
    const { firstName, email, password } = req.body;
    if (users.find(u => u.email === email)) return res.status(400).json({ message: "Email đã tồn tại!" });
    users.push({ firstName, email, password });
    res.status(200).json({ message: "Đăng ký thành công!" });
});

// 2. Đăng nhập
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) res.status(200).json({ message: "Đăng nhập thành công!", user });
    else res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu!" });
});

// 3. Quên mật khẩu
app.post('/api/forgot-password', (req, res) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);
    if (user) res.json({ message: `Mật khẩu của bạn là: ${user.password}` });
    else res.status(404).json({ message: "Không tìm thấy email!" });
});

// ===================== HỆ THỐNG GIỎ HÀNG =====================

// Lấy danh sách sản phẩm
app.get('/winehouse/cart', (req, res) => res.json(cartItems));

// Sửa số lượng
app.put('/winehouse/cart/:id', (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    const item = cartItems.find(i => i.id === parseInt(id));
    if (item) item.quantity = quantity > 0 ? quantity : 1;
    res.json({ updatedCart: cartItems });
});

// Xóa sản phẩm
app.delete('/winehouse/cart/:id', (req, res) => {
    cartItems = cartItems.filter(item => item.id !== parseInt(req.params.id));
    res.json({ updatedCart: cartItems });
});

// Mua hàng (Thanh toán)
app.post('/winehouse/checkout', (req, res) => {
    cartItems = []; 
    res.json({ message: "Thanh toán thành công! Giỏ hàng đã được làm trống.", updatedCart: [] });
});

app.listen(8000, () => console.log("Server đang chạy tại http://localhost:8000"));