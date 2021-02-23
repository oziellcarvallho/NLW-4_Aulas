import 'reflect-metadata';
import express, { request, response } from 'express';
import './database';
import { router } from './routes';

const app = express();

let PORT: number = 3003;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log("Server is running ✔"));