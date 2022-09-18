import multer from "multer";
import path from "path";
import crypto from "crypto";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dirPath = path.join(__dirname, "../uploads");
    console.log(dirPath);
    if (!fs.existsSync("dirPath")) {
      fs.mkdirSync(dirPath);
    }
    cb(null, path.join(dirPath));
  },
  filename: (req, file, cb) => {
    const uniqueFileName = `${Date.now()}-${crypto
      .randomBytes(6)
      .toString("hex")}${path.extname(file.originalname)}`;
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage });

export { upload };
