const api_uri = 'http://localhost:5000/';
const axios = require('axios');

const getCardsFromSet = (cardSet) => {

  /*const cards = [
    {
      name:'Grookey',
      src: "https://den-cards.pokellector.com/320/Grookey.CRE.16.39020.thumb.png",
      have: false

  }, {
    name:'Thwackey',
    src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
    have: true

}, {
  name:'Rillaboom',
  src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
  have: false

},  {
  name:'Weedle',
  src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
  have: false

},  {
  name:'Kakuna',
  src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
  have: false

},  {
  name:'Beedrill',
  src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
  have: true

}, {
  name:'Grookey',
  src: "https://den-cards.pokellector.com/320/Grookey.CRE.16.39020.thumb.png",
  have: false

}, {
name:'Thwackey',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

}, {
name:'Rillaboom',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

},  {
name:'Weedle',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

},  {
name:'Kakuna',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

},  {
name:'Beedrill',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

}];*/
  return axios(`${api_uri}set/${cardSet}`)
    .then((res) => {
      return res.data;
    })
}

export {getCardsFromSet};