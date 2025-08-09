import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  try {
    // Query sederhana, misal ambil user pertama
    const user = await prisma.user.findFirst();
    res.status(200).json({
      success: true,
      message: 'Koneksi ke database BERHASIL!',
      userContoh: user
    });
  } catch (error) {
    console.error('Gagal konek database:', error);
    res.status(500).json({
      success: false,
      message: 'Koneksi ke database GAGAL!',
      error: error.message
    });
  }
}