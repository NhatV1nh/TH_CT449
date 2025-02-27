// Import module Express để tạo router
const express = require("express");
// Import controller chứa các hàm xử lý logic của API
const contacts = require("../controllers/contact.controller");

// Tạo một đối tượng router từ Express
const router = express.Router();


router.route("/")
    .get(contacts.findAll)// Lấy danh sách tất cả contacts
    .post(contacts.create)// Tạo mới một contact
    .delete(contacts.deleteAll);// Xóa tất cả contacts

    //GET /favorite → Gọi contacts.findAllFavorite để lấy danh sách các danh bạ được đánh dấu là yêu thích.
router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)   // Lấy một contact theo ID
    .put(contacts.update)   // Cập nhật contact theo ID
    .delete(contacts.delete);// Xóa contact theo ID

// Xuất router để sử dụng trong ứng dụng chính
module.exports = router;
