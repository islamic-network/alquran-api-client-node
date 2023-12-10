import Entity from '../core/Entity';
import Ayah from './Ayah';
import Edition from './Edition';
type Surah = Entity & {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    revelationType: string;
    numberOfAyahs: number;
    ayahs: Ayah[];
    edition: Edition;
};
export default Surah;
