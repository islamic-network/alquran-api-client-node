declare const AlQuranApiClientNode: {
    getQuran: (edition?: string | number | null) => Promise<import("./entity/Quran").default>;
    getEditions: (language?: string | null, type?: string | null, format?: string | null) => Promise<import("./entity/Edition").default[]>;
    getEditionsByLanguage: (language: string) => Promise<import("./entity/Edition").default[]>;
    getEditionsByFormat: (format: string) => Promise<import("./entity/Edition").default[]>;
    getEditionsByType: (type: string) => Promise<import("./entity/Edition").default[]>;
    getLanguages: () => Promise<string[]>;
    getFormats: () => Promise<string[]>;
    getTypes: () => Promise<string[]>;
    getSurahs: () => Promise<import("./entity/Surah").default[]>;
    getSurah: (number: number, edition?: string | number | null) => Promise<import("./entity/Surah").default>;
    searchSurah: (keyword: string, surah: number, edition?: string | number | null) => Promise<import("./entity/SearchResult").default>;
    getJuz: (number: number, edition?: string | number | null) => Promise<import("./entity/Juz").default>;
    getAyah: (reference: string | number, edition?: string | null) => Promise<import("./entity/Ayah").default>;
    search: (keyword: string, surah: number, edition?: string | number | null) => Promise<import("./entity/SearchResult").default>;
    getMeta: () => Promise<import("./entity/Meta").default>;
};
export default AlQuranApiClientNode;
