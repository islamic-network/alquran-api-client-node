import Juz from '../entity/Juz';
export declare const getJuz: (number: number, edition?: string | number | null) => Promise<Juz>;
declare const JuzAPI: {
    getJuz: (number: number, edition?: string | number | null) => Promise<Juz>;
};
export default JuzAPI;
