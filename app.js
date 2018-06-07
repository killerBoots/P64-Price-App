const axios = require('axios');

axios.get('https://www.gunbroker.com/api/items?categories=978&Sort=9&PageIndex=1&PageSize=96&keywords=polish+p64')
  .then(function (response) {
    maximumPrice = response.data.maxPrice;
    minimumPrice = response.data.minPrice;
    volume = response.data.count;
    buyNow = {};
    buyNow = response.data.results.buyNowPrice;
    console.log('Max Price: ' + maximumPrice, 'Minimum Price: ' + minimumPrice, 'Daily Volume: ' + volume);
    console.log(buyNow);
  })
  .catch(function (error) {
    console.log(error);
  });