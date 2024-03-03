
import { FileReader } from './fileread';
import { FileWriter } from './filewrite';

/**
 * Clase FileManager que se encarga de leer y escribir archivos.
 * @param fileReader El objeto que se encarga de leer archivos.
 * @param fileWriter El objeto que se encarga de escribir archivos.
 * @metodo readFile que devuelve un string con el contenido del archivo.
 * @metodo writeFile que no devuelve nada y escribe el contenido en el archivo.
 */
export class FileManager {
  /**
   * Construye un objeto FileManager con los objetos FileReader y FileWriter proporcionados.
   * @param fileReader El objeto que se encarga de leer archivos.
   * @param fileWriter El objeto que se encarga de escribir archivos.
   */
  constructor(private fileReader: FileReader, private fileWriter: FileWriter) {}

  /**
   * Lee el contenido del archivo proporcionado.
   * @param filePath La ruta del archivo que se leerá.
   * @returns El contenido del archivo.
   */
  public readFile(filePath: string): string {
    return this.fileReader.readFile(filePath);
  }

  /**
   * Escribe el contenido pasando por string.
   * @param filePath La ruta del archivo que se escribirá.
   * @param data El contenido que se escribirá en el archivo.
   */
  public writeFile(filePath: string, data: string): void {
    this.fileWriter.writeFile(filePath, data);
  }
}