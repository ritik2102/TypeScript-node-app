import express from "express";
import {Router} from 'express';
// default exports are imported this way
import todosRoutes from './routes/todos';
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(3000);