const axios = require('axios');

const axiosFactory = (baseURL, headers) => {
    return axios.create({
        baseURL,
        headers
    })
}

module.exports = axiosFactory;