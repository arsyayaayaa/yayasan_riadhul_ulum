import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'yayasan_riadhululum',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi.' });
  }

  try {
    // Cari user berdasarkan username
    const [rows] = await pool.execute('SELECT * FROM user WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Username tidak ditemukan.' });
    }

    const user = rows[0];

    // Cek password dengan bcrypt
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Password salah.' });
    }

    // Set cookie session
    const session = { username: user.username };
    res.setHeader('Set-Cookie', serialize('admin_session', JSON.stringify(session), {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 8, // 8 jam
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    }));

    return res.status(200).json({ message: 'Login berhasil.' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
}
