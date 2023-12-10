import Entity from '../core/Entity';
type Sajda = Entity & {
    surah: number;
    ayah: number;
    recommended: boolean;
    obligatory: boolean;
};
export default Sajda;
