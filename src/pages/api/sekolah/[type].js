import { query } from '@/lib/db';

export default async function handler(req, res) {
  const { type } = req.query;
  const validTypes = ['tk', 'mi', 'mts', 'majlis'];
  
  if (!validTypes.includes(type)) {
    return res.status(400).json({ message: 'Invalid school type' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const data = await query(`SELECT * FROM ${type}`);
        return res.status(200).json(data); // <-- pastikan mengirim array!
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break;

    case 'POST':
      try {
        const { judul, url, isi, gambar } = req.body;
        await query(
          `INSERT INTO ${type} (judul, url, isi, gambar) VALUES (?, ?, ?, ?)`,
          [judul, url, isi, gambar]
        );
        res.status(200).json({ message: 'Data berhasil ditambah' });
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break;

    case 'PUT':
      try {
        const { id, judul, url, isi, gambar } = req.body;
        await query(
          `UPDATE ${type} SET judul=?, url=?, isi=?, gambar=? WHERE id=?`,
          [judul, url, isi, gambar, id]
        );
        res.status(200).json({ message: 'Data berhasil diupdate' });
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        await query(`DELETE FROM ${type} WHERE id=?`, [id]);
        res.status(200).json({ message: 'Data berhasil dihapus' });
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
