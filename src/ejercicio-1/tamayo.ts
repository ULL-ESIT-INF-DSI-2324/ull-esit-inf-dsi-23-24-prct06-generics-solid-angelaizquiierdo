
export class Tamayo{
  constructor(private ancho : number, private alto : number, private fondo : number ) {

  }

  getAncho(): number {
    return this.ancho;
  }

  getAlto() : number {
    return this.alto;
  }

  getFondo() : number {
    return this.fondo;
  }

  dimensiones(): string {
    return (`El ancho es de ${this.getAncho} cm, el alto es de ${this.getAlto}cm y el fondo es de ${this.getFondo}cm `);
  }
}