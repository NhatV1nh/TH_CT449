// Xử lý yêu cầu tạo một bản ghi mới
exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

// Xử lý yêu cầu lấy tất cả các bản ghi
exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" });
};

// Xử lý yêu cầu lấy một bản ghi theo ID
exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

// Xử lý yêu cầu cập nhật một bản ghi theo ID
exports.update = (req, res) => {
    res.send({ message: "update handler" });
};

// Xử lý yêu cầu xóa một bản ghi theo ID
exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

// Xử lý yêu cầu xóa tất cả bản ghi
exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" });
};

// Xử lý yêu cầu lấy tất cả bản ghi yêu thích
exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" });
};