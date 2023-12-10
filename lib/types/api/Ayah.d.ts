import Ayah from '../entity/Ayah';
export declare const getAyah: (reference: string | number, edition?: string | null) => Promise<Ayah>;
declare const AyahAPI: {
    getAyah: (reference: string | number, edition?: string | null) => Promise<Ayah>;
};
export default AyahAPI;
