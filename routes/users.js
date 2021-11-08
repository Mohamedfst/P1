import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import Model from '../models/models.js';
import Helper from '../utils/Helper.js';

const usersModel = new Model('users');
export const usersPage = async (req, res) => {
  try {
    const data = await usersModel.select('email, created_date');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'Some values are missing' });
  }
  if (!Helper.isValidEmail(req.body.email)) {
    return res.status(400).send({ message: 'Please enter a valid email' });
  }
  const hashPassword = Helper.hashPassword(req.body.password);

  const { email } = req.body;
  const createdAt = new Date().toISOString();
  const modifiedAt = new Date().toISOString();
  const uid = uuidv4();
  const columns = 'id, email, password, created_date, modified_date';
  const values = `'${uid}', '${email}', '${hashPassword}', '${createdAt}', '${modifiedAt}'`;
  try {
    const data = await usersModel.insertWithReturn(columns, values);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    console.log(err.stack);
    res.status(200).json({ messages: err.stack });
  }
};