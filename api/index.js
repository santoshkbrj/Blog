import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ueserRoute from './routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('mongoDB database is connected');
    }).catch(err => console.log(err))

const app = express();

app.listen(3000, () => {
    console.log('server is running in port 3000');
});

app.use('/api/user', ueserRoute)
