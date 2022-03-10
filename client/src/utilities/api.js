const api_uri = 'http://pokemon-collection.tracker.herokuapp.com/';
const axios = require('axios');

const getCardsFromSet = (cardSet) => {
  //Get all the cards from the set
  return axios(`${api_uri}set/${cardSet}`)
    .then((res) => {
      return res.data;
    })
}
const getSetsFromDb = () => {
  //Get all the sets in the database
  return axios(`${api_uri}sets/`)
    .then((res) => {
      return res.data;
    })
}

export {getCardsFromSet, getSetsFromDb};