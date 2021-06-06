var axios = require('axios')
var { MTA_BUS_TIME_API_KEY } = process.env;
var oneStopAwayApiKey = '6df76799-8845-447c-b2c9-e3fdd328ced2';

const getEta = (busId, stopId, callback) => {
  const url = `http://bustime.mta.info/api/siri/stop-monitoring.json?key=${MTA_BUS_TIME_API_KEY}&OperatorRef=MTA&MonitoringRef=${stopId}&LineRef=${busId}&version=2`
  console.log(url)
  axios.get(url)
    .then(apiRes => {
      console.log(apiRes.data.Siri)
      var eta = apiRes.data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime
      var now = Date.now()
      var etaMil = Date.parse(eta)

      //console.log('now', now)
      //console.log('etaMil', etaMil)
      var minutesLeft = Math.round((etaMil - now) / 60000)
      var resObj = {
        eta: apiRes.data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime,
        minutesAway: minutesLeft,
        proximityText: apiRes.data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ArrivalProximityText
      }
      callback(resObj)
    })
    .catch(err => {
      throw err
      // next(err)
    })
}

const getBusIdAndFireGetEta = (busName, stopId, callback) => {
  axios
    .get(`http://bustime.mta.info/api/search?q=${busName}`)
    .then(data => {
      //var matches = data.data.searchResults.matches;
      var busId = data.data.searchResults.matches[0].id
      console.log(busId)
      getEta(busId, stopId, callback)
    })
    .catch(err => {
      throw err
      next(err)
    })
}

const getAllBuses = (callback) => {
  axios
    .get(`http://bustime.mta.info/api/where/routes-for-agency/MTA%20NYCT.json?key=${oneStopAwayApiKey}`)
    .then(apiRes => {
      var busesList = apiRes.data.data.list
      const buses = busesList.map(bus => bus.shortName)
      callback(null, buses)
    })
    .catch(err => {
      console.log('err', err)
      callback(err, null)
    })
}

const getStopIdsForBus = (callback) => {
  axios
    .get(`http://bustime.mta.info/api/where/routes-for-agency/MTA%20NYCT.json?key=${oneStopAwayApiKey}`)
    .then(apiRes => {
      var busesList = apiRes.data.data.list
      const buses = busesList.map(bus => bus.shortName)
      callback(null, buses)
    })
    .catch(err => {
      console.log('err', err)
      callback(err, null)
    })
}

module.exports = {
  getBusIdAndFireGetEta,
  getAllBuses,
}

//getBusIdAndFireGetEta('q49', '550669', console.log)
