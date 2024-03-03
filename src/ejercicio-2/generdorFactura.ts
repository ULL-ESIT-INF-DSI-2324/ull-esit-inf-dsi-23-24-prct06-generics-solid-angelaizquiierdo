import { Factura } from "./factura";

/**
 * Interfaz que representa un generador de factura
 * @method generarFactura genera una factura
 */
export interface GeneradorFactura {

  /**
   * Genera una factura según el tipo de generador
   * @param factura factura a generar
   * @returns factura generada
   */
  generarFactura(factura: Factura): string;
}
