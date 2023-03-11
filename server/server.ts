import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express());
app.use(express.json());
app.use(cors());

// app.use(express.static('../frontend/build'));

app.get('/', (req, res) => {
  res.send('Hello Readems');
});

app.use(express.static(path.join(__dirname, '../frontend', 'build')));
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
});

const PORT = 5000 || process.env.PORT;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
