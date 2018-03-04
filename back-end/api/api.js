var axios = require('axios')
var apiKey = 'b6ce6ad1-765b-4084-b947-02d9cdeb0610';

const getEta = (busId, stopId, callback) => {
  axios
    .get(`http://bustime.mta.info/api/siri/stop-monitoring.json?key=${apiKey}&OperatorRef=MTA&MonitoringRef=${stopId}&LineRef=${busId}&version=2`)
    .then(apiRes => {
      // console.log(apiRes.data)
      // console.log('ETA', apiRes.data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)
      // console.log('ETA', apiRes.data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall)
      var resObj = {
        eta: apiRes.data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime,
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
  console.log('params', busName, stopId)
  axios
    .get(`http://bustime.mta.info/api/search?q=${busName}`)
    .then(data => {
        var busId = data.data.searchResults.matches[0].id
        getEta(busId, stopId, callback)
    })
     .catch(err => {
       throw err
       //next(err)
      })
}

module.exports ={
   getBusIdAndFireGetEta, 
}

//getBusIdAndFireGetEta('q49', console.log)
