import { assert } from 'chai';
import AlQuranApiClientNode from '../../src/index';

describe('editions passing tests', () => {
  it('should load all editions', () => {
    return AlQuranApiClientNode.getEditions()
      .then((editions) => {
        assert.isAbove(editions.length, 0);
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
  it('should load english translation editions', () => {
    return AlQuranApiClientNode.getEditions('en', 'translation')
      .then((editions) => {
        assert.isAbove(editions.length, 0);
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
  it('should load editions by all types', () => {
    return AlQuranApiClientNode.getTypes().then((types) =>
      types.map((type) => {
        AlQuranApiClientNode.getEditionsByType(type)
          .then((editions) => {
            assert.isAbove(editions.length, 0);
          })
          .catch((reason) => {
            assert.fail(reason);
          });
      }),
    );
  });
});
