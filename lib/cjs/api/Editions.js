"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormats = exports.getTypes = exports.getLanguages = exports.getEditionsByFormat = exports.getEditionsByType = exports.getEditionsByLanguage = exports.getEditions = void 0;
const index_1 = __importDefault(require("./index"));
const Exception_1 = __importDefault(require("../core/Exception"));
const url_1 = require("url");
const console = __importStar(require("console"));
const getEditions = async (language = null, type = null, format = null) => {
    const searchParams = new url_1.URLSearchParams();
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
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    console.log(response);
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getEditions = getEditions;
const getEditionsByLanguage = async (language) => {
    const endpoint = '/edition/language/' + language;
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getEditionsByLanguage = getEditionsByLanguage;
const getEditionsByType = async (type) => {
    const endpoint = '/edition/type/' + type;
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getEditionsByType = getEditionsByType;
const getEditionsByFormat = async (format) => {
    const endpoint = '/edition/format/' + format;
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getEditionsByFormat = getEditionsByFormat;
const getLanguages = async () => {
    const endpoint = '/edition/language';
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getLanguages = getLanguages;
const getTypes = async () => {
    const endpoint = '/edition/type';
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getTypes = getTypes;
const getFormats = async () => {
    const endpoint = '/edition/format';
    const response = await index_1.default.request(endpoint);
    if (response.code === 200) {
        return response.data;
    }
    throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Invalid response on endpoint "' + endpoint + '"');
};
exports.getFormats = getFormats;
const EditionsAPI = {
    getEditions: exports.getEditions,
    getEditionsByLanguage: exports.getEditionsByLanguage,
    getEditionsByType: exports.getEditionsByType,
    getEditionsByFormat: exports.getEditionsByFormat,
    getLanguages: exports.getLanguages,
    getTypes: exports.getTypes,
    getFormats: exports.getFormats,
};
exports.default = EditionsAPI;
//# sourceMappingURL=Editions.js.map