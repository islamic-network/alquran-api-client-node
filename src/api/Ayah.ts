import API from './index';
import Ayah from '../entity/Ayah';
import AlQuranException from '../core/Exception';

export const getAyah = async (reference: string | number, edition: string | null = null): Promise<Ayah> => {
  const endpoint = '/ayah/' + String(reference) + (edition ? '/' + edition : '');
  const response = await API.request(endpoint);

  if (response.code === 200) {
    return response.data as Ayah;
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

const AyahAPI = {
  getAyah,
};

export default AyahAPI;
