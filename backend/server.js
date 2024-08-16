const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
