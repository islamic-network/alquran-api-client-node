import process from 'process';

const Logger = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  debug: (...args: any[]) => {
    if (typeof process.env.DEBUG !== 'undefined' && process.env.DEBUG) {
      console.debug(...args);
      const logLineDetails = new Error().stack!.split('at ')[3].trim();
      console.log(
        '\n',
        '=================  LOG ' + new Date().toUTCString() + ' ===================',
        '\n',
        logLineDetails,
        '\n',
      );
      console.debug(...args);
      console.log('\n', '=================              END LOG             ============================', '\n');
    }
  },
};

export default Logger;
