import Entity from '../core/Entity';
import Edition from './Edition';
import Surah from './Surah';

type SearchMatch = Entity & {
  number: number;
  text: string;
  edition: Edition;
  surah: Surah;
  numberInSurah: number;
};

export default SearchMatch;
