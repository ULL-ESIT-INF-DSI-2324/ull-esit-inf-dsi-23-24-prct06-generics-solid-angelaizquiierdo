import { Printable } from "./printable";
import { Scanner } from "./scanner";

/**
 * Clase PrinterScanner que implementa las interfaces Printable y Scanner
 * @implements Printable
 * @implements Scanner
 * @metodo print que no devuelve nada muestra por pantalla "Printing..."
 * @metodo scan que no devuelve nada muestra por pantalla "Scanning..."
 */
export class PrinterScanner implements Printable, Scanner {
  /**
   * Metodo print que no devuelve nada
   */
  print(): void {
    console.log("Printing...");
  }
  /**
   * Metodo scan que no devuelve nada
   */
  scan(): void {
    console.log("Scanning...");
  }
}