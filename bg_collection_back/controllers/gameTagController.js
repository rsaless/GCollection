const {   createGameTag, deleteGameTag,  getAllGameTagsByGameId,  getAllGameTagsByTagId,  deleteGameTagByGameId,  deleteGameTagByTagId, } = require('../models/gameTag');

const create = async (req, res) => {
  try {
    const newGameTag = await createGameTag(req.body);
    console.log('NEW GAME TAG CREATED');
    res.status(201).json(newGameTag);
  } catch (error) {
    console.log('ERROR WHILE CREATING A GAME TAG');
    res.status(500).json({ error: error.message });
  }
};

const deleteGT = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const tagId = req.params.tagId;

    // Call the method to delete the game tag
    const deletedGameTag = await deleteGameTag(gameId, tagId);

    // Check if the game tag was found and deleted successfully
    if (!deletedGameTag) {
      return res.status(404).json({ message: 'Game tag not found' });
    }

    // Respond with a success message
    res.json({ message: 'Game tag deleted successfully' });
  } catch (error) {
    console.error('Error deleting game tag:', error);
    res.status(500).json({ error: error.message });
  }
};

const getGameTagsByGame = async (req, res) => {
  const { gameId } = req.params;
  try {
    const gameTags = await getAllGameTagsByGameId(gameId);
    res.json(gameTags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGameTagsByTag = async (req, res) => {
  const { tagId } = req.params;
  try {
    const gameTags = await getAllGameTagsByTagId(tagId);
    res.json(gameTags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTagByTag = async (req, res) => {
  const { gameId, tagId } = req.params;
  try {
    await deleteGameTagByGameId(gameId, tagId);
    res.json({ message: 'Game tag deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

const deleteTagByGame = async (req, res) => {
  const { gameId, tagId } = req.params;
  try {
    await deleteGameTagByTagId(gameId, tagId);
    res.json({ message: 'Game tag deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  deleteGT,
  getGameTagsByGame,
  getGameTagsByTag,
  deleteTagByTag,
  deleteTagByGame,
};