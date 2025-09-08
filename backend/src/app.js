require('dotenv').config();
const express = require('express');
const cors = require('cors');
const posRoutes = require('./routes/posRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/pos', posRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
