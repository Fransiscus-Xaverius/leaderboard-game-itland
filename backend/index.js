const express = require("express");
const cors = require('cors');
const { Sequelize } = require('sequelize');
const router = require('./src/routes/router');

const app = express();
const port = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Use router for routing
app.use('/', router);

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
