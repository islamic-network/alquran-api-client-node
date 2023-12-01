"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const Logger = {
    debug: (...args) => {
        if (typeof process_1.default.env.DEBUG !== 'undefined' && process_1.default.env.DEBUG) {
            console.debug(...args);
            let logLineDetails = new Error().stack.split('at ')[3].trim();
            console.log('\n', '=================  LOG ' + new Date().toUTCString() + ' ===================', '\n', logLineDetails, '\n');
            console.debug(...args);
            console.log('\n', '=================              END LOG             ============================', '\n');
        }
    },
};
exports.default = Logger;
//# sourceMappingURL=Logger.js.map