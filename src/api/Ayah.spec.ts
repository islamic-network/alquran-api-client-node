import { assert } from 'chai';
import AlQuranApiClientNode from '../../src/index';

describe('ayah passing test', () => {
  it('should load the first ayah', () => {
    return AlQuranApiClientNode.getAyah('1')
      .then((ayah) => {
        assert.equal(ayah.number, 1);
        assert.equal(ayah.surah.englishName, 'Al-Faatiha');
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
});
