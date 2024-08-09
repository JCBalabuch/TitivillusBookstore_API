const cloudinary = require('cloudinary').v2;

const deleteFile = (url) => {
  const urlCloudinary = url.split('/');
  const fileName = urlCloudinary.at(-1).split('.')[0];

  let public_id = `${urlCloudinary.at(-2)}/${fileName}}`;

  cloudinary.uploader.destroy(public_id, () => {
    console.log('Image deleted');
  });
};

module.exports = { deleteFile };
