// Imports
const cloudinary = require('cloudinary').v2;

// Function to delete file from Cloudinary
const deleteFile = (url) => {
  // Split the provided URL to extract relevant parts
  const urlCloudinary = url.split('/');
  // Extract the filename without extension
  const fileName = urlCloudinary.at(-1).split('.')[0];

  // Construct the public_id based on folder name and extracted filename
  let public_id = `${urlCloudinary.at(-2)}/${fileName}}`;

  // Use Cloudinary's uploader.destroy method to delete the image
  cloudinary.uploader.destroy(public_id, (error, result) => {
    if (error) {
      console.error(`Error deleting image: ${error}`);
    } else {
      console.log('Image deleted');
    }
  });
};

// Exports
module.exports = { deleteFile };
