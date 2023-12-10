import API from './index.js';
import AlQuranException from '../core/Exception.js';
export const getQuran = async (edition = null) => {
    const endpoint = '/quran' + (edition ? '/' + edition : '');
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
const QuranAPI = {
    getQuran,
};
export default QuranAPI;
//# sourceMappingURL=Quran.js.map