import API from './index';
import AlQuranException from '../core/Exception';
import SearchResult from '../entity/SearchResult';

export const search = async (
  keyword: string,
  surah: number,
  edition: string | number | null = null,
): Promise<SearchResult> => {
  const endpoint = '/search/' + keyword + '/' + (surah ? surah : 'all') + (edition ? '/' + edition : '');

  const response = await API.request(endpoint);

  if (response.code === 200) {
    return response.data as SearchResult;
  }

  throw new AlQuranException('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};

const SearchAPI = {
  search,
};

export default SearchAPI;
