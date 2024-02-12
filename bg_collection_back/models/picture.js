const {pool} = require('../db');

const createPicture = async (url, gameId) => {
  try {
    const query = 'INSERT INTO picture (url, game_id) VALUES ($1, $2) RETURNING *;';
    const values = [url, gameId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error creating picture:', error.message);
    throw error;
  }
};

const getAllPicturesByGameId = async (gameId) => {
  try {
    const query = 'SELECT * FROM picture WHERE game_id = $1;';
    const values = [gameId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.log('Error getting all pictures by game ID:', error.message);
    throw error;
  }
};

const getPictureById = async (pictureId) => {
  try {
    const query = 'SELECT * FROM picture WHERE id = $1;';
    const values = [pictureId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error getting picture by ID:', error.message);
    throw error;
  }
};

const updatePictureById = async (pictureId, updatedPictureData) => {
  try {
    const query = 'UPDATE picture SET url = $1, game_id = $2 WHERE id = $3 RETURNING *;';
    const values = [updatedPictureData.url, updatedPictureData.game_id, pictureId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error updating picture by ID:', error.message);
    throw error;
  }
};

const deletePictureById = async (pictureId) => {
  try {
    const query = 'DELETE FROM picture WHERE id = $1 RETURNING *;';
    const values = [pictureId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error deleting picture by ID:', error.message);
    throw error;
  }
};


module.exports = {
  createPicture,
  getAllPicturesByGameId,
  getPictureById,
  updatePictureById,
  deletePictureById,
};