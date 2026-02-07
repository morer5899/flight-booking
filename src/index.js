// server.js
const { PORT } = require('./config/index.js');
const express = require('express');
const apiRoutes = require('./routes/index.js');

const app = express();

console.log("MAIN SERVER FILE LOADED");
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port no ${PORT}`);
});
