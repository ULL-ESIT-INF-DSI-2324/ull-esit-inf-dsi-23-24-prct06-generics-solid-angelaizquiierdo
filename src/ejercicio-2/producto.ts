
export class Producto{
  constructor(
    private readonly NombreProducto: string,
    private readonly Cantidad: number,
    private readonly Precio: number,
  ) {}

  ObtenerNombreProducto(): string {
    return this.NombreProducto;
  }
  ObtenerCantidad(): number {
    return this.Cantidad;
  }

  ObtenerPrecio(): number {  
    return this.Precio;
  }

  ObtenerprecioTotal(): number {
    return this.Precio * this.Cantidad;
  }

  ImprimirProducto(): string {
    return `Producto: ${this.NombreProducto} Cantidad: ${this.Cantidad} Precio por unidad: ${this.Precio}unidad/€ Precio: ${this.ObtenerprecioTotal()}€`;
  }
}