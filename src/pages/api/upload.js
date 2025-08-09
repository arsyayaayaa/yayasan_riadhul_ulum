import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const formidable = (await import('formidable')).default;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const form = formidable({ multiples: false, uploadDir, keepExtensions: true });
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ message: 'Upload error' });
    let file = files.file;
    // Jika file adalah array (multiple: false kadang tetap array)
    if (Array.isArray(file)) file = file[0];
    if (!file || !file.filepath) {
      return res.status(400).json({ message: 'File tidak ditemukan.' });
    }
    const filename = path.basename(file.filepath);
    res.status(200).json({ filename });
  });
}
