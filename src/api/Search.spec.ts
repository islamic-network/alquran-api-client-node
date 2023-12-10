import { assert } from 'chai';
import AlQuranApiClientNode from '../../src/index';

describe('Search passing test', () => {
  it('should search for term "disbeliever" in the english edition of surah 8', () => {
    return AlQuranApiClientNode.searchSurah('believer', 8, 'en')
      .then((searchResults) => {
        assert.isAbove(searchResults.count, 0);
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
});
