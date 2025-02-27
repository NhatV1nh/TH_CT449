// Import module Express để tạo ứng dụng web
const express = require("express");
// Import module CORS để cho phép giao tiếp giữa các nguồn gốc khác nhau (Cross-Origin Resource Sharing)
const cors = require("cors");


// Khởi tạo một ứng dụng Express
const app = express()

// Sử dụng middleware CORS để cho phép mọi nguồn gốc truy cập API
app.use(cors());
// Sử dụng middleware để phân tích dữ liệu JSON từ request body
app.use(express.json());

// Định nghĩa một route GET tại endpoint "/" (trang chủ)
app.get("/", (req, res) => {
    // Gửi phản hồi dạng JSON khi người dùng truy cập vào "/"
    res.json({ message: "Welcome to contact book application"});
});


// Xuất module `app` để có thể sử dụng ở file khác (ví dụ: để khởi chạy server)
module.exports = app;
