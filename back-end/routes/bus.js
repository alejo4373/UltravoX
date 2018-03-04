var express = require('express');
var router = express.Router();
var axios = require('axios')
var api = require('../api/api')

router.post('/get_time', function (req, res, next) {
  console.log('res.body', req.body)
  var bus = req.body.bus
  var stopId = req.body.stop_id;
  api.getBusIdAndFireGetEta(bus, stopId, (resObj) => {
    res
      .status(200)
      .json(resObj)
  })
}) 

module.exports = router;
