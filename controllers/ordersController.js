const Order = require('../models/Order');
const Product = require('../models/Products');
module.exports = {

    addOrder: async (req, res) => {
        try {
            // Assuming you have user information stored in req.user from authentication middleware
            const userId = req.user.id;

            // Assuming you have product details in the request body
            const { productId, quantity, subtotal, total, payment_status } = req.body;

            // Fetching product details to get the supplierId
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            const supplierId = product.supplierId;

            // Create a new order
            const newOrder = new Order({
                userId,
                supplierId,
                productId,
                quantity,
                subtotal,
                total,
                delivery_status: "Pending", // Default delivery status
                payment_status,
            });

            // Save the order to the database
            const savedOrder = await newOrder.save();

            res.status(201).json(savedOrder);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },







    getUserOrders : async(req, res) => {
        const userId = req.params.userId;

        try{
            const userorder = await Order.find({userId})
                .populate({
                    path: 'productId',
                    select:"-description -product_location"

                })
                .exec();

                res.status(200).json(userorder)
        } catch(error){
            res.status(500).json(error)
        }

    }
}