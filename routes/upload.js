const upload = require("../controllers/uploadController")
const express = require("express")
const router = express.Router()
const SERVER_URL = process.env.SERVER_URL

router.post("/", upload.single("file"), (req, res) => {
    if (req.file === undefined) return res.send("you must select a file");
    const imgUrl = `${SERVER_URL}/api/${req.file.filename}`;
    return res.send(imgUrl);
})
module.exports = router;