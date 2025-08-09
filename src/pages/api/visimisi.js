import { query } from '@/lib/db';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const data = await query('SELECT * FROM visimisi ORDER BY id DESC LIMIT 1');
        res.status(200).json(data[0] || { visi: '', misi: '', tujuan: '' });
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break;

    case 'POST':
      try {
        const { visi, misi, tujuan } = req.body;
        // Check if record exists
        const existing = await query('SELECT id FROM visimisi LIMIT 1');

        if (existing.length > 0) {
          await query(
            'UPDATE visimisi SET visi = ?, misi = ?, tujuan = ? WHERE id = ?',
            [visi, misi, tujuan, existing[0].id]
          );
        } else {
          await query(
            'INSERT INTO visimisi (visi, misi, tujuan) VALUES (?, ?, ?)',
            [visi, misi, tujuan]
          );
        }
        res.status(200).json({ message: 'Data berhasil disimpan' });
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
