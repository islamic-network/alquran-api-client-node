import { assert } from 'chai';
import AlQuranApiClientNode from '../../src/index';

describe('Quran passing test', () => {
  it('should load Quran edition 1', () => {
    return AlQuranApiClientNode.getQuran('1')
      .then((quran) => {
        assert.equal(quran.edition.identifier, 'quran-simple');
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
  it('should load Quran edition en.asad', () => {
    return AlQuranApiClientNode.getQuran('en.asad')
      .then((quran) => {
        assert.equal(quran.edition.identifier, 'en.asad');
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
});
