import { pool } from '../models/pools.js';
import {
  insertMessages,
  dropMessagesTable,
  createMessageTable,
  createUserTable,
  insertUser,
  dropUserTable,
} from './queries.js';

export const executeQueryArray = async (arr) =>
  new Promise((resolve, done) => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  });

export const dropTables = () => executeQueryArray([dropMessagesTable, dropUserTable]);
export const createTables = () => executeQueryArray([createMessageTable, createUserTable]);
export const insertIntoTables = () => executeQueryArray([insertMessages, insertUser]);
