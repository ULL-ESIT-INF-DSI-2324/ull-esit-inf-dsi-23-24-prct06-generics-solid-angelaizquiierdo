import { Enser } from "./enser";
import { nivelFragilidad } from "./tipo_datos";

/**
 * Clase que representa una caja
 * @property nombre: Nombre de la caja
 * @property enseres de tipo T[]
 * @property fragilidad de tipo nivelFragilidad
 * @method getNombre Método para obtener el nombre de la caja
 * @method getFragilidad Método para obtener el nivel de fragilidad de la caja
 * @method getEnseres Método para obtener los ensers que contiene la caja
 * @method CambiarFragilidad Método para cambiar el nivel de fragilidad de la caja
 * @method AnadirEnser Método para añadir un enser a la caja
 * @method EliminarEnser Método para eliminar un enser de la caja
 * @method ListarEnseres Método para listar los ensers que contiene la caja
 * @method BuscarEnser Método para buscar un enser en la caja
 * @method getPesoTotal Método para obtener el peso total de los ensers en la caja
 */
export class Caja<T extends Enser> {
  /**
   * Constructor de la clase Caja automatica que recibe el nombre, los ensers y el nivel de fragilidad atributos privados
   * @param nombre nombre que le queremos poner en la caja(por cosas de cocina, ropa, mixto, etc)
   * @param enseres los objetos que queremos meter en la caja
   * @param fragilidad el nivel de fragilidad que tiene la caja (1-5)
   */
  constructor(
    private nombre: string,
    private enseres: T[],
    private fragilidad: nivelFragilidad,
  ) {}

  /**
   * Getter para obtener el nombre de la caja
   * @returns nombre (devuelve el nombre de la caja)
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Getter para obtener el nivel de fragilidad de la caja
   * @returns nivelFragilidad (devuelve el nivel de fragilidad de la caja)
   */
  getFragilidad(): nivelFragilidad {
    return this.fragilidad;
  }
  /**
   * Getter para obtener los ensers que contiene la caja
   * @returns T[] (devuelve un array con los ensers que contiene la caja)
   */
  getEnseres(): T[] {
    return this.enseres;
  }

  /**
   * Método para cambiar la caja el nivel de fragilidad de su contenido
   * @param fragilidad
   */
  CambiarFragilidad(fragilidad: nivelFragilidad): void {
    this.fragilidad = fragilidad;
  }

  /**
   * Método para añadir un Enser a la caja
   * @param enser Enser a añadir
   * @returns void (no devuelve nada, solo añade el enser a la caja)
   */
  AnadirEnser(enser: T): void {
    this.enseres.push(enser);
  }

  /**
   * Método para eliminar un Enser de la caja
   * @param name Nombre del Enser a eliminar
   * @returns T | undefined
   */
  EliminarEnser(nombre: string): T | undefined {
    // Obtenemos el índice del Enser a eliminar
    const index = this.enseres.findIndex((Enser) => Enser.nombre === nombre);
    // Si el índice no es -1, existe y, por tanto, lo eliminamos
    if (index !== -1) {
      return this.enseres.splice(index, 1)[0];
    }
    // Si el índice es -1, no existe y, por tanto, devolvemos undefined
    return undefined;
  }

/**
 * Método para listar los Ensers que contiene la caja
 * @returns string La lista de Ensers en la caja como una cadena
 */
ListarEnseres(): string {
  let result: string = "Lista de Ensers en la caja:\n";
  let i: number = 1;
  this.enseres.forEach((enser) => {
      result += `${i++}. ${enser.nombre}\n`;
  });
  return result;
}


  /**
   * Método para buscar un Enser en la caja
   * @param name Nombre del Enser a buscar
   * @returns boolean( si existe o no el enser en la caja)
   */
  BuscarEnser(nombre: string): boolean {
    return this.enseres.some((enser) => enser.nombre === nombre);
  }

  /**
   * Método para obtener el peso total de los ensers en la caja
   * @returns number
   */
  getPesoTotal(): number {
    return this.enseres.reduce(
      (totalWeight, enser) => totalWeight + enser.peso,
      0,
    );
  }
}
