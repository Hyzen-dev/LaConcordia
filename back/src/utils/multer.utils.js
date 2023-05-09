const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        const randomName = Math.random().toString(36).substring(2, 15);
        const format = file.mimetype.split('/')[1];
        cb(null, `${Date.now()}-${randomName}.${format}`)
    }
});

const upload = multer({ storage });

module.exports = upload;