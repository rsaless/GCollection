const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bgcollection',
  password: 'Senhalegal',
  port: 2000, 
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connected successfully');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error.message);
  }
};

module.exports = { connectDB, pool };