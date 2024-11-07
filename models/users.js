import mongoose from 'mongoose';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // This field is required
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String
    },
    age: {
        type: String
    },
    m_status: {
        type: String
    }
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;
