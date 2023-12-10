import Edition from '../entity/Edition';
export declare const getEditions: (language?: string | null, type?: string | null, format?: string | null) => Promise<Edition[]>;
export declare const getEditionsByLanguage: (language: string) => Promise<Edition[]>;
export declare const getEditionsByType: (type: string) => Promise<Edition[]>;
export declare const getEditionsByFormat: (format: string) => Promise<Edition[]>;
export declare const getLanguages: () => Promise<string[]>;
export declare const getTypes: () => Promise<string[]>;
export declare const getFormats: () => Promise<string[]>;
declare const EditionsAPI: {
    getEditions: (language?: string | null, type?: string | null, format?: string | null) => Promise<Edition[]>;
    getEditionsByLanguage: (language: string) => Promise<Edition[]>;
    getEditionsByType: (type: string) => Promise<Edition[]>;
    getEditionsByFormat: (format: string) => Promise<Edition[]>;
    getLanguages: () => Promise<string[]>;
    getTypes: () => Promise<string[]>;
    getFormats: () => Promise<string[]>;
};
export default EditionsAPI;
