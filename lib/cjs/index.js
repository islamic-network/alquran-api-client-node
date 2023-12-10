"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quran_1 = require("./api/Quran");
const Editions_1 = require("./api/Editions");
const Surah_1 = require("./api/Surah");
const Juz_1 = require("./api/Juz");
const Ayah_1 = require("./api/Ayah");
const Search_1 = require("./api/Search");
const Meta_1 = require("./api/Meta");
const AlQuranApiClientNode = {
    getQuran: Quran_1.getQuran,
    getEditions: Editions_1.getEditions,
    getEditionsByLanguage: Editions_1.getEditionsByLanguage,
    getEditionsByFormat: Editions_1.getEditionsByFormat,
    getEditionsByType: Editions_1.getEditionsByType,
    getLanguages: Editions_1.getLanguages,
    getFormats: Editions_1.getFormats,
    getTypes: Editions_1.getTypes,
    getSurahs: Surah_1.getSurahs,
    getSurah: Surah_1.getSurah,
    searchSurah: Surah_1.searchSurah,
    getJuz: Juz_1.getJuz,
    getAyah: Ayah_1.getAyah,
    search: Search_1.search,
    getMeta: Meta_1.getMeta,
};
exports.default = AlQuranApiClientNode;
//# sourceMappingURL=index.js.map