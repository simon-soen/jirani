const upload = require("../controllers/uploadController")
const express = require("express")
const router = express.Router()

router.post("/", upload.single("file"), (req, res) => {
    if (req.file === undefined) return res.send("you must select a file");
    const imgUrl = `http://localhost:3000/api/${req.file.filename}`;
    return res.send(imgUrl);
})
module.exports = router;