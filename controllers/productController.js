const Product = require('../models/Products');


module.exports = {
    
createProduct: async (req, res) => {
    const userId = req.params.id;

    try {
        const {
            title,
            price,
            description,
            category,
            product_location,
            
        } = req.body;

        const supplier = userId; // Assuming the supplier is derived from userId

        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required' });
          }

        const imageUrl = req.file.location
        //`https://s3.amazonaws.com/bucketeer-897a58fa-5a33-4dbf-aa4a-7ab2e1c7ea29/${new Date().toString()}-${req.file.originalname}`;
        console.log(imageUrl)

    
        const newProduct = new Product({
            userId,
            title,
            supplier,
            price,
            imageUrl,
            description,
            product_location,
            category,
        });

        await newProduct.save();
        res.status(201).json(newProduct);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Failed to create a product" });
    }
},
            
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find().sort({createdAt: -1});
            res.status(200).json(products);
        } catch (error) { 
            res.status(500).json("failed to get th products");
        }
    }, 
        
    getProduct: async (req, res) => {
        const userId = req.params.id;
        console.log('User ID:', userId);
    
        try {
            const products = await Product.find({ supplier: userId });
            console.log(products);
    
            if (!products || products.length === 0) {
                return res.status(404).json({ error: 'Products not found' });
            }
    
            res.status(200).json(products);
        } catch (error) {
            console.error('Error retrieving Favorites:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    
    searchProduct: async (req, res) => {
        try {
            const result = await Product.aggregate(
                [
                    {
                      $search: {
                        index: "tom",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json("failed to get the product");
        }
    },

    getProductsByCategory: async (req, res) => {
        try{
            const {category} = req.params;
            if(!category){
                res.status(400).json("Please provide a category");
            }

            const products = await Product.find({category});
            res.status(200).json(products);
        } catch(error){
            res.status(500).json("failed to get the product");
        }
    },

    deleteProduct: async (req, res) => {
        const supplierId = req.params.id;
        const productId = req.params.productId;

        console.log('User ID:', supplierId);
        console.log('Product ID:', productId);
        try {
            // Check if the product exists
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            // Check if the user is the creator of the product
            if (!product || product.supplier.replace(/"/g, '') !== supplierId) {
                return res.status(403).json({ error: 'Unauthorized: You are not the creator of this product' });
            }
            

            // Delete the product
            await Product.findByIdAndDelete(productId);

            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Failed to delete the product' });
        }
    },

}