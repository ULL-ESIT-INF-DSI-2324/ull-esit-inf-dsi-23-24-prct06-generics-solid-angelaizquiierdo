import { Collectable } from "./Collectable";
import { Searchable } from "./Searchable";

export abstract class SearchableCollection<T>
  implements Collectable<T>, Searchable<T>
{
  protected datos: T[];

  constructor(initialData: T[]) {
    this.datos = initialData;
  }
  addItem(newItem: T): void {
    this.datos.push(newItem);
  }
  getItem(index: number): T {
    return this.datos[index];
  }

  removeItem(item: T): void {
    const index = this.datos.indexOf(item);
    if (index !== -1) {
      this.datos.splice(index, 1);
    }
  }

  getNumberOfItems(): number {
    return this.datos.length;
  }

  abstract search(dato: T): T[];
}
