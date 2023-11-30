import API from './index';
import AlQuranException from '../core/Exception';
import { URLSearchParams } from 'url';
import Edition from '../entity/Edition';
import * as console from 'console';

export const getEditions = async (
  language: string | null = null,
  type: string | null = null,
  format: string | null = null,
): Promise<Edition[]> => {
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
    return response.data as Edition[];
  }
  console.log(response);

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export const getEditionsByLanguage = async (language: string): Promise<Edition[]> => {
  const endpoint = '/edition/language/' + language;
  const response = await API.request(endpoint);
  if (response.code === 200) {
    return response.data as Edition[];
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export const getEditionsByType = async (type: string): Promise<Edition[]> => {
  const endpoint = '/edition/type/' + type;
  const response = await API.request(endpoint);
  if (response.code === 200) {
    return response.data as Edition[];
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export const getEditionsByFormat = async (format: string): Promise<Edition[]> => {
  const endpoint = '/edition/format/' + format;
  const response = await API.request(endpoint);
  if (response.code === 200) {
    return response.data as Edition[];
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export const getLanguages = async (): Promise<string[]> => {
  const endpoint = '/edition/language';
  const response = await API.request(endpoint);
  if (response.code === 200) {
    return response.data as string[]; // "ar", "am", ....
  }
  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export const getTypes = async (): Promise<string[]> => {
  const endpoint = '/edition/type';
  const response = await API.request(endpoint);
  if (response.code === 200) {
    return response.data as string[]; // "tafsir","translation","quran","transliteration","versebyverse"
  }
  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export const getFormats = async (): Promise<string[]> => {
  const endpoint = '/edition/format';
  const response = await API.request(endpoint);
  if (response.code === 200) {
    return response.data as string[]; // "text","audio"
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
