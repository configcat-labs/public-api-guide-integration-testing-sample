const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://api.configcat.com/v1/',
  headers: {
    'X-CONFIGCAT-SDKKEY': 'WC3bCC2efUaHXNSnavbn7A/5pFwOsqXAE-juwU3OfMkCw'
  },
  auth: {
    username: '08db329f-bc92-41c1-8251-dd0655cd70ab',
    password: '101CiwacHixwsPX4YixHDI6+GrpqQrAJ/L/8czZx1Zg='
  }
});

module.exports = axiosInstance;