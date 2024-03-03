/**
 * @description : Ejercicio 2 - 31 Pruebas unitarias
 * @author : Ángela Izquierdo Padrón @angelaizquiierdo
 * @Fecha : 21/02/2024
 * @category : Tests
 * @class : DSI-Práctica6
 */

import "mocha";
import { expect } from "chai";

import { Factura } from "../src/ejercicio-2/factura";
import { Producto } from "../src/ejercicio-2/producto";
import { GeneradorPDF } from "../src/ejercicio-2/pdf";
import { GeneradorHTML } from "../src/ejercicio-2/html";
import { ColeccionFacturas } from "../src/ejercicio-2/coelccionfacturas";

const producto1 = new Producto("Manzana", 10, 0.5);
const producto2 = new Producto("Fideo intantaneo-Magi", 2, 1.5);
const producto3 = new Producto("Leche", 6, 1);
const producto4 = new Producto("Pan rustico", 2, 0.8);
const producto5 = new Producto("Coca-cola", 2, 1.5);

const facturaPDF = new Factura(
  "Juan Carlos Gonzalez",
  "Tarjeta de credito",
  [producto1, producto2, producto3, producto4],
  "2023-02-19",
  new GeneradorPDF(),
);
const facturaHTML = new Factura(
  "Maria Concepción Garcia",
  "Dinero en efectivo",
  [producto1, producto2, producto4],
  "2024-01-01",
  new GeneradorHTML(),
);

const coleccionFacturas = new ColeccionFacturas<Factura>();
coleccionFacturas.Agregarfactura(facturaPDF);

describe(" Ejercicio 2 Producto", () => {
  it("producto1.ImprimirProducto() return Producto: Manzana Cantidad: 10 Precio por unidad: 0.5unidad/€ Precio: 5€ ", () => {
    expect(producto1.ImprimirProducto()).to.be.equal(
      "Producto: Manzana Cantidad: 10 Precio por unidad: 0.5unidad/€ Precio: 5€",
    );
  });
  it("producto2.ImprimirProducto() return Producto: Fideo intantaneo-Magi Cantidad: 2 Precio por unidad: 1.5unidad/€ Precio: 3€", () => {
    expect(producto2.ImprimirProducto()).to.be.equal(
      "Producto: Fideo intantaneo-Magi Cantidad: 2 Precio por unidad: 1.5unidad/€ Precio: 3€",
    );
  });
  it("producto3.ImprimirProducto() return  Producto: Leche Cantidad: 6 Precio por unidad: 1unidad/€ Precio: 6€", () => {
    expect(producto3.ImprimirProducto()).to.be.equal(
      "Producto: Leche Cantidad: 6 Precio por unidad: 1unidad/€ Precio: 6€",
    );
  });
  it("producto4.ObtenerCantidad() return 2", () => {
    expect(producto4.ObtenerCantidad()).to.be.equal(2);
  });
  it("producto5.ObtenerprecioTotal() 3", () => {
    expect(producto5.ObtenerprecioTotal()).to.be.equal(3);
  });

  it("producto5.ObtenerNombreProducto() return Coca-cola", () => {
    expect(producto5.ObtenerNombreProducto()).to.be.equal("Coca-cola");
  });

  it("producto5.ObtenerPrecio() return 1.5", () => {
    expect(producto5.ObtenerPrecio()).to.be.equal(1.5);
  });
});

describe("Ejercicio 2 PDF", () => {
  it(" PDF generarFactura() ", () => {
    const actualOutput = facturaPDF.generarFactura();

    const expectedOutput = `Comprador: Juan Carlos Gonzalez \nDetalle de transaccion: Tarjeta de credito \nFecha: 2023-02-19 \nProducto: Manzana Cantidad: 10 Precio por unidad: 0.5unidad/€ Precio: 5€\nProducto: Fideo intantaneo-Magi Cantidad: 2 Precio por unidad: 1.5unidad/€ Precio: 3€\nProducto: Leche Cantidad: 6 Precio por unidad: 1unidad/€ Precio: 6€\nProducto: Pan rustico Cantidad: 2 Precio por unidad: 0.8unidad/€ Precio: 1.6€\n \nPrecio total: 15.6 €`;
    expect(actualOutput).to.be.equal(expectedOutput);
  });

  it("facturaPDF.ObtenerPrecioTotal() return [producto1, producto2, producto3 ,producto4] ", () => {
    expect(facturaPDF.Obtenerproductos_compra()).to.be.deep.equal([
      producto1,
      producto2,
      producto3,
      producto4,
    ]);
  });

  it("ayadirProducto() y obtener clase producto (producto 1, producto 2, producto3, producto 4, producto 5)", () => {
    facturaPDF.ayadirProducto(producto5);
    expect(facturaPDF.Obtenerproductos_compra()).to.be.deep.equal([
      producto1,
      producto2,
      producto3,
      producto4,
      producto5,
    ]);
  });

  it("facturaPDF.ObtenerFecha() return 2023-02-19", () => {
    expect(facturaPDF.ObtenerFecha()).to.be.equal("2023-02-19");
  });

  it("facturaPDF.ObtenerPrecioTotal() return 8", () => {
    expect(facturaPDF.ObtenerPrecioTotal()).to.be.equal(18.6);
  });

  it("facturaPDF.obtenerDatoComprador() return Juan Carlos Gonzalez", () => {
    expect(facturaPDF.ObtenerDatoComprador()).to.be.equal(
      "Juan Carlos Gonzalez",
    );
  });
  const nuevofacturaPDF = new Factura(
    "Margarita Perez",
    "Tarjeta de credito",
    [producto1, producto2, producto3, producto4],
    "2023-01-25",
    new GeneradorPDF(),
  );
  it("CambiarDatoComprador(Margarita Perez) return Teresa Campos", () => {
    nuevofacturaPDF.CambiarDatoComprador("Teresa Campos");
    expect(nuevofacturaPDF.ObtenerDatoComprador()).to.be.equal("Teresa Campos");
  });

  it("CambiarDetalleTransaccion(Dinero en efectivo) return Dinero en efectivo", () => {
    nuevofacturaPDF.CambiarDetalleTransaccion("Dinero en efectivo");
    expect(nuevofacturaPDF.ObtenerDetalleTransaccion()).to.be.equal(
      "Dinero en efectivo",
    );
  });

  it("CambiarFecha(2023-02-19) return 2023-02-19", () => {
    facturaPDF.CambiarFecha("2023-02-19");
    expect(facturaPDF.ObtenerFecha()).to.be.equal("2023-02-19");
  });
});

describe("Ejercicio 2 HTML", () => {
  it("Test HTML", () => {
    expect(facturaHTML.generarFactura()).to.be.equal(
      "<html>\n<head>\n<title>Factura</title>\n</head>\n<body>\n<h1>Factura</h1>\n<p>Comprador: Maria Concepción Garcia</p>\n<p>Detalle: Dinero en efectivo</p>\n<p>Fecha: 2024-01-01</p>\n<p>Productos:</p>\n<ul>\n<li>Producto: Manzana Cantidad: 10 Precio por unidad: 0.5unidad/€ Precio: 5€</li>\n<li>Producto: Fideo intantaneo-Magi Cantidad: 2 Precio por unidad: 1.5unidad/€ Precio: 3€</li>\n<li>Producto: Pan rustico Cantidad: 2 Precio por unidad: 0.8unidad/€ Precio: 1.6€</li>\n</ul>\n<p>Precio total: 9.6 € </p>\n</body>\n</html>",
    );
  });

  it("facturaHTML.ObtenerPrecioTotal() return [producto1, producto2, producto4] ", () => {
    expect(facturaHTML.Obtenerproductos_compra()).to.be.deep.equal([
      producto1,
      producto2,
      producto4,
    ]);
  });

  it("facturaHTML.eliminarProducto(producto3) y facturaHTML.ObtenerPrecioTotal() return [producto1, producto2]", () => {
    facturaHTML.eliminarProducto(producto4);
    expect(facturaHTML.Obtenerproductos_compra()).to.be.deep.equal([
      producto1,
      producto2,
    ]);
  });

  it("facturaHTML.ObtenerFecha() return 2024-03-01", () => {
    expect(facturaHTML.ObtenerFecha()).to.be.equal("2024-01-01");
  });

  it("facturaHTML.ObtenerPrecioTotal() return 8", () => {
    expect(facturaHTML.ObtenerPrecioTotal()).to.be.equal(8);
  });

  it("facturaHTML.obtenerDatoComprador() return Maria Concepción Garcia", () => {
    expect(facturaHTML.ObtenerDatoComprador()).to.be.equal(
      "Maria Concepción Garcia",
    );
  });

  it("facturaHTML.Obtenerproductos_compra() return [producto1, producto2]", () => {
    expect(facturaHTML.Obtenerproductos_compra()).to.be.deep.equal([
      producto1,
      producto2,
    ]);
  });

  it("facturaHTML.ObtenerrarFactura() return Comprador: Maria Concepción Garcia \nDetalle de transaccion: Dinero en efectivo \nFecha: 2024-01-01", () => {
    expect(facturaHTML.ObtenerrarFactura()).to.be.deep.equal(
      "Comprador: Maria Concepción Garcia \nDetalle de transaccion: Dinero en efectivo \nFecha: 2024-01-01",
    );
  });

  it("facturaHTML.Imprimirproductos_compra() return \nProducto: Manzana Cantidad: 10 Precio por unidad: 0.5unidad/€ Precio: 5€\nProducto: Fideo intantaneo-Magi Cantidad: 2 Precio por unidad: 1.5unidad/€ Precio: 3€", () => {
    const expected =
      "Producto: Manzana Cantidad: 10 Precio por unidad: 0.5unidad/€ Precio: 5€\nProducto: Fideo intantaneo-Magi Cantidad: 2 Precio por unidad: 1.5unidad/€ Precio: 3€\n";
    expect(facturaHTML.Imprimirproductos_compra()).to.be.equal(expected);
  });
});

describe("Ejercicio 2 ColeccionFacturas", () => {
  it("coleccionFacturas.ObtenerFacturas() return [facturaPDF]", () => {
    expect(coleccionFacturas.ObtenerFacturas()).to.be.deep.equal([facturaPDF]);
  });

  it("coleccionFacturas.NombreFactura(0) return Juan Carlos Gonzalez", () => {
    expect(coleccionFacturas.NombreFactura(0)).to.be.equal(
      "Juan Carlos Gonzalez",
    );
  });

  it("coleccionFacturas.ObtenerTodosLosNombres() return [Juan Carlos Gonzalez]", () => {
    expect(coleccionFacturas.ObtenerTodosLosNombres()).to.be.deep.equal([
      "Juan Carlos Gonzalez",
    ]);
  });

  it("coleccionFacturas.EliminarFactura(0) return []", () => {
    coleccionFacturas.EliminarFactura(0);
    expect(coleccionFacturas.ObtenerFacturas()).to.be.deep.equal([]);
  });

  it("coleccionFacturas.Agregarfactura(facturaHTLM) return [facturaHTML]", () => {
    coleccionFacturas.Agregarfactura(facturaHTML);
    expect(coleccionFacturas.ObtenerFacturas()).to.be.deep.equal([facturaHTML]);
  });

  it("coleccionFacturas.GenerarTodasLasFacturas() return [facturaPDF]", () => {
    expect(coleccionFacturas.GenerarTodasLasFacturas()).to.be.deep.equal([
      facturaHTML.generarFactura(),
    ]);
  });
});
