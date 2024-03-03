/**
 * @description : Ejercicio 4 - 4 Pruebas unitarias 
 * @author : Ángela Izquierdo Padrón @angelaizquiierdo
 * @Fecha : 21/02/2024
 * @category : Tests
 * @class : DSI-Práctica6
 */

import "mocha";
import { expect } from "chai";

import { Printer } from "../src/ejercicio-4/printer";
import { Scanner } from "../src/ejercicio-4/scanner";
import { PrinterScanner } from "../src/ejercicio-4/printerscanner";

// Stubbing para capturar la salida de console.log
let consoleOutput: string[] = [];
const stubConsoleLog = (message: string) => {
  consoleOutput.push(message);
};

describe("Ejercicio 4 - Printer", () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it("printer.print() return en consola Printing...", () => {
    const printer = new Printer();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    printer.print();
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Printing..."]);
  });
});

describe(" Ejercicio 4 Scanner", () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it("scanner.scan() return en consola Scanning...", () => {
    const scanner = new Scanner();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    scanner.scan();
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Scanning..."]);
  });
});

describe(" Ejercicio 4 PrinterScanner", () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it("printerscanner1.print() return en consola Printing...", () => {
    const printerscanner1 = new PrinterScanner();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    printerscanner1.print();
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Printing..."]);
  });

  beforeEach(() => {
    consoleOutput = [];
  });

  it("printscanner.scan() return en consola Scanning...", () => {
    const printscanner = new PrinterScanner();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    printscanner.scan();
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Scanning..."]);
  });

});
