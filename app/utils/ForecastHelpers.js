var axios = require('axios');

var API_KEY = 'c005092979b1e784137fb298989f4ea6';

var ForecastHelpers = {
    getForecastData: function(location) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=' + API_KEY + '&cnt=5&units=imperial');
    }

};

module.exports = ForecastHelpers;