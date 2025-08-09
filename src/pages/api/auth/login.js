import prisma from '../../../lib/prisma';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi.' });
  }

  try {
    // Cari user di database
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: 'Username tidak ditemukan.' });
    }

    // Cek password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Password salah.' });
    }

    // Set session (cookie sederhana)
    const session = { username: user.username };
    res.setHeader('Set-Cookie', serialize('admin_session', JSON.stringify(session), {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 8, // 8 jam
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    }));

    return res.status(200).json({ message: 'Login berhasil.' });
  } catch (error) {
    console.error('Login error:', error);
    
    // Berikan pesan error yang lebih spesifik
    if (error.code === 'P2002') {
      return res.status(500).json({ message: 'Database constraint error.' });
    }
    
    if (error.code === 'P2023') {
      return res.status(500).json({ message: 'Invalid database query.' });
    }
    
    return res.status(500).json({ 
      message: 'Terjadi kesalahan pada server.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}