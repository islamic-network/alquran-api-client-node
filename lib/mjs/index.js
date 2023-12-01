import { getQuran } from './api/Quran.js';
import { getEditions, getEditionsByFormat, getEditionsByLanguage, getEditionsByType, getFormats, getLanguages, getTypes, } from './api/Editions.js';
import { getSurah, getSurahs, searchSurah } from './api/Surah.js';
import { getJuz } from './api/Juz.js';
import { getAyah } from './api/Ayah.js';
import { search } from './api/Search.js';
import { getMeta } from './api/Meta.js';
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
//# sourceMappingURL=index.js.map