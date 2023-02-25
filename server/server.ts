import dotenv from 'dotenv-safe';
import express from 'express';

dotenv.config();

const app = express();

console.log(process.env.MY_NAME);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
