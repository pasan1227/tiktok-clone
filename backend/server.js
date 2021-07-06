import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import Videos from './dbModel.js';

// app config
const app = express();
const port = 9000;

// middlwares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

// DB confi
const connection_url = 'mongodb+srv://admin:Pasan1227@cluster0.yxp0s.mongodb.net/tiktok?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// API endpoints
app.get('/',(req, res) => res.status(200).send('hello world'));

app.get('/v1/posts', (req, res) => res.status(200).send(data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/v2/posts', (req, res) => {
    // POST request is to ADD DATA to the database
    // It will let us ADD a video DOCUMENT to the videos collection
    const dbVideos = req.body;

    // Error handling
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));