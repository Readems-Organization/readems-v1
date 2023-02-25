import dotenv from 'dotenv-safe';
import express from 'express';
import path from 'path';

dotenv.config();

const app = express();

const PORT = 5000 || process.env.PORT;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
