import fetch from 'isomorphic-unfetch';
import JsonResponse from '../core/JsonResponse';
import AlQuranException from '../core/Exception';

const API_URL = 'https://api.alquran.cloud/v1';

const AlQuranApiClient = {
  request: async (endpoint: string): Promise<JsonResponse> => {
    let url = API_URL + endpoint;
    let headers = {
      'Content-type': 'application/json',
      'User-Agent': 'AlQuranCloudNodeJSClient/1.0.1',
    };

    let options = {
      method: 'GET',
    };

    let config = {
      ...options,
      ...headers,
    };

    const response = await fetch(url, config);
    if (response.ok) {
      return await response.json();
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Unable to connect to the Al Quran Cloud API');
  },
};

export default AlQuranApiClient;
