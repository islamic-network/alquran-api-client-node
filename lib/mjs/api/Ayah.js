import API from './index.js';
import AlQuranException from '../core/Exception.js';
export const getAyah = async (reference, edition = null) => {
    const endpoint = '/ayah/' + String(reference) + (edition ? '/' + edition : '');
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
const AyahAPI = {
    getAyah,
};
export default AyahAPI;
//# sourceMappingURL=Ayah.js.map