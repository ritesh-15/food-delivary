import multer from "multer";
import path from "path";
import crypto from "crypto";
import fs from "fs";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const dirPath = path.join(__dirname, "../uploads");
    if (!fs.existsSync("dirPath")) {
      fs.mkdirSync(dirPath);
    }
    console.log("Path 👇👇👇");
    console.log(dirPath);
    cb(null, path.join(__dirname, "../uploads"));
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
