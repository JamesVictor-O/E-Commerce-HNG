import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS with specific origin for debugging
app.use(cors({
  origin: 'http://localhost:5173' // Replace with your React app origin
}));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API');
});

app.get('/shop-data', (req, res) => {
  res.sendFile(path.join(__dirname, 'shopData.json'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
