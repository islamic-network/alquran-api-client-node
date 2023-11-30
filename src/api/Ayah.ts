import AlquranApiClientNode from '../../index';
import Ayah from '../entity/Ayah';
import AlQuranException from '../core/Exception';

const AyahAPI = async (reference: string, edition: string | null = null): Promise<Ayah[]> => {
  const endpoint = '/ayah/' + reference + (edition ? '/' + edition : '');
  const response = await AlquranApiClientNode.request(endpoint);

  if (response.code === 200) {
    return response.data as Ayah[];
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export default AyahAPI;
