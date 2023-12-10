"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSurah = exports.getSurah = exports.getSurahs = void 0;
const index_1 = __importDefault(require("./index"));
const Exception_1 = __importDefault(require("../core/Exception"));
const Search_1 = __importDefault(require("./Search"));
const getSurahs = async () => {
    const endpoint = '/surah';
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getSurahs = getSurahs;
const getSurah = async (number, edition = null) => {
    const endpoint = '/surah/' + number + (edition ? '/' + edition : '');
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getSurah = getSurah;
const searchSurah = async (keyword, surah, edition = null) => {
    return Search_1.default.search(keyword, surah, edition);
};
exports.searchSurah = searchSurah;
const SurahAPI = {
    getSurahs: exports.getSurahs,
    getSurah: exports.getSurah,
    searchSurah: exports.searchSurah,
};
exports.default = SurahAPI;
//# sourceMappingURL=Surah.js.map