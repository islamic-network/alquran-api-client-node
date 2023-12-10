"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuran = void 0;
const index_1 = __importDefault(require("./index"));
const Exception_1 = __importDefault(require("../core/Exception"));
const getQuran = async (edition = null) => {
    const endpoint = '/quran' + (edition ? '/' + edition : '');
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getQuran = getQuran;
const QuranAPI = {
    getQuran: exports.getQuran,
};
exports.default = QuranAPI;
//# sourceMappingURL=Quran.js.map