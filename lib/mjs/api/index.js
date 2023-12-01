import fetch from 'node-fetch';
import AlQuranException from '../core/Exception.js';
import Logger from '../helpers/Logger.js';
const API_URL = 'https://api.alquran.cloud/v1';
const API = {
    request: async (endpoint) => {
        const url = API_URL + endpoint;
        const headers = {
            'Content-type': 'application/json',
            'User-Agent': 'AlQuranCloudNodeJSClient/1.0.1',
        };
        const options = {
            method: 'GET',
        };
        const config = {
            ...options,
            ...headers,
        };
        Logger.debug('Requesting "' + url + '" with config:', config);
        const response = await fetch(url, config);
        if (response.ok) {
            return (await response.json());
        }
        throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Unable to connect to the Al Quran Cloud API');
    },
};
export default API;
//# sourceMappingURL=index.js.map