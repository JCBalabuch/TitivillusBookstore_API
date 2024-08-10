// Imports
const cloudinary = require('cloudinary').v2;

// Function to connect to Cloudinary
const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    console.log('Succesfully connected to cloudinary');
  } catch (error) {
    console.error('Cannot connect to cloudinary');
  }
};

// Exports
module.exports = { connectCloudinary };
