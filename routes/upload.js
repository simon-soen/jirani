const upload = require("../controllers/uploadController")
const express = require("express")
const router = express.Router()



router.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      res.status(400).json({ success: false, message: 'No file uploaded' });
      return;
    }

    res.json({ success: true, message: 'File uploaded successfully', fileId: file.id });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ success: false, message: 'Failed to upload file' });
  }
});

module.exports = router;