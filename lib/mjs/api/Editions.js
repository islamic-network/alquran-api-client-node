import API from './index.js';
import AlQuranException from '../core/Exception.js';
import { URLSearchParams } from 'url';
import * as console from 'console';
export const getEditions = async (language = null, type = null, format = null) => {
    const searchParams = new URLSearchParams();
    if (language) {
        searchParams.set('language', language);
    }
    if (type) {
        searchParams.set('type', type);
    }
    if (format) {
        searchParams.set('format', format);
    }
    const endpoint = '/edition?' + searchParams.toString();
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    console.log(response);
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
export const getEditionsByLanguage = async (language) => {
    const endpoint = '/edition/language/' + language;
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
export const getEditionsByType = async (type) => {
    const endpoint = '/edition/type/' + type;
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
export const getEditionsByFormat = async (format) => {
    const endpoint = '/edition/format/' + format;
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
export const getLanguages = async () => {
    const endpoint = '/edition/language';
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
export const getTypes = async () => {
    const endpoint = '/edition/type';
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
export const getFormats = async () => {
    const endpoint = '/edition/format';
    const response = await API.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
const EditionsAPI = {
    getEditions,
    getEditionsByLanguage,
    getEditionsByType,
    getEditionsByFormat,
    getLanguages,
    getTypes,
    getFormats,
};
export default EditionsAPI;
//# sourceMappingURL=Editions.js.map