export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('chidimo', 'first message'),
      ('orji', 'second message')
`;

export const insertUser = `
INSERT INTO users(id, email, password,created_date,modified_date)
VALUES ('bc96743f-e15c-443a-b6af-6c92f5322cf1', 'keita.momo1@yahoo.fr','it is like that','2021-11-08T22:50:36.547Z','2021-11-08T22:50:36.547Z')
`;

export const dropMessagesTable = 'DROP TABLE messages';

export const dropUserTable = 'DROP TABLE users';

export const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
id UUID PRIMARY KEY,
email VARCHAR (128) UNIQUE NOT NULL,
password VARCHAR(128) NOT NULL,
created_date TIMESTAMPTZ,
modified_date TIMESTAMPTZ
)
`;
