var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/:busroute', function(req, res, next) {
  axios
    .get(`http://bustime.mta.info/api/search?q=${req.params.busroute}`)
    .then(data => {
      res.status(200).json(data.data)
    }) 
    .catch(err => next(err))
});


module.exports = router;
