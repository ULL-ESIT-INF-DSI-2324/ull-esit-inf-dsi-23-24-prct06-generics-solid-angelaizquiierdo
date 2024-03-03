import { Scannable} from "./scannable";

/**
 * Clase Scanner que implementa la interfaz Scannable
 * @implements Scannable
 * @metodo scan que no devuelve nada muestra por pantalla "Scanning..."
 */
export class Scanner implements Scannable {
  /**
   * Metodo scan que no devuelve nada
   */
  scan(): void {
    console.log("Scanning...");
  }
}