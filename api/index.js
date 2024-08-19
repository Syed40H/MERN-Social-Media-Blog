import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://abdul40hadi:<${process.env.PASSWORD}>@mern-blog.m00wv.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog`)
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
});