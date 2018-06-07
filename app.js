const axios = require('axios');
const express = require('express');
const app = express();
let avgRnd = '';
const priceArray = [];

axios.get('https://www.gunbroker.com/api/items?categories=978&Sort=9&PageIndex=1&PageSize=96&keywords=polish+p64')
  .then(function (response) {
    rawData = response.data.results;
    //const priceArray = [];
    for (var i = 0; i < rawData.length; i++) {
      priceArray.push(rawData[i].bidPrice);
    }

    const index = priceArray.indexOf(0);
    if (index > -1) {
      priceArray.splice(index);
    }

    const sum = priceArray.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    const avg = sum / priceArray.length;
    avgRnd = Math.round(avg);
    console.log(avgRnd);

    })
  .catch(function (error) {
    console.log(error);
  })

console.log(avgRnd);

app.get('/', function (req, res) {
  res.sendStatus(avgRnd);
})

app.listen(3000, () => console.log('Listening on localhost:3000'))
