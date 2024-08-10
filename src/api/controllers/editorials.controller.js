// Imports
const { deleteFile } = require('../../utils/deleteFiles');
const Editorial = require('../models/editorials.model');

// Get Editorials Function
const getEditorials = async (req, res, next) => {
  try {
    // Find all editorials
    const editorials = await Editorial.find()
      .populate('books')
      .populate('authors');

    // Ok response finding the editorials
    return res.status(200).json(editorials);
  } catch (error) {
    // Manage the errors finding the editorials
    return res
      .status(400)
      .json({ message: `Error getting Editorials: ${error}` });
  }
};

// Function to get one editorial
const getEditorial = async (req, res, next) => {
  try {
    // Find the editorial
    const { id } = req.params;

    const editorial = await Editorial.findById(id)
      .populate('books')
      .populate('authors');

    // Verify if editorial doesn't exist
    if (!editorial) {
      return res.status(404).json('Editorial not found');
    }

    // Ok response finding the editorial
    return res.status(200).json(editorial);
  } catch (error) {
    // Manage the errors finding the editorial
    return res
      .status(400)
      .json({ meessage: `Error getting the Editorial: ${error}` });
  }
};

// Function to create an editorial
const createEditorial = async (req, res, next) => {
  try {
    // Verify if editorial already exist
    const { name } = req.body;

    const existingEditorial = await Editorial.findOne({ name });

    if (existingEditorial) {
      return res
        .status(400)
        .json({ message: `The Editorial ${name}, already exists.` });
    }

    // Create a new editorial
    const newEditorial = new Editorial(req.body);

    // Handle image upload
    if (req.file) {
      newEditorial.logo = req.file.path;
    }

    // Save the new editorial to the DB
    const editorialSaved = await newEditorial.save();

    //Ok response when crating the new editorial
    return res.status(201).json(editorialSaved);
  } catch (error) {
    // Manage the errors creating the editorial
    return res
      .status(500)
      .json({ message: `Error creating the Editorial: ${error}` });
  }
};

// Function to update an editorial
const updateEditorial = async (req, res, next) => {
  try {
    // Collect the parameters to update the editorial
    const { id } = req.params;

    const editorialUpdated = await Editorial.findByIdAndUpdate(id, req.params, {
      new: true,
      runValidators: true,
    });

    // Handle image upload
    if (req.file) {
      editorialUpdated.logo = req.file.path;
    }

    // Checking if editorial doesn't exist
    if (!editorialUpdated) {
      return res.status(404).json('Editorial not found');
    }

    // Ok response when updating the editorial
    return res.status(201).json(editorialUpdated);
  } catch (error) {
    // Manage the errors updating the editorial
    return res
      .status(500)
      .json({ message: `Error updating the Editorial: ${error}` });
  }
};

// Function to delete editorial
const deleteEditorial = async (req, res, next) => {
  try {
    // Collect the id to delete the editorial
    const { id } = req.params;

    // Delete the editorial
    const editorialDeleted = await Editorial.findByIdAndDelete(id);

    // Delete logo's editorial from Cloudinary
    deleteFile(editorialDeleted.logo);

    // Manage if editorial doesn't exist
    if (!editorialDeleted) {
      return res.status(404).json('Editorial nt found');
    }

    // Ok response when deleting the editorial
    return res.status(200).json({
      message: 'Editorial has been deleted',
      element: editorialDeleted,
    });
  } catch (error) {
    // Manage the errors deleting the editorial
    return res.status(400).json(`Error updating the Editorial: ${error}`);
  }
};

// Exports
module.exports = {
  getEditorials,
  getEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
};
