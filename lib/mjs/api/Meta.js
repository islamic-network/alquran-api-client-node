import API from './index.js';
import AlQuranException from '../core/Exception.js';
export const getMeta = async () => {
    const endpoint = '/meta';
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
const MetaAPI = {
    getMeta,
};
export default MetaAPI;
//# sourceMappingURL=Meta.js.map