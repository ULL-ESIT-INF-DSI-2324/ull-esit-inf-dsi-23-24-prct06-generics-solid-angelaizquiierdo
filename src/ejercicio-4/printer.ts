import { Printable } from "./printable";

/**
 * Clase Printer que implementa la interfaz Printable
 * @implements Printable
 * @metodo print que no devuelve nada muestra por pantalla "Printing..."
 */
export class Printer implements Printable {
  /**
   * Metodo print que no devuelve nada
   */
  print(): void {
    console.log("Printing...");
  }
}
