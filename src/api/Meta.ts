import API from './index';
import AlQuranException from '../core/Exception';
import Meta from '../entity/Meta';

export const getMeta = async (): Promise<Meta> => {
  const endpoint = '/meta';
  const response = await API.request(endpoint);

  if (response.code === 200) {
    return response.data as Meta;
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

const MetaAPI = {
  getMeta,
};

export default MetaAPI;
