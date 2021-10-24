import express from 'express';
import { testEnvironmentVariable } from '../bin/settings.js';

const indexRouter = express.Router();
/* GET home page. */
indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

export default indexRouter;
