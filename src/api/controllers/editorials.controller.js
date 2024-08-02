const Editorial = require('../models/editorials.model');

const getEditorials = async (req, res, next) => {
  try {
    const editorials = await Editorial.find()
      .populate('books')
      .populate('authors');
    return res.status(200).json(editorials);
  } catch (error) {
    return res.status(400).json(`Error getting Editorials: ${error}`);
  }
};

const getEditorial = async (req, res, next) => {
  try {
    const { id } = req.params;

    const editorial = await Editorial.findById(id)
      .populate('books')
      .populate('authors');

    if (!editorial) {
      return res.status(404).json('Editorial not found');
    }

    return res.status(200).json(editorial);
  } catch (error) {
    return res.status(400).json(`Error getting the Editorial: ${error}`);
  }
};

const createEditorial = async (req, res, next) => {
  try {
    const { name } = req.body;

    const existingEditorial = await Editorial.findOne({ name });

    if (existingEditorial) {
      return res.status(400).json(`The Editorial ${name}, already exists.`);
    }

    const newEditorial = new Editorial(req.body);
    const editorialSaved = await newEditorial.save();
    return res.status(201).json(editorialSaved);
  } catch (error) {
    return res.status(400).json(`Error creating the Editorial: ${error}`);
  }
};

const updateEditorial = async (req, res, next) => {
  try {
    const { id } = req.params;

    // const newEditorial = new Editorial(req.body);
    // newEditorial._id = id;

    const editorialUpdated = await Editorial.findByIdAndUpdate(id, req.params, {
      new: true,
      runValidators: true,
    });

    if (!editorialUpdated) {
      return res.status(404).json('Editorial not found');
    }

    return res.status(201).json(editorialUpdated);
  } catch (error) {
    return res.status(400).json(`Error updating the Editorial: ${error}`);
  }
};

const deleteEditorial = async (req, res, next) => {
  try {
    const { id } = req.params;

    const editorialDeleted = await Editorial.findByIdAndDelete(id);

    if (!editorialDeleted) {
      return res.status(404).json('Editorial nt found');
    }

    return res.status(200).json({
      message: 'Editorial has been deleted',
      element: editorialDeleted,
    });
  } catch (error) {
    return res.status(400).json(`Error updating the Editorial: ${error}`);
  }
};

module.exports = {
  getEditorials,
  getEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
};
