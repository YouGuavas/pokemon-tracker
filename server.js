const express = require('express');

const app = express();
const db_tools = require('./db/connection');


require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(require('./routes/sets'));
app.use(require('./routes/basic'));


app.listen(port, () => {
  // perform a database connection when server starts
  db_tools.connectToServer((err) => {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});