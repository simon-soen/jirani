const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

require('dotenv').config()

// Configure AWS S3 client
const s3Client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
  },
});


// Configure multer-s3 storage
const storage = multerS3({
  s3: s3Client,
  bucket: "bucketeer-897a58fa-5a33-4dbf-aa4a-7ab2e1c7ea29",
  contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically set the content type of the uploaded object
  key: (req, file, cb) => {
    // Set the key (filename) of the uploaded object
    cb(null, Date().toString() + "-" + file.originalname);
  },
});

// Create multer instance with multer-s3 storage
const upload = multer({ storage });

module.exports = upload;
