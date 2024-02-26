//import { Collectable } from "./Collectable";

/**
 * Interface que define el comportamiento de una colección
 */
export interface Searchable<T> {
  search(term: T): T[];
}