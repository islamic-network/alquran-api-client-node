import { assert } from 'chai';
import AlQuranApiClientNode from '../../src/index';

describe('Meta passing test', () => {
  it('should get the meta information', () => {
    return AlQuranApiClientNode.getMeta()
      .then((meta) => {
        assert.equal(meta.surahs.count, 114);
        assert.equal(meta.ayahs.count, 6236);
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
});
