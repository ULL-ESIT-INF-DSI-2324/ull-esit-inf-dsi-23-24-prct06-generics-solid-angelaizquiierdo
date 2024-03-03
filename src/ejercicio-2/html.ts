import { GeneradorFactura } from "./generdorFactura";
import { Factura } from "./factura";

/**
 * Clase que implementa la interfaz GeneradorFactura y genera una factura en formato HTML
 * @method generarFactura genera la factura en formato HTML
 */
export class GeneradorHTML implements GeneradorFactura {

  /**
   * Genera la factura en formato HTML
   * @param factura factura a generar
   * @returns factura generada
   */
  generarFactura(factura: Factura): string {
    let formatoHTML: string = "";
    formatoHTML += `<html>\n<head>\n<title>Factura</title>\n</head>\n<body>\n<h1>Factura</h1>\n`;
    formatoHTML += `<p>Comprador: ${factura.ObtenerDatoComprador()}</p>\n`;
    formatoHTML += `<p>Detalle: ${factura.ObtenerDetalleTransaccion()}</p>\n`;
    formatoHTML += `<p>Fecha: ${factura.ObtenerFecha()}</p>\n`;
    formatoHTML += `<p>Productos:</p>\n<ul>\n`;

    factura.Obtenerproductos_compra().forEach((producto) => {
      formatoHTML += `<li>${producto.ImprimirProducto()}</li>\n`;
    });

    formatoHTML += `</ul>\n`;
    formatoHTML += `<p>Precio total: ${factura.ObtenerPrecioTotal()} € </p>\n`;
    formatoHTML += `</body>\n</html>`;
    return formatoHTML;
  }
}
