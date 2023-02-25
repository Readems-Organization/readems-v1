import dotenv from 'dotenv-safe';
import express from 'express';
import path from 'path';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express());
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend', 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
});

const PORT = 5000 || process.env.PORT;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
