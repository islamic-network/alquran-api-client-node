import Quran from '../entity/Quran';
export declare const getQuran: (edition?: string | number | null) => Promise<Quran>;
declare const QuranAPI: {
    getQuran: (edition?: string | number | null) => Promise<Quran>;
};
export default QuranAPI;
