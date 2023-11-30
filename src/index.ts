import { getQuran } from './api/Quran';
import {
  getEditions,
  getEditionsByFormat,
  getEditionsByLanguage,
  getEditionsByType,
  getFormats,
  getLanguages,
  getTypes,
} from './api/Editions';
import { getSurah, getSurahs, searchSurah } from './api/Surah';
import { getJuz } from './api/Juz';
import { getAyah } from './api/Ayah';
import { search } from './api/Search';
import { getMeta } from './api/Meta';

const AlQuranApiClientNode = {
  getQuran,
  getEditions,
  getEditionsByLanguage,
  getEditionsByFormat,
  getEditionsByType,
  getLanguages,
  getFormats,
  getTypes,
  getSurahs,
  getSurah,
  searchSurah,
  getJuz,
  getAyah,
  search,
  getMeta,
};
export default AlQuranApiClientNode;
