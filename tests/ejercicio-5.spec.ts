/**
 * @description : Ejercicio 5 - Pruebas unitarias
 * @author : Ángela Izquierdo Padrón @angelaizquiierdo
 * @Fecha : 21/02/2024
 * @category : Tests
 * @class : DSI-Práctica6
 */

import "mocha";
import { expect } from "chai";

import { EmailService } from "../src/ejercicio-5/emailservice";
import { ShortMessageService } from "../src/ejercicio-5/shortmessageservice";
import { Notifier } from "../src/ejercicio-5/notifier";


// Stubbing para capturar la salida de console.log
let consoleOutput: string[] = [];
const stubConsoleLog = (message: string) => {
  consoleOutput.push(message);
};

describe("Ejercicio 5 - EmailService", () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it("emailservice.notify(texto) return in console Sending notification by email: Good evening, I wanted to request a tutorial tomorrow at 3:00 p.m. Computer System Development (DSI).", () => {
    const emailservice = new EmailService();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    emailservice.notify("Good evening, I wanted to request a tutorial tomorrow at 3:00 p.m. Computer System Development (DSI).");
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Sending notification by email: Good evening, I wanted to request a tutorial tomorrow at 3:00 p.m. Computer System Development (DSI)."]);
  });
});

describe(" Ejercicio 5 - ShortMessageService", () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it("mensajecorto.notify(texto) return in console Sending notification by short message: Elections 2023, go vote at the nearest school", () => {
    const mensajecorto = new ShortMessageService();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    mensajecorto.notify("Elections 2023, go vote at the nearest school");
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Sending notification by short message: Elections 2023, go vote at the nearest school"]);
  });
});

describe(" Ejercicio 5 - Notifier", () => {
  beforeEach(() => {
    consoleOutput = [];
  });
  const mensajeSMS = new ShortMessageService();
    const mensajeEmail= new EmailService();
    
  it("notifierEmail.sendNotification(texto) return in console Sending notification by email: Good afternoon, we inform you that your order has been shipped. To send you more information about your order, please contact us by replying to this email or calling 555-555-555", () => {
    const notifierEmail = new Notifier(mensajeEmail);
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    notifierEmail.sendNotification("Good afternoon, we inform you that your order has been shipped. To send you more information about your order, please contact us by replying to this email or calling 555-555-555");
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Sending notification by email: Good afternoon, we inform you that your order has been shipped. To send you more information about your order, please contact us by replying to this email or calling 555-555-555"]);
  });

  beforeEach(() => {
    consoleOutput = [];
  });

  it("notifierSMS.sendNotification(Reply to this SMS to find out more) return in console  Reply to this SMS to find out more", () => {
    const notifierSMS = new Notifier(mensajeSMS);
    
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    notifierSMS.sendNotification("Reply to this SMS to find out more");
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Sending notification by short message: Reply to this SMS to find out more"]);
  });

});
