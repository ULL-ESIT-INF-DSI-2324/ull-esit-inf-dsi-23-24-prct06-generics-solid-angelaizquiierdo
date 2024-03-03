
/**
 * Clase Producto que contiene los datos de un producto
 * @property NombreProducto nombre del producto
 * @property Cantidad cantidad de productos
 * @property Precio precio del producto
 * @method ObtenerNombreProducto devuelve el nombre del producto
 * @method ObtenerCantidad devuelve la cantidad de productos
 * @method ObtenerPrecio devuelve el precio del producto
 * @method ObtenerprecioTotal devuelve el precio total de la compra
 * @method ImprimirProducto imprime los datos del producto
 */
export class Producto {

  /**
   * Constructor de la clase Producto
   * @param NombreProducto nombre del producto
   * @param Cantidad cantidad de ese producto
   * @param Precio precion del producto
   */
  constructor(
    private readonly NombreProducto: string,
    private readonly Cantidad: number,
    private readonly Precio: number,
  ) {}

  /**
   * Método que devuelve el nombre del producto
   * @returns nombre del producto
   */
  ObtenerNombreProducto(): string {
    return this.NombreProducto;
  }

  /**
   * Método que devuelve la cantidad de productos
   * @returns cantidad de productos
   */
  ObtenerCantidad(): number {
    return this.Cantidad;
  }

  /**
   * Método que devuelve el precio del producto
   * @returns precio del producto
   */
  ObtenerPrecio(): number {  
    return this.Precio;
  }

  /**
   * Método que devuelve el precio total de la compra
   * @returns precio total de la compra
   */
  ObtenerprecioTotal(): number {
    return this.Precio * this.Cantidad;
  }

  /**
   * Método que imprime los datos del producto
   * @returns datos del producto
   */
  ImprimirProducto(): string {
    return `Producto: ${this.NombreProducto} Cantidad: ${this.Cantidad} Precio por unidad: ${this.Precio}unidad/€ Precio: ${this.ObtenerprecioTotal()}€`;
  }
}