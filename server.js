// Import ứng dụng Express từ file app.js (hoặc app.ts nếu dùng TypeScript)
const app = require("./app");
// Import file cấu hình (config) để lấy thông tin cấu hình ứng dụng, ví dụ như PORT
const config = require("./app/config");

//start server
// Khai báo biến PORT, lấy giá trị cổng từ file cấu hình
const PORT = config.app.port;

// Bắt đầu server và lắng nghe trên cổng PORT
app.listen(PORT,()=>{

// In ra console để thông báo rằng server đã chạy thành công
    console.log(`Server is running on port ${PORT}.`);
});