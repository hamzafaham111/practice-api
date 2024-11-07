import User from "../models/users.js";
import Product from "./../models/products.js"

// Define resolvers for the schema fields
const resolvers = {
    Query: {
        // Fetch all users
        users: async () => {
            return await User.find();
        },
        // Fetch a specific user by ID
        user: async (_, { id }) => {
            return await User.findById(id);
        },
        // Fetch all products
        products: async () => {
            return await Product.find().populate('user');
        },
        
        // Fetch a specific product by ID
        product: async (_, { id }) => {
            return await Product.findById(id).populate('user');
        }
    },
    
    Mutation: {
        createUser: async (_, { name, email, city, age, m_status }) => {
            const newUser = new User({
                name,
                email,
                city,
                age,
                m_status
            });
            return await newUser.save(); // Save the new user in MongoDB
        },

        createProduct: async (_, { name, price, description, category, userId }) => {
            // Find the user to associate with the product
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }

            const newProduct = new Product({
                name,
                price,
                description,
                category,
                user: userId // Link product to the user by ID
            });
            return await newProduct.save(); // Save the new product in MongoDB
        }
    }

};

export default resolvers