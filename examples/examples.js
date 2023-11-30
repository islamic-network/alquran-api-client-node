import AlQuranApiClientNode from 'alquran-api-client';

const testLog = (...args) => {
  if (typeof process.env.DEBUG !== 'undefined' && process.env.DEBUG) {
    let logLineDetails = new Error().stack.split('at ')[3].trim();
    console.log(
      '\n',
      '=================  LOG ' + new Date().toUTCString() + ' ===================',
      '\n',
      logLineDetails,
      '\n',
    );
    console.debug(args);
    console.log('\n', '=================              END LOG             ============================', '\n');
  } else {
    console.debug(args);
  }
};

(async () => {
  testLog('Quran edition 1', await AlQuranApiClientNode.getQuran('1'));

  testLog('Quran edition en.asad', await AlQuranApiClientNode.getQuran('en.asad'));

  testLog('English editions: ', await AlQuranApiClientNode.getEditions('en'));
  testLog('Get english translation editions', await AlQuranApiClientNode.getEditions('en', 'translation'));

  const types = await AlQuranApiClientNode.getTypes();
  testLog('Get types', types);
  const editionsByType = [];
  for (const type of types) {
    editionsByType.push(await AlQuranApiClientNode.getEditionsByType(type));
  }
  testLog('Get editions by types', editionsByType);

  const formats = await AlQuranApiClientNode.getFormats();
  testLog('Get formats', formats);
  const editionsByFormat = [];
  for (const format of formats) {
    editionsByFormat.push(await AlQuranApiClientNode.getEditionsByFormat(format));
  }
  testLog('Get editions by format', editionsByFormat);

  process.exit();

  testLog('All Surahs', await AlQuranApiClientNode.getSurahs());
  testLog('Surah 1', await AlQuranApiClientNode.getSurah(1));
  testLog('Surah 1 edition en.asad', await AlQuranApiClientNode.getSurah(1, 'en.asad'));

  testLog('Juz 1', await AlQuranApiClientNode.getJuz(1));
  testLog('Juz 1 edition en.asad', await AlQuranApiClientNode.getJuz(1, 'en.asad'));

  testLog('"ayah" will be Ayah 1', await AlQuranApiClientNode.getAyah('1'));

  testLog(
    '"ayah" will be Ayah 765 with Marmaduke Pickthall\'s English translation',
    await AlQuranApiClientNode.getAyah(765, 'en.pickthall'),
  );

  testLog(
    'Search for term "believer" in the english edition of surah 5',
    await AlQuranApiClientNode.search('believer', 5, 'en'),
  );

  testLog('´Loading meta information', await AlQuranApiClientNode.getMeta());
})();
