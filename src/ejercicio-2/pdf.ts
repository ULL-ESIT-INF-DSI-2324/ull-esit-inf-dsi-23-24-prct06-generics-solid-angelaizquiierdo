import { GeneradorFactura } from "./generdorFactura";
import { Factura } from "./factura";

/**
 * Clase que implementa la interfaz GeneradorFactura y genera una factura en formato PDF
 * @method generarFactura genera la factura en formato PDF
 */
export class GeneradorPDF implements GeneradorFactura {
  /**
   * Genera la factura en formato PDF
   * @param factura factura a generar
   * @returns factura generada en formato PDF
   */
  generarFactura(factura: Factura): string {
    return factura.GenerarFactura();
  }
}
