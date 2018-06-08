import express from 'express';
import axios from 'axios';

const app = express();
const gunbrokerEndpoint = 'https://www.gunbroker.com/api/items?categories=978&Sort=9&PageIndex=1&PageSize=96&keywords=polish+p64';

app.get('/', (req, res) => {
  axios.get(gunbrokerEndpoint)
    .then((response) => {
      const rawData = response.data.results;
      const priceArray = [];

      for (var i = 0; i < rawData.length; i++) {
        if (rawData[i].bidPrice !== '0') {
          priceArray.push(rawData[i].bidPrice);
        }
      }

      const sumArray = (newPrice, current) => newPrice + current;
      const avgPrice = (priceArray.reduce(sumArray) / priceArray.length).toFixed(2);

      res.send({
        avgPrice
      });
    }).catch((err) => {
      res.send(err);
    });
});

export default app;