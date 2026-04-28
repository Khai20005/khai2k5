import React from 'react'
import { Link } from 'react-router-dom';
import './Introduct.css';

export default function Introduct() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <div className="w-full bg-gradient-to-b from-gray-100 to-white py-3">
                <div className="max-w-5xl mx-auto px-4 flex items-center space-x-3 text-base">
                    <Link to='/' className="text-gray-600 hover:bleu font-medium">
                        Trang chủ
                    </Link>

                    <span className="">|</span>
                    <h2> Giới thiệu</h2>
                </div>
            </div>
            {/* Hero */}
            <section id="home" className="bg-gradient-to-r from-amber-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Winehourse — Nâng tầm trải nghiệm rượu</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            “Rượu” không đơn thuần là một thức uống — rượu có hồn. Winehourse sinh ra để giúp bạn hiểu và cảm nhận cái hồn ấy,
                            thông qua những dòng rượu hảo hạng, mới lạ và kiến thức chuyên sâu về văn hoá rượu.
                        </p>
                    </div>


                    <div className="order-first lg:order-last">
                        <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white">
                            <img src="http://bizweb.dktcdn.net/100/022/044/products/ruou38-c7a1b352-5ed6-49c0-9b8a-ad67cfaccc36.jpg?v=1446168342000" alt="Hero Image" className="w-full h-auto" />
                        </div>
                        <p className="mt-3 text-xs text-gray-500">Hình ảnh minh họa — thay bằng ảnh sản phẩm thực tế trong thư mục public/images.</p>
                    </div>
                </div>
            </section>


            {/* About */}
            <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow p-6 md:p-10">
                    <h3 className="text-2xl font-bold">Giới thiệu</h3>
                    <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Rượu bị ảnh hưởng bởi lịch sử, văn hoá, địa lý, nhân chủng học,…vì vậy lượng kiến thức về rượu thật rộng lớn. Do đó, “Winehourse” không chỉ đơn thuần là một Website bán hàng trực tuyến trong lĩnh vực rượu, “Winehourse” còn mong muốn góp phần tập hợp, hệ thống các kiến thức về văn hóa, lịch sử, địa lý... cho đến cách thức lựa chọn, bảo quản, thưởng thức... các dòng rượu khác nhau trên thế giới để những người say mê hoặc muốn tìm hiểu về “văn hóa rượu”có thể cùng chia sẻ, nâng cao tầm hiểu biết.

                            Ngày nay với thủ thuật làm giả tinh vi, những người làm rượu giả có thể cho ra đời những chai rượu giả khó có thể phát hiện. Vì vậy tình hình rượu ngoại trên thị trường thật phức tạp, khách hàng muốn mua một chai rượu ngon để thưởng thức hoặc làm quà biếu thì cũng rất lúng túng.
                            Một vấn đề khó khăn nữa là những chai rượu khi không được bảo quản tốt: như trưng bày quá lâu, nơi cất giữ nóng, ẩm, ánh sáng quá cao… làm cho những chai rượu bị biến đổi về phẩm chất, hoặc sinh ra những chất độc hại.

                            Khi mua hàng tại siêu thị rượu ngoại online của chúng tôi, quý khách sẽ được khám phá một thế giới phong phú về rượu, từ các loại rượu ngoại như: rượu mạnh Châu Âu, rượu vang, …đến các loại rượu trong nước. Chúng tôi cung cấp những chai rượu được nhập chính ngạch và từ chính hãng, mỗi chai rượu được chúng tôi cung cấp phải luôn có xuất xứ rõ ràng, đảm bảo chất lượng và luôn được bảo quản tốt để có thể đáp ứng về nhu cầu của quý khách một cách tốt nhất.

                            Chúng tôi chuyên phân phối sỹ và lẻ các sản phẩm rượu ngoại. Nếu Quý khách hàng mua rượu giá sỹ vui lòng liên hệ để có giá tốt nhất.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
