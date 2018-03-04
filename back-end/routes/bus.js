var express = require('express');
var router = express.Router();
var axios = require('axios')

router.post('/get_time', function (req, res, next) {
  var bus = 
  var stopId = req.body.stop_id;
  axios
    .get(`http://bustime.mta.info/api/siri/stop-monitoring.json?key=b6ce6ad1-765b-4084-b947-02d9cdeb0610&OperatorRef=MTA&MonitoringRef=550669&DirectionRef=0&LineRef=MTABC_Q49&version=2)
    .then(data => {
      res
        .status(200)
        .json(data.data)
    })
    .catch(err => next(err))
});

module.exports = router;
