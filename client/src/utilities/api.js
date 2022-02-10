const api_uri = 'http://localhost:5000/';
const axios = require('axios');

const getCardsFromSet = (cardSet) => {
  return axios(`${api_uri}set/${cardSet}`)
    .then((res) => {
      return res.data;
    })
}
const getSetsFromDb = () => {
  return axios(`${api_uri}sets/`)
    .then((res) => {
      return res.data;
    })
}

export {getCardsFromSet, getSetsFromDb};