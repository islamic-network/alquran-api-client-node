import API from './index.js';
import AlQuranException from '../core/Exception.js';
export const search = async (keyword, surah, edition = null) => {
    const endpoint = '/search/' + keyword + '/' + (surah ? surah : 'all') + (edition ? '/' + edition : '');
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
const SearchAPI = {
    search,
};
export default SearchAPI;
//# sourceMappingURL=Search.js.map