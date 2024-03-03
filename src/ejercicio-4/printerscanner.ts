import { Printable } from "./printable";
import { Scanner } from "./scanner";

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