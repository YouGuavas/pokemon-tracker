const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const port = process.env.port || 5000;