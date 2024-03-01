
import { FileReader } from './fileread';
import { FileWriter } from './filewrite';

/**
 * 
 */
export class FileManager {
  constructor(private fileReader: FileReader, private fileWriter: FileWriter) {}

  public readFile(filePath: string): string {
    return this.fileReader.readFile(filePath);
  }

  public writeFile(filePath: string, data: string): void {
    this.fileWriter.writeFile(filePath, data);
  }
}