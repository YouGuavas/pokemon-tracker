const { MongoClient } = require('mongodb');
require('dotenv').config();


const username = process.env.DB_USER || '';
const password = process.env.DB_PASSWORD || '';
const database = 'pokemon';
const uri = `mongodb+srv://${username}:${password}@cluster0.rsv0d.mongodb.net/${database}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var _db;

module.exports = {
  connectToServer: (cb) => {
    client.connect((err, db) => {
      if (db) {
        _db = db.db('pokemon');
        console.log('Successfully connected to MongoDB.')
      }
      return cb(err);
    }); 
  },
  getDB: () => {
    return _db;
  }
}