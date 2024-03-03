
/**
 * Interface that represents a file writer
 * @interface FileWriter 
 */
export interface FileWriter {
  /**
   * Metrodo que escribe el contenido en el archivo
   * @param filePath La ruta del archivo que se escribirá.
   * @param data Contiene el contenido que quiere escribir en el archivo.
   */
  writeFile(filePath: string, data: string): void;
}