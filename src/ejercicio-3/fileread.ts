
/**
 * Interface FileReader
 * @interface FileReader
 */
export interface FileReader {
  /**
   * Metodo que lee el contenido del archivo
   * @param filePath La ruta del archivo que se leerá.
   * @returns El contenido del archivo.
   */
  readFile(filePath: string): string;
}
