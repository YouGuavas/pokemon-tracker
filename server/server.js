const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;
const username = process.env.DB_USER || '';
const password = process.env.DB_PASSWORD || '';
//const uri = `mongodb+srv://${username}:${password}@cluster0.rsv0d.mongodb.net/${DB}?retryWrites=true&w=majority`;
