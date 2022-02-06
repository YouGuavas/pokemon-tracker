const express = require('express');

const router = express.Router();


const db_tools = require('../db/connection');

const ObjectId = require("mongodb").ObjectId;


router.route('/set').get((req, res) => {
  res.send('hello world')
});

router.route('/set/:set_name').get((req, res) => {
  let db_connect = db_tools.getDB('pokemon');
  db_connect
    .collection('sets')
    .find({name: req.params.set_name})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result[0].set.documents);
    })
})

module.exports = router;