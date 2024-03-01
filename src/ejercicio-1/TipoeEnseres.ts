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

  getTipoUtencilios(): string|undefined {
    return this.tipo;
  }

  getmodelo(): string|undefined {
    return this.modelo;
  }

  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.dimensiones.getDescripcion}, Peso: ${this.peso}kg, Fragilidad: ${this.fragilidad}, Modelo: ${this.modelo}, Tipo: ${this.tipo}`;
  }
}

export class Prenda implements Enser {
  static getDescripcion() {
    throw new Error("Method not implemented.");
  }
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

  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.dimensiones.getDescripcion}, Peso ${this.peso}kg ,Fragilidad: ${this.fragilidad}, Tipo: ${this.tipo_predas}`;
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

  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.dimensiones}, Fragilidad: ${this.fragilidad}, Material: ${this.material}`;
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

  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.dimensiones.getDescripcion}, Peso: ${this.peso}kg , Tipo: ${this.tipo}, Modelo: ${this.modelo},`;
  }
}
