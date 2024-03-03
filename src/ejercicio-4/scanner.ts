import { Scannable} from "./scannable";

export class Scanner implements Scannable {
  /**
   * Metodo scan que no devuelve nada
   */
  scan(): void {
    console.log("Scanning...");
  }
}