const Product = require('../models/Products');
const Favourite = require('../models/Favourite');


module.exports = {
 
    addToFav: async (req, res) => {
      const userId = req.params.id;   
      const { favItem } = req.body;
  
      try {
          let favourite = await Favourite.findOne({ userId });
  
          if (!favourite) {
              // Favorite doesn't exist for the user, create a new favorite
              const newFavourite = new Favourite({
                  userId,
                  products: [{ favItem }],
              });
  
              await newFavourite.save();
              return res.status(200).json("Product added to favorite");
          }
  
          if (!favourite.products) {
              favourite.products = []; // Initialize the products array if it's undefined
          }
  
          const existingProduct = favourite.products.find(
              (product) => product.favItem && product.favItem.toString() === favItem.toString()
          );
  
          if (existingProduct) {
              // Product already exists in the favourite, return a response
              return res.status(200).json("Item already exists in favorite");
          } else {
              // Product does not exist in the favourite, add it
              favourite.products.push({ favItem });
          }
  
          await favourite.save();
          return res.status(200).json("Product added to favorite");
      } catch (error) {
          console.error('Error adding product to favorite:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
      }
  },
  

      
   getFavItem: async(req, res) => {
        const userId = req.params.id;

       try{
           const favourite = await Favourite.findOne({userId})
                 .populate("products.favItem", "_id title supplier price imageUrl");
                 
            if (!favourite) {
            return res.status(404).json({ error: 'Favourite not found' });
            }
           res.status(200).json(favourite)

        } catch(error){
            console.error('Error retrieving Favoutes:', error);
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
