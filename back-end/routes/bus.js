var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/closest', function (req, res, next) {
  axios
    .get(`http://bustime.mta.info/api/where/stops-for-location.json?lat=40.758512&lon=-73.881175&latSpan=0.005&lonSpan=0.005&key=6df76799-8845-447c-b2c9-e3fdd328ced2`)
    .then(data => {
      console.log(data)
      res
        .status(200)
        .json(data.data)
    })
    .catch(err => next(err))
});

router.get('/:busroute', function (req, res, next) {
  axios
    .get(`http://bustime.mta.info/api/search?q=${req.params.busroute}`)
    .then(data => {
      res
        .status(200)
        .json(data.data)
    })
    .catch(err => next(err))
});

module.exports = router;
