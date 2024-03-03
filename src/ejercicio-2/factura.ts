import { Producto } from "./producto";
import { GeneradorFactura } from "./generdorFactura";

/**
 * Clase Factura que contiene los datos de una factura
 * @property PrecioTotal precio total de la factura
 * @property DatoComprador nombre del comprador
 * @property DetalleTransaccion detalle de la transacción
 * @property productos_compra productos comprados
 * @property Fecha fecha de la compra
 * @property generador generador de factura
 * @method generarFactura genera la factura
 * @method ObtenerDatoComprador devuelve el nombre del comprador
 * @method ObtenerDetalleTransaccion devuelve el detalle de la transacción
 */
export class Factura {
  protected PrecioTotal: number = 0;
  constructor(
    protected DatoComprador: string, // datos del comprador
    protected DetalleTransaccion: string, // detalles de la transacción (tarjeta de credito o dinero en efectivo)
    protected productos_compra: Producto[], // contiene los productos comprados
    protected Fecha: string, // fecha en donde se compro los productos
    private generador: GeneradorFactura, // generador de factura (html o pdf)
  ) {
    this.PrecioTotal = this.calcularTotal();
  }

  /**
   * El método calcularTotal calcula el precio total de la factura haciendo una suma con el método
   * reduce.
   * @returns precio total de la factura
   */
  private calcularTotal(): number {
    return this.productos_compra.reduce(
      (total, producto) => total + producto.ObtenerprecioTotal(),
      0,
    );
  }

  /**
   * El método generarFactura genera la factura con el generador de factura
   * @returns factura generada
   */
  generarFactura(): string {
    return this.generador.generarFactura(this);
  }

  /**
   * Obtener Datos del comprador el nombre del vendedor
   * @returns nombre del comprador
   */
  ObtenerDatoComprador(): string {
    return this.DatoComprador;
  }

  /**
   * Obtener detalle de la transacción
   * @returns detalle de la transacción
   */
  ObtenerDetalleTransaccion(): string {
    return this.DetalleTransaccion;
  }

  /**
   * Obtener productos comprados
   * @returns productos comprados
   */
  Obtenerproductos_compra(): Producto[] {
    return this.productos_compra;
  }

  /**
   * Obtener fecha de la compra
   * @returns fecha de la compra
   */
  ObtenerFecha(): string {
    return this.Fecha;
  }

  /**
   * Obtener precio total de la factura
   * @returns precio total de la factura
   */
  ObtenerPrecioTotal(): number {
    return this.PrecioTotal;
  }

  /**
   * Cambiar el nombre del comprador
   * @param DatoComprador nombre del comprador
   */
  CambiarDatoComprador(DatoComprador: string): void {
    this.DatoComprador = DatoComprador;
  }

  /**
   * Cambiar el detalle de la transacción
   * @param DetalleTransaccion detalle de la transacción
   */
  CambiarDetalleTransaccion(DetalleTransaccion: string): void {
    this.DetalleTransaccion = DetalleTransaccion;
  }

  /**
   * Añadir un producto a la factura
   * @param producto producto a añadir
   */
  ayadirProducto(producto: Producto): void {
    this.productos_compra.push(producto);
    this.PrecioTotal += producto.ObtenerprecioTotal();
  }

  /**
   * Eliminar un producto de la factura
   * @param producto producto a eliminar
   */
  eliminarProducto(producto: Producto): void {
    this.productos_compra = this.productos_compra.filter(
      (productoCompra) => productoCompra !== producto,
    );
    this.PrecioTotal -= producto.ObtenerprecioTotal();
  }

  /**
   * Cambiar la fecha de la compra
   * @param Fecha fecha de la compra
   */
  CambiarFecha(Fecha: string): void {
    this.Fecha = Fecha;
  }

  /**
   * Cambiar el generador de factura
   * @param generador generador de factura
   */
  Imprimirproductos_compra(): string {
    let detallesCompra = "";
    this.productos_compra.forEach((producto) => {
      detallesCompra += producto.ImprimirProducto() + "\n";
    });
    return detallesCompra;
  }

  /**
   * Obtener la factura en formato de texto
   * @returns retorna una string con los datos de la factura
   */
  ObtenerrarFactura(): string {
    return `Comprador: ${this.DatoComprador} \nDetalle de transaccion: ${this.DetalleTransaccion} \nFecha: ${this.Fecha}`;
  }

  /**
   * Generar la factura
   * @returns retorna una string con los datos de la factura
   */
  GenerarFactura(): string {
    return (
      this.ObtenerrarFactura() +
      " \n" +
      this.Imprimirproductos_compra() +
      " \n" +
      `Precio total: ${this.PrecioTotal} €`
    );
  }
}
