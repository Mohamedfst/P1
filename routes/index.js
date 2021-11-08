import express from 'express';
import { testEnvironmentVariable } from '../bin/settings.js';
import { messagesPage, addMessage } from './messages.js';
import { addUser, usersPage } from './users.js';
import Auth from '../middleware/Auth.js';

const indexRouter = express.Router();
/* GET home page. */
indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

/* add the get messages endpoint. */
indexRouter.get('/messages', messagesPage);

indexRouter.post('/messages', addMessage);

indexRouter.get('/user', usersPage);

indexRouter.post('/user', addUser);

export default indexRouter;
