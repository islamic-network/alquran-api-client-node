import Entity from '../core/Entity';
import Edition from './Edition';
import Surah from './Surah';
type Quran = Entity & {
    surahs: Surah[];
    edition: Edition;
};
export default Quran;
