const {pool} = require('../db.js');

const createGameTag = async (gameId, tagId) => {
  try {
    const query = 'INSERT INTO game_tag (game_id, tag_id) VALUES ($1, $2) RETURNING *;';
    const values = [gameId, tagId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error creating game_tag:', error.message);
    throw error;
  }
};

const getAllGameTagsByGameId = async (gameId) => {
  try {
    const query = 'SELECT * FROM game_tag WHERE game_id = $1;';
    const values = [gameId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.log('Error getting all game_tags by game ID:', error.message);
    throw error;
  }
};

const getAllGameTagsByTagId = async (tagId) => {
  try {
    const query = 'SELECT * FROM game_tag WHERE tag_id = $1;';
    const values = [tagId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.log('Error getting all game_tags by tag ID:', error.message);
    throw error;
  }
};

const deleteGameTagByGameId = async (gameId) => {
  try {
    const query = 'DELETE FROM game_tag WHERE game_id = $1 RETURNING *;';
    const values = [gameId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.log('Error deleting game_tags by game ID:', error.message);
    throw error;
  }
};

const deleteGameTagByTagId = async (tagId) => {
  try {
    const query = 'DELETE FROM game_tag WHERE tag_id = $1 RETURNING *;';
    const values = [tagId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.log('Error deleting game_tags by tag ID:', error.message);
    throw error;
  }
};

const deleteGameTag = async (gameId, tagId) => {
  try {
    const query = 'DELETE FROM game_tag WHERE game_id = $1 AND tag_id = $2 RETURNING *;';
    const values = [gameId, tagId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error deleting game tag:', error.message);
    throw error;
  }
};

// Add more methods if needed

module.exports = {
  createGameTag,
  deleteGameTag,
  getAllGameTagsByGameId,
  getAllGameTagsByTagId,
  deleteGameTagByGameId,
  deleteGameTagByTagId,
};