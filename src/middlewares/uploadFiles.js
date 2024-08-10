// Imports
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Function to upload images to Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'TitivillusBookStore',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  },
});

const upload = multer({ storage });

// Exports
module.exports = upload;
