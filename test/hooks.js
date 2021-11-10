import {
  dropTables,
  createTables,
  insertIntoTables,
} from '../utils/queryFunctions.js';

before(async () => {
  await createTables();
  await insertIntoTables();
});

after(async () => {
  await dropTables();
});