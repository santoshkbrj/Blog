import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('mongoDB database is connected');
    }).catch(err => console.log(err))

const app = express();

app.listen(3000, () => {
    console.log('server is running in port 3000');
});

app.use(express.json());
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
