const {pool} = require('../db');

const createSleeve = async (sleeveData) => {
  try {
    const {
      brand,
      name,
      size,
      quantity,
      gameId,
      in_use,
    } = sleeveData;

    const query = `
      INSERT INTO sleeve (brand, name, size, quantity, game_id, in_use)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    const values = [brand, name, size, quantity, gameId, in_use];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error creating sleeve:', error.message);
    throw error;
  }
};

const getAllSleevesByGameId = async (gameId) => {
  try {
    const query = 'SELECT * FROM sleeve WHERE game_id = $1;';
    const values = [gameId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.log('Error getting all sleeves by game ID:', error.message);
    throw error;
  }
};

const getAllSleeves = async () => {
  try {
    const query = 'SELECT * FROM sleeve;';
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.log('Error getting all sleeves:', error.message);
    throw error;
  }
};

const getSleeveById = async (sleeveId) => {
  try {
    const query = 'SELECT * FROM sleeve WHERE id = $1;';
    const values = [sleeveId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error getting sleeve by ID:', error.message);
    throw error;
  }
};

const updateSleeveById = async (sleeveId, updatedSleeveData) => {
  try {
    const query = `
      UPDATE sleeve
      SET
        brand = $1,
        name = $2,
        size = $3,
        quantity = $4,
        game_id = $5,
        in_use = $6
      WHERE id = $7
      RETURNING *;
    `;
    const values = [
      updatedSleeveData.brand,
      updatedSleeveData.name,
      updatedSleeveData.size,
      updatedSleeveData.quantity,
      updatedSleeveData.game_id,
      updatedSleeveData.in_use,
      sleeveId,
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error updating sleeve by ID:', error.message);
    throw error;
  }
};

const deleteSleeveById = async (sleeveId) => {
  try {
    const query = 'DELETE FROM sleeve WHERE id = $1 RETURNING *;';
    const values = [sleeveId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log('Error deleting sleeve by ID:', error.message);
    throw error;
  }
};

const useSleeve = async (sleeveId) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Find the sleeve by ID and update its in_use attribute to true
    const usedSleeveQuery = `UPDATE sleeve SET in_use = true WHERE id = $1 RETURNING *;`;
    const usedSleeveValues = [sleeveId];
    const { rows: usedSleeve } = await client.query(usedSleeveQuery,usedSleeveValues);

    // Check if the sleeve was found and updated successfully
    if (usedSleeve.length === 0) {throw new Error('Sleeve not found or could not be updated');}

    // Find a matching sleeve with the same size, name, and brand that is not in use and has a null game_id
    const availableSleeveQuery = `SELECT * FROM sleeve WHERE size = $1 AND name = $2 AND brand = $3 AND in_use = false AND game_id IS NULL FOR UPDATE SKIP LOCKED;`;
    const availableSleeveValues = [
      usedSleeve[0].size,
      usedSleeve[0].name,
      usedSleeve[0].brand,
    ];

    // Check if an available sleeve was found
    const { rows: availableSleeve } = await client.query(availableSleeveQuery, availableSleeveValues);
    if (availableSleeve.length === 0) {throw new Error('No available sleeve found for replacement');}

    // Decrease the quantity of the available sleeve by 1
    const updatedQuantity = availableSleeve[0].quantity - usedSleeve[0].quantity;
    if (updatedQuantity < 0) {throw new Error('Not enough sleeves available for the entire operation');}

    // Update the quantity of the available sleeve
    const updateQuantityQuery = `UPDATE sleeve SET quantity = $1 WHERE id = $2; `;
    const updateQuantityValues = [updatedQuantity, availableSleeve[0].id];
    await client.query(updateQuantityQuery, updateQuantityValues);
    await client.query('COMMIT');

    return { usedSleeve: usedSleeve[0], availableSleeve: availableSleeve[0] };
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error using sleeve:', error);
    throw error;
  } finally {
    client.release();
  }
};

const revertSleeveUsage = async (usedSleeve) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Revert the in_use attribute of the used sleeve to false
    const revertUsedSleeveQuery = `UPDATE sleeve SET in_use = false WHERE id = $1;`;
    const revertUsedSleeveValues = [usedSleeve.id];
    await client.query(revertUsedSleeveQuery, revertUsedSleeveValues);

    // Find the available sleeve with the same size, name, brand, and not in use
    const findAvailableSleeveQuery = `SELECT * FROM sleeve WHERE size = $1 AND name = $2 AND brand = $3 AND in_use = false AND game_id IS NULL LIMIT 1;`;
    const findAvailableSleeveValues = [usedSleeve.size, usedSleeve.name, usedSleeve.brand];
    const result = await client.query(findAvailableSleeveQuery, findAvailableSleeveValues);
    const availableSleeve = result.rows[0];

    // Increase the quantity of the available sleeve by the quantity used
    const updatedQuantity = availableSleeve.quantity + usedSleeve.quantity;
    const revertQuantityQuery = `UPDATE sleeve SET quantity = $1 WHERE id = $2;`;
    const revertQuantityValues = [updatedQuantity, availableSleeve.id];
    await client.query(revertQuantityQuery, revertQuantityValues);

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error reverting sleeve usage:', error);
    throw error;
  } finally {
    client.release();
  }
};

module.exports = {
  createSleeve,
  getAllSleeves,
  getAllSleevesByGameId,
  getSleeveById,
  updateSleeveById,
  deleteSleeveById,
  useSleeve,
  revertSleeveUsage,
};