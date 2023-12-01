"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const Exception_1 = __importDefault(require("../core/Exception"));
const Logger_1 = __importDefault(require("../helpers/Logger"));
const API_URL = 'https://api.alquran.cloud/v1';
const API = {
    request: async (endpoint) => {
        const url = API_URL + endpoint;
        const headers = {
            'Content-type': 'application/json',
            'User-Agent': 'AlQuranCloudNodeJSClient/1.0.1',
        };
        const options = {
            method: 'GET',
        };
        const config = {
            ...options,
            ...headers,
        };
        Logger_1.default.debug('Requesting "' + url + '" with config:', config);
        const response = await (0, node_fetch_1.default)(url, config);
        if (response.ok) {
            return (await response.json());
        }
        throw new Exception_1.default('AlQuranCloudNodeJSClient ::: ALERT ::: Unable to connect to the Al Quran Cloud API');
    },
};
exports.default = API;
//# sourceMappingURL=index.js.map