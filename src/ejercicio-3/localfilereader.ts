import * as fs from "fs";
import { FileReader } from "./fileread";

/**
 * Clase LocalFileReader que se encarga de leer archivos locales.
 * @metodo readFile que devuelve un string con el contenido del archivo.
 */
export class LocalFileReader implements FileReader {
  /**
   * Lee el contenido del archivo proporcionado.
   * @param filePath La ruta del archivo que se leerá.
   * @returns El contenido del archivo.
   */
  readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo:", (error as Error).message);
      return "";
    }
  }
}
