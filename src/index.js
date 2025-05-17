const express = require('express');
const mongoose = require('mongoose');
const combinedRoutes = require('./routes/routes');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', combinedRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});