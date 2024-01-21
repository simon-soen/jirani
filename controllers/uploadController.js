
const AWS = require('aws-sdk');
const fs = require('fs');

// Configure AWS credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Create an instance of the S3 service
const s3 = new AWS.S3();

// Function to upload a file to the bucketeer
const uploadFile = (filePath, bucketName, keyName) => {
  // Read the file from the local file system
  const fileContent = fs.readFileSync(filePath);

  // Set the parameters for the S3 upload
  const params = {
    Bucket: bucketName,
    Key: keyName,
    Body: fileContent,
  };

  // Upload the file to the bucketeer
  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading file:', err);
    } else {
      console.log('File uploaded successfully:', data.Location);
    }
  });
};

// Usage example
const filePath = '/path/to/file.txt';
const bucketName = 'your-bucketeer-bucket-name';
const keyName = 'file.txt';

uploadFile(filePath, bucketName, keyName);
