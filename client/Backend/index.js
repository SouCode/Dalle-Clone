const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb/connect.js');
const postRoutes = require('./routes/postRoutes.js');
const dalleRoutes = require('./routes/dalleRoutes.js');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

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
