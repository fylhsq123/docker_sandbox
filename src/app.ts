import express from 'express';
import bodyParser from "body-parser";

// init express application
const app = express();

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
import { RegisterRoutes } from './routes';
RegisterRoutes(app);

export {app};