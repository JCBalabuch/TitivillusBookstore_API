const mongoose = require('mongoose');

const editorialsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: {
      type: String,
      required: true,
      default: 'https://www.ucm.es/icae/file/no-image-available/?ver',
    },
    description: { type: String, required: true },
    country: { type: String },
    books: [{ type: mongoose.Types.ObjectId, ref: 'books' }],
    authors: [{ type: mongoose.Types.ObjectId, ref: 'authors' }],
  },
  {
    timestamps: true,
  }
);

editorialsSchema.statics.updateEditorial = async (
  editorialId,
  updateEditorial
) => {
  const editorial = await this.findByIdAndUpdate(editorialId, updateEditorial, {
    new: true,
  });
  return editorial;
};

const Editorial = mongoose.model('editorials', editorialsSchema, 'editorials');

module.exports = Editorial;
