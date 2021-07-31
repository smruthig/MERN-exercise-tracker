const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})