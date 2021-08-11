const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/exercise')
const userRouter = require('./routes/user')

require('dotenv').config()

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/NodeExpress', {useNewUrlParser: true, useUnifiedTopology:true,});
const connection = mongoose.connection;
connection.once('open',() => {
    console.log('MongoDB connected')
})

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})