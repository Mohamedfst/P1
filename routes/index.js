import express from 'express';
import { testEnvironmentVariable } from '../bin/settings.js';
import { messagesPage, addMessage } from './messages.js';

const indexRouter = express.Router();
/* GET home page. */
indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

/* add the get messages endpoint. */
indexRouter.get('/messages', messagesPage);

indexRouter.post('/messages', addMessage);

export default indexRouter;
