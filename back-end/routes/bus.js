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

router.get('/get_buses', function( req, res, next) {
  console.log('hit route getBuses')
  api.getAllBuses((err, data) => {
    if(err) return next(err) 
    res.status(200)
       .json(data)
  })
})

module.exports = router;
