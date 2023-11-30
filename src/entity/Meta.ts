import Entity from '../core/Entity';
import Surah from './Surah';
import Sajda from './Sajda';
import SurahAyahPair from './SurahAyahPair';
import Juz from './Juz';

type Meta = Entity & {
  ayahs: { count: number };
  surahs: { count: number; references: Surah[] };
  sajdas: { count: number; references: Sajda[] };
  rukus: { count: number; references: SurahAyahPair[] };
  pages: { count: number; references: SurahAyahPair[] };
  manzils: { count: number; references: SurahAyahPair[] };
  hizbQuarters: { count: number; references: SurahAyahPair[] };
  juzs: { count: number; references: Juz[] };
};

export default Meta;
