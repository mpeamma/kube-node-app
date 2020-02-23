import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { hostname } from 'os';

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.get('/', (req, res) => {
  return res.status(200).send(`Hello from ${hostname()}`)
});

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});