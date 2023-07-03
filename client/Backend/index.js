const express = require('express');
const connectDB = require('./mongodb/connect.js');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E Clone');
});

const startServer = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Server has started on port http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
