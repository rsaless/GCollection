const { createPicture, getAllPicturesByGameId, getPictureById, updatePictureById, deletePictureById } = require('../models/picture');

const create = async (req, res) => {
  try {
    const newPicture = await createPicture(req.body);
    console.log('NEW PICTURE CREATED');
    res.status(201).json(newPicture);
  } catch (error) {
    console.log('ERROR WHILE CREATING A PICTURE');
    res.status(500).json({ error: error.message });
  }
};

const getAllByGameId = async (req, res) => {
  try {
    const pictures = await getAllPicturesByGameId(req.params.gameid);
    res.json(pictures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPicture = async (req, res) => {
  try {
    const picture = await getPictureById(req.params.id);
    res.json(picture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePicture = async (req, res) => {
  try {
    const pictureId = req.params.id;
    const updatedPictureData = req.body;
    const updatedPicture = await updatePictureById(pictureId, updatedPictureData);
    res.json(updatedPicture);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

const deletePicture = async (req, res) => {
  try {
    const pictureId = req.params.id;
    const deletedPicture = await deletePictureById(pictureId);
    res.json(deletedPicture);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAllByGameId,
  getPicture,
  updatePicture,
  deletePicture,
};

