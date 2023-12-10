import API from './index.js';
import AlQuranException from '../core/Exception.js';
export const getJuz = async (number, edition = null) => {
    const endpoint = '/juz/' + number + (edition ? '/' + edition : '');
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
const JuzAPI = {
    getJuz,
};
export default JuzAPI;
//# sourceMappingURL=Juz.js.map