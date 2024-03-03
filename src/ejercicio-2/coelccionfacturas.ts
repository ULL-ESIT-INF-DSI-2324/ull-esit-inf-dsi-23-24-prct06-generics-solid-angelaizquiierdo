import { Factura } from "./factura";

/**
 * Clase que contiene una colección de facturas
 * @param T tipo de factura(html o pdf) 
 * @property facturas array de facturas
 * @method agregarfactura añade una factura a la colección
 * @method ObtenerFacturas devuelve todas las facturas
 * @method eliminarFactura elimina una factura de la colección
 * @method generarTodasLasFacturas genera todas las facturas 
 */
export class ColeccionFacturas<T extends Factura> {
  private facturas: T[] = [];

  /**
   * Añade una factura a la colección
   * @param factura factura a añadir
   */
  Agregarfactura(factura: T): void {
    this.facturas.push(factura);
  }

  /**
   * Devuelve todas las facturas
   * @returns facturas
   */
  ObtenerFacturas() : T[] {
    return this.facturas;
  }

  /**
   * Elimina una factura de la colección
   * @param indice indice de la factura a eliminar
   */
  EliminarFactura(indice: number): void {
    this.facturas.splice(indice, 1);
  }

  /**
   * Devuelve el nombre del comprador de una factura
   * @param indice indice de la factura
   * @returns nombre del comprador
   */
  NombreFactura(indice: number): string {
    return this.facturas[indice].ObtenerDatoComprador();
  }

  /**
   * Devuelve todos los nombres de los compradores de las facturas
   * @returns nombres de los compradores
   */
  ObtenerTodosLosNombres(): string[] {
    return this.facturas.map((factura) => factura.ObtenerDatoComprador());
  }

  /**
   * Genera todas las facturas
   * @returns facturas generadas
   */
  GenerarTodasLasFacturas(): string[] {
    return this.facturas.map((factura) => factura.generarFactura());
  }
}
