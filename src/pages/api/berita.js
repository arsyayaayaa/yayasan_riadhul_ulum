import { query } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const berita = await query('SELECT * FROM berita ORDER BY tanggal DESC');
    res.json(berita);
  } else if (req.method === 'POST') {
    const { judul, isi, gambar } = req.body;
    await query('INSERT INTO berita (judul, isi, gambar) VALUES (?, ?, ?)', [judul, isi, gambar]);
    res.json({ success: true });
  } else if (req.method === 'PUT') {
    const { id, judul, isi, gambar } = req.body;
    await query('UPDATE berita SET judul=?, isi=?, gambar=? WHERE id=?', [judul, isi, gambar, id]);
    res.json({ success: true });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await query('DELETE FROM berita WHERE id=?', [id]);
    res.json({ success: true });
  } else {
    res.status(405).end();
  }
}