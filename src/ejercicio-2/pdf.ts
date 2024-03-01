import { GeneradorFactura } from "./generdorFactura";
import { Factura } from "./factura";

export class GeneradorPDF implements GeneradorFactura {
  generarFactura(factura: Factura): string {
    return factura.GenerarFactura();
  }
}
