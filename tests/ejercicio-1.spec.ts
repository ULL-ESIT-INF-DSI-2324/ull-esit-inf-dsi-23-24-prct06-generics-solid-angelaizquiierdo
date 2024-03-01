/**
 * @description : Ejercicio 1 - Pruebas unitarias
 * @author : Ángela Izquierdo Padrón @angelaizquiierdo
 * @Fecha : 21/02/2024 
 * @category : Tests
 * @class : DSI-Práctica6
 */


import "mocha";
import { expect } from "chai";

import { Tamayo } from "../src/ejercicio-1/tamayo";
import { Caja } from "../src/ejercicio-1/caja";
import {
  Utencilios,
  DispositivoElectronico,
  Vajilla,
  Prenda,
} from "../src/ejercicio-1/TipoeEnseres";
import { Mudanza } from "../src/ejercicio-1/mudanza";

const Utencilios1 = new Utencilios(
  "Cuchillo",
  new Tamayo(15, 3, 0.5),
  0.5,
  1,
  "Ikea",
  "cubierto de cocina",
);
const Utencilios2 = new Utencilios(
  "Tenedor",
  new Tamayo(15, 3, 0.5),
  0.5,
  1,
  "Ikea",
  "cubierto de cocina",
);
const Utencilios3 = new Utencilios(
  "Cuchara",
  new Tamayo(15, 3, 0.5),
  0.5,
  1,
  "Ikea",
  "cubierto de cocina",
);

const DispositivoElectronico1 = new DispositivoElectronico(
  "TV 50",
  new Tamayo(120, 70, 10),
  25,
  "LG",
  "Television plana",
);
const DispositivoElectronico2 = new DispositivoElectronico(
  "Monitor 24",
  new Tamayo(60, 35, 8),
  6,
  "Mitsai",
  "Monitor de ordenador",
);

const Vajilla1 = new Vajilla(
  "Plato",
  new Tamayo(20, 20, 2),
  0.5,
  1,
  "Plato llano",
);
const Vajilla2 = new Vajilla(
  "Vaso",
  new Tamayo(10, 10, 10),
  0.3,
  1,
  "Vaso de agua",
);
const Vajilla3 = new Vajilla(
  "Taza",
  new Tamayo(10, 10, 10),
  0.3,
  1,
  "Taza de cafe",
);

const Prenda1 = new Prenda(
  "Pantalones",
  new Tamayo(20, 20, 2),
  0.5,
  1,
  "Pantalones",
);
const Prenda2 = new Prenda(
  "Camiseta",
  new Tamayo(10, 10, 10),
  0.3,
  1,
  "Camiseta",
);
const Prenda3 = new Prenda("Jersey", new Tamayo(10, 10, 10), 0.3, 1, "Jersey");

const caja1 = new Caja("Caja1", [Utencilios1, Utencilios2], 1);
const caja2 = new Caja(
  "Caja2",
  [DispositivoElectronico1, DispositivoElectronico2],
  1,
);
const caja3 = new Caja("Caja3", [Vajilla1, Vajilla2], 1);
const caja4 = new Caja("Caja4", [Prenda1, Prenda3], 1);

describe("Ejercicio 1 - Utencilios", () => {
  it("getNombre() return Cuchillo", () => {
    expect(Utencilios1.getNombre()).to.be.equal("Cuchillo");
  });

  it("getdimensiones().getDescripcion() return Ancho: 15cm , Alto: 3cm , Fondo: 0.5cm ", () => {
    expect(Utencilios2.getdimensiones().getDescripcion()).to.be.equal(
      "Ancho: 15cm , Alto: 3cm , Fondo: 0.5cm ",
    );
  });

  it("getPesoTotal() return correct total weight", () => {
    const tipoUtencilios = Utencilios3.getTipoUtencilios();
    expect(tipoUtencilios).to.be.equal("cubierto de cocina");
  });
});

describe("Ejercicio 1 - Caja", () => {
  it("getPesoTotal() return correct total weight", () => {
    expect(caja1.getPesoTotal()).to.be.equal(1);
  });

  it("getPesoTotal() return correct total weight", () => {
    expect(caja2.getPesoTotal()).to.be.equal(31);
  });

  it("getPesoTotal() return correct total weight", () => {
    expect(caja3.getPesoTotal()).to.be.equal(0.8);
  });

  it("getPesoTotal() return correct total weight", () => {
    expect(caja4.getPesoTotal()).to.be.equal(0.8);
  });

  it("AnadirEnser() y caja1.getPesoTotal()  return ", () => {
    caja1.AnadirEnser(Utencilios3);
    expect(caja1.getPesoTotal()).to.be.equal(1.5);
  });

  it("AnadirEnser() y caja2.getPesoTotal()  return ", () => {
    caja2.AnadirEnser(DispositivoElectronico2);
    expect(caja2.getPesoTotal()).to.be.equal(37);
  });

  it("AnadirEnser() y caja3.getPesoTotal()  return ", () => {
    caja3.AnadirEnser(Vajilla3);
    expect(caja3.getPesoTotal()).to.be.equal(1.1);
  });

  it("AnadirEnser() y caja4.getPesoTotal()  return ", () => {
    caja4.AnadirEnser(Prenda2);
    expect(caja4.getPesoTotal()).to.be.equal(1.1);
  });
});

const mudanza = new Mudanza();

mudanza.AnadirCaja(caja1);
mudanza.AnadirCaja(caja2);

describe("Ejercicio 1 - Mudanza", () => {
  it("getPesoTotal() return correct total weight", () => {
    expect(mudanza.getPesoTotal()).to.be.equal(38.5);
  });

  it("mudanza.getPesoTotal() return 39.6", () => {
    mudanza.AnadirCaja(caja4);
    expect(mudanza.getPesoTotal()).to.be.equal(39.6);
  });

  it("mudanza.AnadirCaja(caja3) y mudanza.getPesoTotal() return 40.7", () => {
    mudanza.AnadirCaja(caja3);
    expect(mudanza.getPesoTotal()).to.be.equal(40.7);
  });

  it("mudanza.AnadirCaja(caja5) y mudanza.getPesoTotal() return 41.2", () => {
    const caja5 = new Caja("Caja5", [Utencilios3], 1);
    mudanza.AnadirCaja(caja5);
    expect(mudanza.getPesoTotal()).to.be.equal(41.2);
  });

  it("mudanza.EliminarCaja(3) y mudanza.getPesoTotal() return 40.1", () => {
    mudanza.EliminarCaja(3);
    expect(mudanza.getPesoTotal()).to.be.equal(40.1);
  });

  it("Eliminar la cuarta caja y listar todos los ensers", () => {
    mudanza.EliminarCaja(4);

    const expected =
      "Caja #1:\nLista de Ensers en la caja:\n" +
      "1. Cuchillo\n2. Tenedor\n3. Cuchara\n" +
      "Caja #2:\nLista de Ensers en la caja:\n" +
      "1. TV 50\n2. Monitor 24\n3. Monitor 24\n" +
      "Caja #3:\nLista de Ensers en la caja:\n" +
      "1. Pantalones\n2. Jersey\n3. Camiseta\n" +
      "Caja #4:\nLista de Ensers en la caja:\n" +
      "1. Cuchara\n";

    const actual = mudanza.ListarTodoEnsers();
    expect(actual).to.be.equal(expected);
  });

  it("mudanza.EliminarCaja(1) y mudanza.getPesoTotal() return 3.1", () => {
    mudanza.EliminarCaja(1);
    expect(mudanza.getPesoTotal()).to.be.equal(3.1);
  });

  it("mudanza.ListarTodoEnsers() return Lista de Ensers en la caja: ...", () => {
    const expected =
      "Caja #1:\nLista de Ensers en la caja:\n" +
      "1. Cuchillo\n2. Tenedor\n3. Cuchara\n" +
      "Caja #2:\nLista de Ensers en la caja:\n" +
      "1. Pantalones\n2. Jersey\n3. Camiseta\n" +
      "Caja #3:\nLista de Ensers en la caja:\n" +
      "1. Cuchara\n";
    expect(mudanza.ListarTodoEnsers()).to.be.equal(expected);
  });

  it("mudanza.EliminarCaja(1) y mudanza.ListarTodoEnsers() return Lista de Ensers en la caja: ...", () => {
    mudanza.EliminarCaja(1);
    const expected =
      "Caja #1:\nLista de Ensers en la caja:\n" +
      "1. Cuchillo\n2. Tenedor\n3. Cuchara\n" +
      "Caja #2:\nLista de Ensers en la caja:\n" +
      "1. Cuchara\n";
    expect(mudanza.ListarTodoEnsers()).to.be.equal(expected);
  });
});
