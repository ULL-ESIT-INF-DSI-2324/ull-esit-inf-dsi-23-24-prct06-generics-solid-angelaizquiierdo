import { Factura } from "./factura";

/**
 * Clase que representa una colección de facturas
 * @param T tipo de factura
 * @property facturas array de facturas
 * @method agregarfactura añade una factura a la colección
 * @method ObtenerFacturas devuelve todas las facturas
 * @method eliminarFactura elimina una factura de la colección
 * @method generarTodasLasFacturas genera todas las facturas
 */
export class ColeccionFacturas<T extends Factura> {
  private facturas: T[] = [];

  Agregarfactura(factura: T): void {
    this.facturas.push(factura);
  }

  ObtenerFacturas() {
    return this.facturas;
  }

  EliminarFactura(indice: number): void {
    this.facturas.splice(indice, 1);
  }

  NombreFactura(indice: number): string {
    return this.facturas[indice].ObtenerDatoComprador();
  }

  ObtenerTodosLosNombres(): string[] {
    return this.facturas.map((factura) => factura.ObtenerDatoComprador());
  }

  GenerarTodasLasFacturas(): string[] {
    return this.facturas.map((factura) => factura.generarFactura());
  }
}
