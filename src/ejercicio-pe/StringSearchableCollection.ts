import { SearchableCollection } from "./SearchableCollection";

/**
 * Clase StringSearchableCollection
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  search(substring: string): string[] {
    return this.datos.filter((str) => str.includes(substring));
  }
}
