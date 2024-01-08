const Product = require('../models/Products');
const Cart = require('../models/Cart');


module.exports = {
 
   addTocart: async (req, res) => {
       const userId = req.params.id;   
       const {cartItem, quantity } = req.body;
   
       try {
           const cart = await Cart.findOne({ userId });
   
           if (cart) {
               const existingProductIndex = cart.products.findIndex(
                   (product) => product.cartItem.toString() === cartItem
               );
   
               if (existingProductIndex !== -1) {
                   // Product already exists in the cart, update quantity
                   cart.products[existingProductIndex].quantity += quantity;
               } else {
                   // Product does not exist in the cart, add it
                   cart.products.push({ cartItem, quantity });
               }
   
               await cart.save();
               res.status(200).json("Product added to cart");
           } else {
               // Cart doesn't exist for the user, create a new cart
               const newCart = new Cart({
                   userId,
                   products: [{ cartItem, quantity }],
               });
   
               await newCart.save();
               res.status(200).json("Product added to cart");
           }
       } catch (error) {
           console.error('Error adding product to cart:', error);
           res.status(500).json({ error: 'Internal Server Error' });
       }
   },
   
   getcart: async(req, res) => {
       const userId = req.params.id;
       console.log('Received User ID:', userId);
           try{
           const cart = await Cart.findOne({userId})
                 .populate("products.cartItem", "_id title supplier price imageUrl");


           if (!cart) {
           return res.status(404).json({ error: 'Cart not found' });
           }
           res.status(200).json(cart);

       } catch(error){
           console.error('Error retrieving cart:', error);
           res.status(500).json({ error: 'Internal Server Error' });
       }
   },

   
   deleteCartItem: async (req, res) => {
       const userId = req.params.userId;
       const cartItemId = req.params.cartItemId;

       try {
           // Find the user's cart
           const userCart = await Cart.findOne({ userId });

           if (!userCart) {
               return res.status(404).json({ error: 'User cart not found' });
           }

           // Remove the cart item by ID
           userCart.products = userCart.products.filter(item => {
               return item.cartItem && item.cartItem.toString() !== cartItemId;
           });

           // Save the updated cart
           await userCart.save();

           res.status(200).json({ message: 'Cart item deleted successfully' });
       } catch (error) {
           console.error('Error deleting cart item:', error);
           res.status(500).json({ error: 'Failed to delete the cart item' });
       }
   },

     
   

   decrementCartItem: async(req, res) => {
       const {userId, cartItem} = req.body;

       try{
           const cart = await Cart.findOne({userId});

           if(!cart){
               return res.status(404).json("Cart not found") 
           }

           const existingProduct = cart.products.find(
               (product) => product.cartItem.toString() === cartItem
           );

           if(!existingProduct){
               return res.status(404).json("Product not found in cart") 
           }

           if(existingProduct.quantity === 1){
               cart.products = cart.products.filter(
                   (product) => product.cartItem.toString() !== cartItem
               )
           }else{
               existingProduct.quantity -= 1;
           }

           await cart.save();

           if(existingProduct.quantity ===0){
               await Cart.updateOne(
                   {userId},
                   {$pull: {products: { cartItem}}},
               )
           }

           res.status(200).json("Product updated") 

       }catch(error){
           res.status(500).json(error)
       }
   }, 
   
   countCartItems: async(req, res) => {
       const userId = req.params.id;

       try{
           const cart = await Cart.findOne({userId});

           if(!cart){
               return res.status(404).json("Cart not found") 
           }

           const itemCount = cart.products.reduce((total, product) => total + product.quantity, 0);
           

           res.status(200).json(itemCount)

       }catch(error){
           console.error('Error counting cart items:', error);
           res.status(500).json({ error: 'Internal Server Error' });
       }
   }
}