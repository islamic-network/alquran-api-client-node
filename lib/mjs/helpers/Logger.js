import process from 'process';
const Logger = {
    debug: (...args) => {
        if (typeof process.env.DEBUG !== 'undefined' && process.env.DEBUG) {
            console.debug(...args);
            let logLineDetails = new Error().stack.split('at ')[3].trim();
            console.log('\n', '=================  LOG ' + new Date().toUTCString() + ' ===================', '\n', logLineDetails, '\n');
            console.debug(...args);
            console.log('\n', '=================              END LOG             ============================', '\n');
        }
    },
};
export default Logger;
//# sourceMappingURL=Logger.js.map