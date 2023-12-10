import SearchResult from '../entity/SearchResult';
export declare const search: (keyword: string, surah: number, edition?: string | number | null) => Promise<SearchResult>;
declare const SearchAPI: {
    search: (keyword: string, surah: number, edition?: string | number | null) => Promise<SearchResult>;
};
export default SearchAPI;
