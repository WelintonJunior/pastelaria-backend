require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
});

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conectado ao PostgreSQL! Hora atual:', res.rows[0]);
  } catch (err) {
    console.error('Erro de conexão:', err);
  }
}

testConnection();

module.exports = pool;
