import Entity from '../core/Entity';
type Edition = Entity & {
    identifier: string;
    language: string;
    name: string;
    englishName: string;
    format: string;
    type: string;
    direction: string;
};
export default Edition;
