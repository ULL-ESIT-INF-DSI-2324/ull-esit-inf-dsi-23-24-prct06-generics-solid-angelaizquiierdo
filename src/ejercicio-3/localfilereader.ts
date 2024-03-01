import * as fs from "fs";
import { FileReader } from "./fileread";

export class LocalFileReader implements FileReader {
  readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo:", (error as Error).message);
      return "";
    }
  }
}
