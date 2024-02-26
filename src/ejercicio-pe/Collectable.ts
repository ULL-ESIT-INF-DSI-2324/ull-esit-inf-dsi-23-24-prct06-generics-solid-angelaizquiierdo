/**
 *
 */
export interface Collectable<T> {
  addItem(newItem: T): void;
  getItem(index: number): T;
  removeItem(item: T): void;
  getNumberOfItems(): number;
}