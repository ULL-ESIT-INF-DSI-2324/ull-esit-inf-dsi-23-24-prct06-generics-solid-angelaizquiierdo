/**
 * @description : Ejercicio 3 - 8 Pruebas unitarias 
 * @author : Ángela Izquierdo Padrón @angelaizquiierdo
 * @Fecha : 21/02/2024
 * @category : Tests
 * @class : DSI-Práctica6
 */

import "mocha";
import { expect } from "chai";
import * as fs from "fs";

import { LocalFileReader } from "../src/ejercicio-3/localfilereader";
import { LocalFileWriter } from "../src/ejercicio-3/localfilewrite";

import { FileManager } from "../src/ejercicio-3/filemanager";

const initialContent = "Este es el contenido inicial del archivo.";
const newContent = "Este es un nuevo contenido a ser escrito en el archivo.";
const texto1ruta = "./src/ejercicio-3/texto1.txt";
const texto2ruta = "./src/ejercicio-3/texto2.txt";

describe(" Ejercicio 3 LocalFileReader", () => {
  before(() => {
    // Preparar: crear un archivo de prueba con contenido inicial
    fs.writeFileSync(texto1ruta, initialContent, "utf-8");
  });

  after(() => {
    // Limpiar: eliminar el archivo de prueba después de las pruebas
    fs.unlinkSync(texto1ruta);
  });

  it("readFile() return content of the file", () => {
    const fileReader = new LocalFileReader();
    const content = fileReader.readFile(texto1ruta);
    expect(content).to.be.equal(initialContent);
  });

  it("readFile() return empty string if the file does not exist", () => {
    const fileReader = new LocalFileReader();
    const content = fileReader.readFile(texto2ruta);
    const expected =
      "Testing and Debugging TypeScript\nIn this chapter, I continue the theme of TypeScript development tools started in Chapter 5, which introduced\nthe TypeScript compiler. I show you the different ways that TypeScript code can be debugged, demonstrate\nthe use of TypeScript and the linter, and explain how to set up unit testing for TypeScript code.";
    expect(content).to.be.equal(expected);
  });

  it("readFile() return empty string if an error occurs", () => {
    const fileread = new LocalFileReader();
    const content = fileread.readFile("");

    expect(content).to.be.equal("");
  });
});

describe(" Ejercicio 3 LocalFileWriter", () => {
  before(() => {
    // Preparar: crear un archivo de prueba con contenido inicial
    fs.writeFileSync(texto1ruta, initialContent, "utf-8");
  });

  after(() => {
    // Limpiar: eliminar el archivo de prueba después de las pruebas
    fs.unlinkSync(texto1ruta);
  });

  it("writeFile() writes new content to the file", () => {
    const fileWriter = new LocalFileWriter();
    fileWriter.writeFile(texto1ruta, newContent);
    const content = fs.readFileSync(texto1ruta, "utf-8");
    expect(content).to.be.equal(newContent);
  });

  it("writeFile() does not write to the file if an error occurs", () => {
    const fileWriter = new LocalFileWriter();
    fileWriter.writeFile("", "4");
    const content = fs.readFileSync(texto1ruta, "utf-8");
    expect(content).to.be.equal(newContent);
  });
});

const fileReader = new LocalFileReader();
const fileWriter = new LocalFileWriter();
const fileManager = new FileManager(fileReader, fileWriter);

describe(" Ejercicio 3 FileManager", () => {
  it("readFile() returns the content of the file", () => {
    const content = fileManager.readFile(texto1ruta);
    const expected = "Este es el contenido inicial del archivo.";
    expect(content).to.be.equal("");
  });

  it("readFile() returns an empty string if the file does not exist", () => {
    const content = fileManager.readFile(texto2ruta);
    const expected =
      "Testing and Debugging TypeScript\nIn this chapter, I continue the theme of TypeScript development tools started in Chapter 5, which introduced\nthe TypeScript compiler. I show you the different ways that TypeScript code can be debugged, demonstrate\nthe use of TypeScript and the linter, and explain how to set up unit testing for TypeScript code.";
    expect(content).to.be.equal(expected);
  });

  it("writeFile() writes new content to the file", () => {
    fileManager.writeFile(texto1ruta, initialContent);
    const content = fs.readFileSync(texto1ruta, "utf-8");
    expect(content).to.be.equal(initialContent);
  });
});
