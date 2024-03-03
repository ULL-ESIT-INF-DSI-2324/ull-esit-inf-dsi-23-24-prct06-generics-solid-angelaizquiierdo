import { Caja } from "./caja";
import { Enser } from "./enser";

/**
 * Clase que representa una mudanza
 * @property cajas de tipo Caja<T>[] que contiene las cajas de la mudanza
 * @method AnadirCaja Método para añadir una caja a la mudanza
 * @method removeCaja Método para eliminar una caja de la mudanza
 * @method ListarTodoEnsers Método para listar los Ensers que contiene la mudanza
 * @method getPesoTotal Método para obtener el peso total de la mudanza
 */
export class Mudanza<T extends Enser> {
  private cajas: Caja<T>[] = [];
 
  /**
   * Método para obtener el peso total de la mudanza
   * @returns number
   */
  getPesoTotal(): number {
    return this.cajas.reduce((total, caja) => total + caja.getPesoTotal(), 0);
  }

  /**
   * Método para añadir una caja a la mudanza
   * @param caja de la clase Caja<T>
   * @returns void
   */
  AnadirCaja(caja: Caja<T>): void {
    this.cajas.push(caja);
  }

  /**
   * Método para eliminar una caja de la mudanza
   * @param index el índice de la caja que queremos eliminar
   * @returns retorna la caja eliminada o undefined si el índice no es válido
   */
  EliminarCaja(index: number): Caja<T> | undefined {
    // Si el índice es válido, eliminar Caja de la mudanza
    if (index >= 0 && index < this.cajas.length) {
      return this.cajas.splice(index, 1)[0];
    }
    // Si el índice no es válido, devolver undefined
    return undefined;
  }

  /**
   * Método para listar los Ensers que contiene la mudanza
   * @returns void
   */
  ListarTodoEnsers(): string {
    let result: string = '';
    // Iterar sobre cada caja
    this.cajas.forEach((caja, index) => {
      // Agregar el número de la caja a la cadena de resultado
      result += `Caja #${index + 1}:\n`;
      // Obtener la lista de ensers de la caja y agregarlos a la cadena de resultado
      result += caja.ListarEnseres();
    });
    return result;
  }

}
