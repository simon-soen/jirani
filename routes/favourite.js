const router =require('express').Router();
const favouriteController = require('../controllers/favouriteController');


router.get("/find/:id", favouriteController.getFavItem);
router.post("/add/:id", favouriteController.addToFav);
router.delete("/:FavouriteItemId", favouriteController.deleteFavItem)





module.exports = router;