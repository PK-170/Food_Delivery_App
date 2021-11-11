var axios = require('axios');

var config = {
  method: 'get',
  url: 
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.2924,174.7787&radius=500&types=food&name=harbour&key=AIzaSyBVASTnFE1PZfRclI49MXAEBYsf62fH5SU',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});