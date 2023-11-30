import { assert } from 'chai';
import AlQuranApiClientNode from '../../src/index';

describe('Surah passing test', () => {
  it('should load all Surahs', () => {
    return AlQuranApiClientNode.getSurahs()
      .then((surahs) => {
        assert.equal(surahs.length, 114);
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
  it('should load Surah 1', () => {
    return AlQuranApiClientNode.getSurah(1)
      .then((surah) => {
        assert.equal(surah.number, 1);
        assert.equal(surah.englishName, 'Al-Faatiha');
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
  it('should load Surah 1 edition en.asad', () => {
    return AlQuranApiClientNode.getSurah(1, 'en.asad')
      .then((surah) => {
        assert.equal(surah.edition.identifier, 'en.asad');
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
  it('should search for term "believer" in the english edition of surah 5', () => {
    return AlQuranApiClientNode.searchSurah('believer', 5, 'en')
      .then((searchResults) => {
        assert.isAbove(searchResults.count, 0);
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
});
