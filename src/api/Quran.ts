import API from './index';
import Quran from '../entity/Quran';
import AlQuranException from '../core/Exception';

export const getQuran = async (edition: string | number | null = null): Promise<Quran> => {
  const endpoint = '/quran' + (edition ? '/' + edition : '');
  const response = await API.request(endpoint);

  if (response.code === 200) {
    return response.data as Quran;
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

const QuranAPI = {
  getQuran,
};

export default QuranAPI;
