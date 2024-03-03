import { Tamayo } from "./tamayo";
import { Enser } from "./enser";
import { nivelFragilidad } from "./tipo_datos";

/**
 * 
 */
export class Utencilios implements Enser {
  constructor(
    public readonly nombre: string,
    public readonly dimensiones: Tamayo,
    public readonly peso: number,
    public readonly fragilidad: nivelFragilidad,
    private modelo?: string ,
    private tipo?: string, // Tipo de Utencilios (cubietos de cocina, libros de cocina, etc)
  ) {} // Constructor de la clase Utencilios
  
  getNombre(): string {
    return this.nombre;
  }

  getdimensiones(): Tamayo {
    return this.dimensiones;
  }

  getfragilidad(): nivelFragilidad {
    return this.fragilidad;
  }

  getPeso(): number {
    return this.peso;
  }

  getTipoUtencilios(): string|undefined {
    return this.tipo;
  }

  getmodelo(): string|undefined {
    return this.modelo;
  }

  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.getdimensiones().getDescripcion()}, Peso: ${this.getPeso()}kg, Fragilidad: ${this.getfragilidad()}, Modelo: ${this.getmodelo()}, Tipo: ${this.getTipoUtencilios()}`;
  }
}

export class Prenda implements Enser {
  constructor(
    public readonly nombre: string,
    public readonly dimensiones: Tamayo,
    public readonly peso: number,
    public readonly fragilidad: nivelFragilidad,
    private readonly tipo_predas: string,
  ) {}
  getNombre(): string {
    return this.nombre;
  }

  getdimensiones(): Tamayo {
    return this.dimensiones;
  }

  getfragilidad(): nivelFragilidad {
    return this.fragilidad;
  }

  getPeso(): number {
    return this.peso;
  }

  getTipoPrenda(): string {
    return this.tipo_predas;
  }

  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.dimensiones.getDescripcion()}, Peso ${this.getPeso()}kg ,Fragilidad: ${this.getfragilidad()}, Tipo: ${this.getTipoPrenda()}`;
  }
}

export class Vajilla implements Enser {
  constructor(
    public readonly nombre: string,
    public readonly dimensiones: Tamayo,
    public readonly peso: number,
    public readonly fragilidad: nivelFragilidad,
    private readonly material: string, // ceramica, cristal, etc
  ) {}
  getNombre(): string {
    return this.nombre;
  }

  getdimensiones(): Tamayo {
    return this.dimensiones;
  }

  getfragilidad(): nivelFragilidad {
    return this.fragilidad;
  }

  getmaterial(): string {
    return this.material;
  }

  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.getdimensiones().getDescripcion()}, Fragilidad: ${this.getfragilidad()}, Material: ${this.getmaterial()}`;
  }
}

export class DispositivoElectronico implements Enser {
  constructor(
    public readonly nombre: string,
    public readonly dimensiones: Tamayo,
    public readonly peso: number,
    private readonly modelo: string,
    private readonly tipo: string, // Tipo de DispositivoElectronico (movil, tablet, etc)
  ) {}
  getNombre(): string {
    return this.nombre;
  }

  getdimensiones(): Tamayo {
    return this.dimensiones;
  }

  getPeso(): number {
    return this.peso;
  }

  getTipo(): string {
    return this.tipo;
  }

  getmodelo(): string {
    return this.modelo;
  }

  GetDescripcion(): string {
    return `Nombre: ${this.getNombre()}, Dimensiones: ${this.getdimensiones().getDescripcion()}, Peso: ${this.getPeso()}kg , Tipo: ${this.getTipo()}, Modelo: ${this.getmodelo()}`;
  }
}
