const {
  createSleeve,
  getAllSleeves,
  getAllSleevesByGameId,
  getSleeveById,
  updateSleeveById,
  deleteSleeveById,
  useSleeve,
  revertSleeveUsage,
} = require('../models/sleeve');

const create = async (req, res) => {
  try {
    const newSleeve = await createSleeve(req.body);
    console.log('NEW SLEEVE CREATED');
    res.status(201).json(newSleeve);
  } catch (error) {
    console.log('ERROR WHILE CREATING A SLEEVE');
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const sleeves = await getAllSleeves();
    res.json(sleeves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  
const getSleeve = async (req, res) => {
  try {
    const sleeveId = req.params.id;
    const sleeve = await getSleeveById(sleeveId);

    if (!sleeve) {
      return res.status(404).json({ message: 'Sleeve not found' });
    }

    res.json(sleeve);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSleeve = async (req, res) => {
  try {
    const sleeveId = req.params.id;
    const updatedSleeveData = req.body;

    // Update the sleeve by ID
    const updatedSleeve = await updateSleeveById(sleeveId, updatedSleeveData);

    // Check if the sleeve was found and updated successfully
    if (!updatedSleeve) {
      return res.status  (404).json({ message: 'Sleeve not found' });
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

    // Delete the sleeve by ID
    const deletedSleeve = await deleteSleeveById(sleeveId);

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

const getSleevesByGame = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const sleeves = await getAllSleevesByGameId(gameId);

    res.json(sleeves);
  } catch (error) {
    console.log('Error getting sleeves by Game ID:', error.message);
    res.status(500).json({ error: error.message });
  }
};

const sleeveGame = async (req, res) => {
  const { sleeveId} = req.params;
  try {
    const usedSleeve = await useSleeve(sleeveId);
    // ... additional logic if needed
    res.json({ message: 'Sleeve used successfully', usedSleeve });
  } catch (error) {
    console.error('Error using sleeve:', error);
    res.status(500).json({ error: error.message });
  }
};

const unsleeveGame = async (req, res) => {
  const { sleeveId } = req.params;
  try {
    await revertSleeveUsage(sleeveId);
    res.json({ message: 'Sleeve usage reverted successfully' });
  } catch (error) {
    console.error('Error reverting sleeve usage:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getSleeve,
  updateSleeve,
  deleteSleeve,
  getSleevesByGame,
  sleeveGame,
  unsleeveGame,
};