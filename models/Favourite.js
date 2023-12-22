const mongoose = require('mongoose');

const FavouriteSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [
        {
            favItem: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product',
            }
            

        } 
    ]
         
}, { timestamps: true });

module.exports = mongoose.model('Favourite', FavouriteSchema);  