const {pool} = require('../db.js');

const createGame = async (gameData) => {
  try {
    const {
      name,
      base_game_id,
      status,
      purchase_location,
      original_price,
      current_price,
      min_players,
      max_players,
      uses_sleeve,
      silica_gel_indicator,
      rafael_played_indicator,
      sabrina_played_indicator,
    } = gameData;

    const query = `
      INSERT INTO game (
        name, base_game_id, status, purchase_location, original_price, 
        current_price, min_players, max_players, uses_sleeve, 
        silica_gel_indicator, rafael_played_indicator, sabrina_played_indicator
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *;
    `;

    const values = [
      name,
      base_game_id,
      status,
      purchase_location,
      original_price,
      current_price,
      min_players,
      max_players,
      uses_sleeve,
      silica_gel_indicator,
      rafael_played_indicator,
      sabrina_played_indicator,
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error creating game:', error.message);
    throw error;
  }
};

const getAllGames = async () => {
  try {
    const query = 'SELECT * FROM game;';
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.log('Error getting all games:', error.message);
    throw error;
  }
};

const getGameById = async (gameId) => {
  try {
    const query = 'SELECT * FROM game WHERE id = $1;';
    const values = [gameId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error getting game by ID:', error.message);
    throw error;
  }
};

const updateGameById = async (gameId, updatedGameData) => {
  try {
    const query = `
      UPDATE game
      SET
        name = $1,
        base_game_id = $2,
        status = $3,
        purchase_location = $4,
        original_price = $5,
        current_price = $6,
        min_players = $7,
        max_players = $8,
        uses_sleeve = $9,
        silica_gel_indicator = $10,
        rafael_played_indicator = $11,
        sabrina_played_indicator = $12
      WHERE id = $13
      RETURNING *;
    `;

    const values = [
      updatedGameData.name,
      updatedGameData.base_game_id,
      updatedGameData.status,
      updatedGameData.purchase_location,
      updatedGameData.original_price,
      updatedGameData.current_price,
      updatedGameData.min_players,
      updatedGameData.max_players,
      updatedGameData.uses_sleeve,
      updatedGameData.silica_gel_indicator,
      updatedGameData.rafael_played_indicator,
      updatedGameData.sabrina_played_indicator,
      gameId,
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error updating game by ID:', error.message);
    throw error;
  }
};

const deleteGameById = async (gameId) => {
  try {
    const query = 'DELETE FROM game WHERE id = $1 RETURNING *;';
    const values = [gameId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error deleting game by ID:', error.message);
    throw error;
  }
};

module.exports = {
  createGame,
  getAllGames,
  getGameById,
  updateGameById,
  deleteGameById,
};