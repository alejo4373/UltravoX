var express = require('express');
var router = express.Router();
var axios = require('axios')

const getClosestBusInfo = (data) => {
  var newData = []
  data
    .stops
    .map(ele => {
      newData.push({id: ele.code, shortName: ele.routes[0].shortName});
    })
}

router
  .get('/closest', function (req, res, next) {
    axios
      .get(`http://bustime.mta.info/api/where/stops-for-location.json?lat=40.7429317&lon=-73.9418677&latSpan=0.005&lonSpan=0.005&key=6df76799-8845-447c-b2c9-e3fdd328ced2`)
      .then(responce => {
        console.log('responce:', responce.data)
        var longName = 'longName'
        var shortName = 'shortName'
        var MTAobj = responce.data.stops
        var busInfo = MTAobj.filter(ele => {
          ele
            .routes
            .filter(ele => {})
        })
        res
          .status(200)
          .json(responce.data)
      })
      // .then(data => {   // console.log(data)   res     .status(200)
      // .json(data.data) })
      .catch(err => next(err))
  });

router.get('/:busroute', function (req, res, next) {
  axios.get(`http://bustime.mta.info/api/search?q=${req.params.busroute}`) //
    .then(data => {
    res
      .status(200)
      .json(data.data)
  }).catch(err => next(err))
});

module.exports = router;
