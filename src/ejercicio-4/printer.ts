import { Printable } from "./printable";

export class Printer implements Printable {
  /**
   * Metodo print que no devuelve nada
   */
  print(): void {
    console.log("Printing...");
  }
}
