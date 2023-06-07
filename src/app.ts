import express from 'express';
import router from './ProductRouter';
import cors from 'cors';
import path from 'path';
import mongoose from './config/database';

mongoose.connect;
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public', 'images')));

// Product Router
app.use('/api', router);

export default app;