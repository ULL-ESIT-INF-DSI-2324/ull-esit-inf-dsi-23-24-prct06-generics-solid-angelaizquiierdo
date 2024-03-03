import { Producto } from "./producto";
import { GeneradorFactura } from "./generdorFactura";

export class Factura {
  protected PrecioTotal: number = 0;
  constructor(
    protected DatoComprador: string,
    protected DetalleTransaccion: string,
    protected productos_compra: Producto[],
    protected Fecha: string,
    private generador: GeneradorFactura,
  ) {
    this.PrecioTotal = this.calcularTotal();
  }

  private calcularTotal(): number {
    return this.productos_compra.reduce(
      (total, producto) => total + producto.ObtenerprecioTotal(),
      0,
    );
  }

  generarFactura(): string {
    return this.generador.generarFactura(this);
  }

  ObtenerDatoComprador(): string {
    return this.DatoComprador;
  }

  ObtenerDetalleTransaccion(): string {
    return this.DetalleTransaccion;
  }

  Obtenerproductos_compra(): Producto[] {
    return this.productos_compra;
  }

  ObtenerFecha(): string {
    return this.Fecha;
  }

  ObtenerPrecioTotal(): number {
    return this.PrecioTotal;
  }

  CambiarDatoComprador(DatoComprador: string): void {
    this.DatoComprador = DatoComprador;
  }

  CambiarDetalleTransaccion(DetalleTransaccion: string): void {
    this.DetalleTransaccion = DetalleTransaccion;
  }

  ayadirProducto(producto: Producto): void {
    this.productos_compra.push(producto);
    this.PrecioTotal += producto.ObtenerprecioTotal();
  }

  eliminarProducto(producto: Producto): void {
    this.productos_compra = this.productos_compra.filter(
      (productoCompra) => productoCompra !== producto,
    );
    this.PrecioTotal -= producto.ObtenerprecioTotal();
  }

  CambiarFecha(Fecha: string): void {
    this.Fecha = Fecha;
  }

  Imprimirproductos_compra(): string {
    let detallesCompra = "";
    this.productos_compra.forEach((producto) => {
      detallesCompra += producto.ImprimirProducto() + "\n";
    });
    return detallesCompra;
  }

  ObtenerrarFactura(): string {
    return `Comprador: ${this.DatoComprador} \nDetalle de transaccion: ${this.DetalleTransaccion} \nFecha: ${this.Fecha}`;
  }

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
