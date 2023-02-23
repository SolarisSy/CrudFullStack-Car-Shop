import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import path from "path"
import multer from "multer"

import { fileURLToPath } from "url"

import { create } from "./src/Controllers/UserController.js"
import { deleteL } from "./src/Controllers/UserController.js"
import { updateUser } from "./src/Controllers/UserController.js"
import { index } from "./src/Controllers/UserController.js"

import { createPic } from "./src/controllers/pictureController.js"
import { findAll } from "./src/controllers/pictureController.js"
import { remove } from "./src/controllers/pictureController.js"

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES */
app.get("/", index);
app.post("/", create);
app.put("/:id", updateUser);
app.delete("/:id", deleteL);

/* ROUTES WITH FILES */
app.post("/img", upload.single("image"), createPic);
app.get("/img", findAll);
app.delete("/img/:id", remove);

/* MONGOOSE SETUP */
const dbUri = process.env.MONGO_URL;
mongoose.connect(
  dbUri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("Connected to database")
);

const PORT = process.env.PORT || 8801;

app.listen(process.env.PORT || 8800, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
