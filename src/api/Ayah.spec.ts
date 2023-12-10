import { assert } from 'chai';
import AlQuranApiClientNode from '../../src/index';

describe('Ayah passing test', () => {
  it('should load Ayah 1', () => {
    return AlQuranApiClientNode.getAyah('1')
      .then((ayah) => {
        assert.equal(ayah.number, 1);
        assert.equal(ayah.surah.englishName, 'Al-Faatiha');
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
  it("should load Ayah 765 with Marmaduke Pickthall's English translation", () => {
    return AlQuranApiClientNode.getAyah(765, 'en.pickthall')
      .then((ayah) => {
        assert.equal(ayah.number, 765);
        assert.equal(ayah.edition.identifier, 'en.pickthall');
      })
      .catch((reason) => {
        assert.fail(reason);
      });
  });
});
