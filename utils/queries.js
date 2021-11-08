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

export const dropMessagesTable = 'DROP TABLE messages';

export const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
id UUID PRIMARY KEY,
email VARCHAR (128) UNIQUE NOT NULL,
password VARCHAR(128) NOT NULL,
created_date TIMESTAMPTZ,
modified_date TIMESTAMPTZ
)
`;
