import Entity from '../core/Entity';

type SearchMatch = Entity & {
  count: number;
  matches: SearchMatch[];
};

export default SearchMatch;
