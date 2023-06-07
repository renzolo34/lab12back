import Multer from 'multer';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const storage = Multer.diskStorage({
  destination: function (req, file, cb) {

    const uploadDir: string = path.join(__dirname, '..', 'public', 'images');

    // Crear carpeta si no existe
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Nombre
    cb(null, crypto.randomUUID() + path.extname(file.originalname));
  }
});

const upload = Multer({ storage: storage });

export default upload;