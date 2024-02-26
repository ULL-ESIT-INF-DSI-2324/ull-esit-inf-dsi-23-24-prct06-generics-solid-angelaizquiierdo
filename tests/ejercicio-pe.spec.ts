import "mocha";
import { expect } from "chai";

import { NumericSearchableCollection } from "../src/ejercicio-pe/NumericSearchableCollection";
import { StringSearchableCollection } from "../src/ejercicio-pe/StringSearchableCollection";

describe("Ejercicio 1 - Clases fechas", () => {
  const numericCollection = new NumericSearchableCollection([6, 2, 5, 7]);

  it("getItem should return correct item at index", () => {
    expect(numericCollection.getItem(2)).to.be.equal(5);
  });

  it("search should return correct occurrences of number", () => {
    expect(numericCollection.search(5)).to.deep.equal([5]);
  });

  it("search should return empty array for non-existing number", () => {
    expect(numericCollection.search(10)).to.deep.equal([]);
  });

  it("getNumberOfItems should return correct number of items", () => {
    expect(numericCollection.getNumberOfItems()).to.be.equal(4);
  });

  it("addItem should increase number of items", () => {
    numericCollection.addItem(10);
    expect(numericCollection.getNumberOfItems()).to.be.equal(5);
  });

  it("removeItem should decrease number of items", () => {
    numericCollection.removeItem(10);
    expect(numericCollection.getNumberOfItems()).to.be.equal(4);
  });
});

describe("Ejercicio 2 - Clases fechas", () => {
  const stringCollection = new StringSearchableCollection([
    "tele",
    "monitores",
    "aviones",
  ]);

  it("getItem should return correct item at index", () => {
    expect(stringCollection.getItem(2)).to.be.equal("aviones");
  });

  it("search should return correct occurrences of string", () => {
    expect(stringCollection.search("tele")).to.deep.equal(["tele"]);
  });

  it("search should return empty array for non-existing string", () => {
    expect(stringCollection.search("computadoras")).to.deep.equal([]);
  });

  it("getNumberOfItems should return correct number of items", () => {
    expect(stringCollection.getNumberOfItems()).to.be.equal(3);
  });

  it("addItem should increase number of items", () => {
    stringCollection.addItem("computadoras");
    expect(stringCollection.getNumberOfItems()).to.be.equal(4);
  });

  it("removeItem should decrease number of items", () => {
    stringCollection.removeItem("computadoras");
    expect(stringCollection.getNumberOfItems()).to.be.equal(3);
  });
});
