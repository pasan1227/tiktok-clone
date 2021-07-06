import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';

// app config
const app = express();
const port = 9000;

// middlwares

// DB confi
const connection_url = 'mongodb+srv://admin:Pasan1227@cluster0.yxp0s.mongodb.net/tiktok?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// API endpoints
app.get('/',(req, res) => res.status(200).send('hello world'));

app.get('/v1/posts', (req, res) => res.status(200).send(data));

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));