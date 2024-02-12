const {
  createGame,
  getAllGames,
  getGameById,
  updateGameById,
  deleteGameById,
  // Add other imports here if needed
} = require('../models/game');

const create = async (req, res) => {
  try {
    const newGame = await createGame(req.body);
    console.log('NEW GAME CREATED');
    res.status(201).json(newGame);
  } catch (error) {
    console.log('ERROR WHILE CREATING A GAME');
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const games = await getAllGames();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const game = await getGameById(gameId);

    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    res.json(game);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const updatedGameData = req.body;

    // Update the game by ID
    const updatedGame = await updateGameById(gameId, updatedGameData);

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

    // Delete the game by ID
    const deletedGame = await deleteGameById(gameId);

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
  create,
  getAll,
  getGame,
  updateGame,
  deleteGame,
};