const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((times) => {
    console.log(times)
  })
  .catch((error) => {
    console.log("error")
  })