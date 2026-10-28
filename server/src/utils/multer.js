const multer = require('multer');
const path = require('path');
const os = require('os');

const storage = subpath =>
  multer.diskStorage({
    destination: path.join(os.tmpdir(), 'uploads', subpath),
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

const upload = path =>
  multer({
    storage: storage(path),
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    },
  });

module.exports = upload;
