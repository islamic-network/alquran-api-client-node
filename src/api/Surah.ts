import API from './index';
import AlQuranException from '../core/Exception';
import Surah from '../entity/Surah';
import SearchAPI from './Search';
import SearchResult from '../entity/SearchResult';

export const getSurahs = async (): Promise<Surah[]> => {
  const endpoint = '/surah';
  const response = await API.request(endpoint);

  if (response.code === 200) {
    return response.data as Surah[];
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export const getSurah = async (number: number, edition: string | number | null = null): Promise<Surah> => {
  const endpoint = '/surah/' + number + (edition ? '/' + edition : '');
  const response = await API.request(endpoint);

  if (response.code === 200) {
    return response.data as Surah;
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

export const searchSurah = async (
  keyword: string,
  surah: number,
  edition: string | number | null = null,
): Promise<SearchResult> => {
  return SearchAPI.search(keyword, surah, edition);
};

const SurahAPI = {
  getSurahs,
  getSurah,
  searchSurah,
};

export default SurahAPI;
