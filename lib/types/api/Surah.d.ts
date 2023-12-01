import Surah from '../entity/Surah';
import SearchResult from '../entity/SearchResult';
export declare const getSurahs: () => Promise<Surah[]>;
export declare const getSurah: (number: number, edition?: string | number | null) => Promise<Surah>;
export declare const searchSurah: (keyword: string, surah: number, edition?: string | number | null) => Promise<SearchResult>;
declare const SurahAPI: {
    getSurahs: () => Promise<Surah[]>;
    getSurah: (number: number, edition?: string | number | null) => Promise<Surah>;
    searchSurah: (keyword: string, surah: number, edition?: string | number | null) => Promise<SearchResult>;
};
export default SurahAPI;
