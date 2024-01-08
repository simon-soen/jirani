const Product = require('../models/Products');
const Favourite = require('../models/Favourite');


module.exports = {
 
   addToFav: async (req, res) => {
       const { userId, favItem} = req.body;
   
    try {
        const favourite = await Favourite.findOne({ userId });

        if (favourite) {
            const existingProductIndex = favourite.products.findIndex(
                (product) => product.favItem.toString() === favItem
            );

            if (existingProductIndex !== -1) {
                // Product already exists in the favourite, return alert
                return res.status(200).json("Item already exists in favourite");
            } else {
                // Product does not exist in the favourite, add it
                favourite.products.push({ favItem });
            }

            await favourite.save();
            return res.status(200).json("Product added to favourite");
        } else {
            // Favourite doesn't exist for the user, create a new favourite
            const newFavourite = new Favourite({
                userId,
                products: [{ favItem }],
            });

            await newFavourite.save();
            return res.status(200).json("Product added to favourite");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
   },
   
   getFavItem: async(req, res) => {
       const {userId,favItem} = req.params.id;

       try{
           const favourite = await Favourite.findOne({userId})
                 .populate("products.favItem", "_id title supplier price imageUrl");


           res.status(200).json(favourite)
       } catch(error){
           res.status(200).json(error)
       }
   },

   deleteFavItem: async(req, res) => {
     const FavouriteItemId = req.params.FavouriteItemId;

     try{
       const updatedFavourite = await Favourite.findOneAndUpdate(
           {'products._id': FavouriteItemId},
           {$pull: {products: {_id: FavouriteItemId}}},
           {new: true}
       );

       if(!updatedFavourite){
           return res.status(404).json("Favourite not found")
       }

       res.status(200).json(updatedFavourite)
     } catch(error){
       res.status(500).json(error)
     }
   },

    
}