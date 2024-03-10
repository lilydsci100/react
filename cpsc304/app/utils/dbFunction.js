import pool from './database';

export async function getUserById(userId) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM "User" WHERE UID = $1', [userId]);
    const user = result.rows[0];
    client.release();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('An error occurred while fetching user information');
  }
}