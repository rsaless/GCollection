const {Game, Sleeve} = require('../models/Game');

const create = async (req, res) => {
    try {
      const newSleeve = await Sleeve.create(req.body);
      res.status(201).json(newSleeve);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
const getAll = async (req, res) => {
    try {
      const sleeves = await Sleeve.find();
      res.json(sleeves);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
const getSleeve = async (req, res) => {
    try {
        const sleeve = await Sleeve.findById(req.params.id);
        res.json(sleeve);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const updateSleeve = async (req, res) => {
  try {
    const sleeveId = req.params.id;
    const updatedSleeveData = req.body;

    // Find the sleeve by ID and update it
    const updatedSleeve = await Sleeve.findByIdAndUpdate(sleeveId, updatedSleeveData, {
      new: true,
    });

    // Check if the sleeve was found and updated successfully
    if (!updatedSleeve) {
      return res.status(404).json({ message: 'Sleeve not found' });
    }

    // Respond with the updated sleeve data
    res.json(updatedSleeve);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

const deleteSleeve = async (req, res) => {
  try {
    const sleeveId = req.params.id;

    // Find the sleeve by ID and delete it
    const deletedSleeve = await Sleeve.findByIdAndDelete(sleeveId);

    // Check if the sleeve was found and deleted successfully
    if (!deletedSleeve) {
      return res.status(404).json({ message: 'Sleeve not found' });
    }

    // Respond with a success message
    res.json({ message: 'Sleeve deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

const sleeveGame = async (req, res) => {
    try {
        const { sleeveId, gameId } = req.params;
        const { sleeveSize, quantity } = req.body;
    
        const game = await Game.findById(gameId);
    
        // Find the sleeve in the game's sleeves array based on name, brand, and size
        const sleeveInGame = game.sleeves.find(
          (sleeve) => sleeve._id == sleeveId && sleeve.size === sleeveSize
        );
    
        if (!sleeveInGame || sleeveInGame.quantity < quantity) {
          res.status(400).json({ error: 'Insufficient sleeves in stock for the selected size' });
          return;
        }
    
        // Decrement the sleeve quantity in the game based on the selected size
        sleeveInGame.quantity -= quantity;
    
        // Update the game with the modified sleeves array
        const updatedGame = await Game.findByIdAndUpdate(gameId, game, { new: true });
    
        // Update the total quantity of the corresponding Sleeve document based on name, brand, and size
        await Sleeve.findOneAndUpdate(
          { _id: sleeveId, size: sleeveSize },
          { $inc: { quantity: -quantity } }
        );
    
        res.json(updatedGame);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const unsleeveGame = async (req, res) => {
    try {
        const { sleeveId, gameId } = req.params;
        const { sleeveSize, quantity } = req.body;
    
        const game = await Game.findById(gameId);
    
        // Find the sleeve in the game's sleeves array based on name, brand, and size
        const sleeveInGame = game.sleeves.find(
          (sleeve) => sleeve._id == sleeveId && sleeve.size === sleeveSize
        );
    
        if (!sleeveInGame) {
          res.status(400).json({ error: 'Sleeve not found in the game' });
          return;
        }
    
        // Increment the sleeve quantity in the game based on the selected size
        sleeveInGame.quantity += quantity;
    
        // Update the game with the modified sleeves array
        const updatedGame = await Game.findByIdAndUpdate(gameId, game, { new: true });
    
        // Update the total quantity of the corresponding Sleeve document based on name, brand, and size
        await Sleeve.findOneAndUpdate(
          { _id: sleeveId, size: sleeveSize },
          { $inc: { quantity } }
        );
    
        res.json(updatedGame);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

module.exports = {
    create,
    getAll,
    getSleeve,
    updateSleeve,
    deleteSleeve,
    sleeveGame,
    unsleeveGame
};