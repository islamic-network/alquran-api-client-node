import { assert } from 'chai';
import AlQuranApiClientNode from '../../src/index';

describe('Juz passing test', () => {
  it('should load Juz 1', () => {
    return AlQuranApiClientNode.getJuz(1)
      .then((juz) => {
        assert.equal(juz.number, 1);
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
  it('should load Juz 1 edition en.asad', () => {
    return AlQuranApiClientNode.getJuz(1, 'en.asad')
      .then((juz) => {
        assert.equal(juz.edition.identifier, 'en.asad');
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
});
