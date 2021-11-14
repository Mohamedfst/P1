import express from 'express';
import { testEnvironmentVariable } from '../bin/settings.js';
import { messagesPage, addMessage } from './messages.js';
import { addUser, usersPage, userLogin, deleteUser } from './users.js';
import Auth from '../middleware/Auth.js';

const indexRouter = express.Router();
/* GET home page. */
indexRouter.get('/', (req, res) =>
	res.status(200).json({ message: testEnvironmentVariable })
);

/* GET messages. */
indexRouter.get('/messages', messagesPage);

/* POST a message. */
indexRouter.post('/messages', addMessage);

/* GET users. */
indexRouter.get('/user', usersPage);

/* POST Relogin by a user. */
indexRouter.post('/user/:id', Auth.verifyToken, usersPage);

/* Post an user. */
indexRouter.post('/user', addUser);

/* GET home page. */
indexRouter.post('/login', userLogin);

/* DELETE an user. */
indexRouter.delete('/user/:id', deleteUser);

export default indexRouter;
