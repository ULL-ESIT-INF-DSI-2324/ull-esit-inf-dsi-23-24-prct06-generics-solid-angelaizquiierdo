import { SearchableCollection } from "./SearchableCollection";

/**
 * Clase NumericSearchableCollection
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   * Método search
   * @param targetNumber
   * @returns
   */
  search(targetNumber: number): number[] {
    return this.datos.filter((num) => num === targetNumber);
  }
}
