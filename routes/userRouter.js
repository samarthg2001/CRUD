import express from 'express';
const app = express();
import { create, fetchAlldata, fetchbyID, upDate, deletebyID } from '../controller/userControllers.js';

app.post('/', create);
app.get('/', fetchAlldata);
app.get('/:id', fetchbyID);
app.patch('/update/:id', upDate);
app.delete('/delete/:id', deletebyID);

export default app;
