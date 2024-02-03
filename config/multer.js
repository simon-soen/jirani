const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

require('dotenv').config()

// Configure AWS S3 client
const region = process.env.BUCKETEER_AWS_REGION; // Replace AWS_REGION with your actual environment variable name

const s3Client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
  },
});


// Configure multer-s3 storage
const bucketName = process.env.BUCKETEER_BUCKET_NAME; // Replace BUCKET_NAME with your actual environment variable name

const storage = multerS3({
  s3: s3Client,
  bucket: bucketName,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    cb(null, "products/" + Date.now().toString() + "-" + file.originalname);
  },
});

// Create multer instance with multer-s3 storage
const upload = multer({ storage });

module.exports = upload;
    

