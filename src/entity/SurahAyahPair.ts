import Entity from '../core/Entity';

type SurahAyahPair = Entity & {
  surah: number;
  ayah: number;
};

export default SurahAyahPair;
