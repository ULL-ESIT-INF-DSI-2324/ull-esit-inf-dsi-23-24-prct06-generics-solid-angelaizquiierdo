import * as fs from "fs";
import { FileWriter } from "./filewrite";

/**
 * Clase LocalFileWriter que se encarga de escribir archivos locales.
 * @metodo writeFile que no devuelve nada y escribe el contenido en el archivo.
 */
export class LocalFileWriter implements FileWriter {
  /**
   * Escribe el contenido en el archivo proporcionado.
   * @param filePath La ruta del archivo que se escribirá.
   * @param data El contenido que se escribirá en el archivo.
   */
  writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", (error as Error).message);
    }
  }
}
