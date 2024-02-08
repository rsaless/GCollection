const Game = require('../models/Game');

const createGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);
    console.log("NEW GAME CREATED");
    res.status(201).json(newGame);
  } catch (error) {
    console.log("ERROR WHILE CREATING A GAME");
    console.log(req.body);
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGame = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        res.json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const updatedGameData = req.body;

    // Find the game by ID and update it
    const updatedGame = await Game.findByIdAndUpdate(gameId, updatedGameData, {
      new: true,
    });

    // Check if the game was found and updated successfully
    if (!updatedGame) {
      return res.status(404).json({ message: 'Game not found' });
    }

    // Respond with the updated game data
    res.json(updatedGame);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

const deleteGame = async (req, res) => {
  try {
    const gameId = req.params.id;

    // Find the game by ID and delete it
    const deletedGame = await Game.findByIdAndDelete(gameId);

    // Check if the game was found and deleted successfully
    if (!deletedGame) {
      return res.status(404).json({ message: 'Game not found' });
    }

    // Respond with a success message
    res.json({ message: 'Game deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createGame,
    getAll,
    getGame,
    updateGame,
    deleteGame
  };