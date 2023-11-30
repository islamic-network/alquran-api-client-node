import API from './index';
import AlQuranException from '../core/Exception';
import Juz from '../entity/Juz';

export const getJuz = async (number: number, edition: string | number | null = null): Promise<Juz> => {
  const endpoint = '/juz/' + number + (edition ? '/' + edition : '');
  const response = await API.request(endpoint);

  if (response.code === 200) {
    return response.data as Juz;
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

const JuzAPI = {
  getJuz,
};

export default JuzAPI;
