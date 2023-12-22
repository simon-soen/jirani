const Product =require('../models/Products');

module.exports = {
    createProduct: async (req, res) => {
      try{  
        const {
            title,
            price,
            imageUrl,
            description,
            supplier,
            category,
            product_location
        } = req.body;

        const newProduct = new Product({
            title,
            supplier,
            price,
            imageUrl,
            description,
            product_location,
            category,

            
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);


        } catch (error) {
            console.log(error);
           
            res.status(500).json("Failed to create a product");

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
        try {
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json("failed to get the product");
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
    }
}