/**
 * Clase Tamayo, representa las dimensiones de un enser
 * @property ancho: Ancho del enser
 * @property alto: Alto del enser
 * @property fondo: Fondo del enser
 * @method getAncho Método para obtener el ancho del enser
 * @method getAlto Método para obtener el alto del enser
 * @method getFondo Método para obtener el fondo del enser
 * @method getDescripcion Método para obtener una descripción del enser
 */
export class Tamayo {
  /**
   * Constructor  de la clase Tamayo automaticamente que recibe el ancho, el alto y el fondo, atributos privados  
   * @param ancho 
   * @param alto 
   * @param fondo 
   */
  constructor(
    private ancho: number, 
    private alto: number,
    private fondo: number,
  ) {}

  getAncho(): number {
    return this.ancho;
  }

  getAlto(): number {
    return this.alto;
  }

  getFondo(): number {
    return this.fondo;
  }

  getDescripcion(): string {
    return `Ancho: ${this.ancho}cm , Alto: ${this.alto}cm , Fondo: ${this.fondo}cm `;
  }
}
