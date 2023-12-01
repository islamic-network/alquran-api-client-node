import API from './index.js';
import AlQuranException from '../core/Exception.js';
import SearchAPI from './Search.js';
export const getSurahs = async () => {
    const endpoint = '/surah';
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
export const getSurah = async (number, edition = null) => {
    const endpoint = '/surah/' + number + (edition ? '/' + edition : '');
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
export const searchSurah = async (keyword, surah, edition = null) => {
    return SearchAPI.search(keyword, surah, edition);
};
const SurahAPI = {
    getSurahs,
    getSurah,
    searchSurah,
};
export default SurahAPI;
//# sourceMappingURL=Surah.js.map