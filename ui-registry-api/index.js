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

app.get("/components", (req, res) => {
  const componentsDir = path.join(__dirname, "data/components");
  
  if (!fs.existsSync(componentsDir)) {
    return res.status(404).json({ error: "Components directory not found" });
  }

  const files = fs.readdirSync(componentsDir);
  const components = files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(componentsDir, file);
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return {
        name: data.name || file.replace('.json', ''),
        description: data.description || 'No description available'
      };
    });

  res.json({ components });
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