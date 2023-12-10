import Entity from '../core/Entity';
import Edition from './Edition';
import Surah from './Surah';
type Ayah = Entity & {
    number: number;
    text: string;
    edition: Edition;
    surah: Surah;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: boolean;
};
export default Ayah;
