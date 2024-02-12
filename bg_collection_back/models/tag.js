const {pool} = require('../db');

const createTag = async (tagName) => {
  try {
    const query = 'INSERT INTO tag (name) VALUES ($1) RETURNING *;';
    const values = [tagName];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error creating tag:', error.message);
    throw error;
  }
};

const getAllTags = async () => {
  try {
    const query = 'SELECT * FROM tag;';
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.log('Error getting all tags:', error.message);
    throw error;
  }
};

const getTagById = async (tagId) => {
  try {
    const query = 'SELECT * FROM tag WHERE id = $1;';
    const values = [tagId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error getting tag by ID:', error.message);
    throw error;
  }
};

const updateTagById = async (tagId, updatedTagData) => {
  try {
    const query = 'UPDATE tag SET name = $1 WHERE id = $2 RETURNING *;';
    const values = [updatedTagData.name, tagId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error updating tag by ID:', error.message);
    throw error;
  }
};

const deleteTagById = async (tagId) => {
  try {
    const query = 'DELETE FROM tag WHERE id = $1 RETURNING *;';
    const values = [tagId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error deleting tag by ID:', error.message);
    throw error;
  }
};


module.exports = {
  createTag,
  getAllTags,
  getTagById,
  updateTagById,
  deleteTagById,
};