import Entity from '../core/Entity';
import Ayah from './Ayah';
import Edition from './Edition';
import Surah from './Surah';
type Juz = Entity & {
    number: number;
    ayahs: Ayah[];
    surahs: Surah[];
    edition: Edition;
};
export default Juz;
