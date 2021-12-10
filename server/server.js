import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.post('/getLocationSearchData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
  };
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${req.body.query}`,
    fetchOptions
  );
  try {
    const jsonResponse = await response.json();
    res.send(jsonResponse);
  } catch (err) {
    console.log(err.message);
  }
});

app.post('/getLocationData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
  };
  const response = await fetch(
    `https://www.metaweather.com/api/location/${req.body.location}`,
    fetchOptions
  );
  try {
    const jsonResponse = await response.json();
    res.send(jsonResponse);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
