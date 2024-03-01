import { Factura } from "./factura";
import { Producto } from "./producto";
import { GeneradorPDF } from "./pdf";
import { GeneradorHTML } from "./html";

const producto1 = new Producto("Producto 1", 10, 2);
const producto2 = new Producto("Producto 2", 20, 3);

const facturaPDF = new Factura(
  "Comprador",
  "Detalle",
  [producto1, producto2],
  "2024-03-01",
  new GeneradorPDF(),
);
const facturaHTML = new Factura(
  "Comprador",
  "Detalle",
  [producto1, producto2],
  "2024-03-01",
  new GeneradorHTML(),
);

console.log(facturaPDF.generarFactura()); // Genera la factura en formato PDF
console.log(facturaHTML.generarFactura()); // Genera la factura en formato HTML
