
/**
 * Interface that represents a file writer
 * @interface FileWriter 
 */
export interface FileWriter {
  writeFile(filePath: string, data: string): void;
}