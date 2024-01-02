const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const { extname } = require('path'); // Add this line to import extname function

const storage = new GridFsStorage({
  url: 'mongodb+srv://desmond:dell2430@tom.u7ovfmj.mongodb.net/TOM',
  file: (req, file) => {
    const filename = Date.now() + extname(file.originalname);
    return { filename, bucketName: 'uploads' };
  },
});
const upload = multer({ storage });

module.exports = upload;