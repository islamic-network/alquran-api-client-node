"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const index_1 = __importDefault(require("./index"));
const Exception_1 = __importDefault(require("../core/Exception"));
const search = async (keyword, surah, edition = null) => {
    const endpoint = '/search/' + keyword + '/' + (surah ? surah : 'all') + (edition ? '/' + edition : '');
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.search = search;
const SearchAPI = {
    search: exports.search,
};
exports.default = SearchAPI;
//# sourceMappingURL=Search.js.map