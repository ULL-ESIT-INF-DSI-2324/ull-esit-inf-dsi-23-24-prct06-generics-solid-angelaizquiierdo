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

  it("emailservice.notify(texto) return en console Enviando notificación por correo electrónico: Buenas noches, quería solicitar un tutorial mañana a las 15 h. Desarrollo de Sistemas Computacionales (DSI).", () => {
    const emailservice = new EmailService();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    emailservice.notify("Buenas noches, quería solicitar un tutorial mañana a las 15 h. Desarrollo de Sistemas Computacionales (DSI).");
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Enviando notificación por correo electrónico: Buenas noches, quería solicitar un tutorial mañana a las 15 h. Desarrollo de Sistemas Computacionales (DSI)."]);
  });
});

describe(" Ejercicio 5 - ShortMessageService", () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it("mensajecorto.notify(texto) return en console Enviando notificación por SMS: Elecciones 2023, ve a votar al colegio más cercano", () => {
    const mensajecorto = new ShortMessageService();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    mensajecorto.notify("Elecciones 2023, ve a votar al colegio más cercano");
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Enviando notificación por SMS: Elecciones 2023, ve a votar al colegio más cercano"]);
  });
});

describe(" Ejercicio 5 - Notifier", () => {
  beforeEach(() => {
    consoleOutput = [];
  });
  const mensajeSMS = new ShortMessageService();
    const mensajeEmail= new EmailService();
    
  it("notifierEmail.sendNotification(texto) return en console Enviando notificación por correo electrónico: Buenas tardes, le informamos que su pedido ha sido enviado. Para enviarle más información sobre su pedido, por favor contáctenos respondiendo a este correo electrónico o llamando al 555-555-555", () => {
    const notifierEmail = new Notifier(mensajeEmail);
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    notifierEmail.sendNotification("Buenas tardes, le informamos que su pedido ha sido enviado. Para enviarle más información sobre su pedido, por favor contáctenos respondiendo a este correo electrónico o llamando al 555-555-555");
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Enviando notificación por correo electrónico: Buenas tardes, le informamos que su pedido ha sido enviado. Para enviarle más información sobre su pedido, por favor contáctenos respondiendo a este correo electrónico o llamando al 555-555-555"]);
  });

  beforeEach(() => {
    consoleOutput = [];
  });

  it("notifierSMS.sendNotification(Responde a este SMS para saber más) return en console Enviando notificación por SMS: Responde a este SMS para saber más ", () => {
    const notifierSMS = new Notifier(mensajeSMS);
    
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    notifierSMS.sendNotification("Responde a este SMS para saber más");
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(["Enviando notificación por SMS: Responde a este SMS para saber más"]);
  });

});
