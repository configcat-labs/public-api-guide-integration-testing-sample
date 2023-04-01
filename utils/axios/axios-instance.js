const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://api.configcat.com/v1/',
  headers: {
    'X-CONFIGCAT-SDKKEY': 'YOUR-CONFIGCAT-SDKKEY'
  },
  auth: {
    username: 'YOUR-AUTH-USERNAME',
    password: 'YOUR-AUTH-PASSWORD'
  }
});

module.exports = axiosInstance;