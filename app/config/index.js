// Khai báo một object `config` để chứa cấu hình của ứng dụng
const config = {
    
    app:{
     // Định nghĩa cổng (port) mà ứng dụng sẽ chạy

    // Nếu biến môi trường `POST` được đặt, sử dụng nó; nếu không, dùng cổng mặc định là 3000
        port: process.env.POST || 3000,
    }
};

// Xuất module `config` để có thể sử dụng trong các file khác, chẳng hạn như `server.js`
module.exports = config;
