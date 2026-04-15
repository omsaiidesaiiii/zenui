import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.send("UI Registry API running 🚀");
});

app.get("/components/:name", (req, res) => {
  const { name } = req.params;

  const filePath = path.join(__dirname, "data/components", `${name}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Component not found" });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});