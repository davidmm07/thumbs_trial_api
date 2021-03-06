const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  HOST: process.env.THUMBS_TRIAL_CRUD_DB_URL,
  DATABASE: process.env.THUMBS_TRIAL_CRUD_DB_NAME,
  USER: process.env.THUMBS_TRIAL_CRUD_DB_USER,
  PASS: process.env.THUMBS_TRIAL_CRUD_DB_PASS,
  PORT: '27017',
  AUTHSOURCE: process.env.THUMBS_TRIAL_CRUD_DB_AUTH
};