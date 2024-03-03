import { Tamayo } from "./tamayo";
import { Enser } from "./enser";
import { nivelFragilidad } from "./tipo_datos";

/**
 * Clase que implementa Enser utlizado para los utencilios que se quiere guardar en la caja para la mudanza
 * @property nombre nombre del utencilio
 * @property dimensiones dimensiones del utencilio
 * @property peso peso del utencilio
 * @property fragilidad nivel de fragilidad del utencilio
 * @property modelo modelo del utencilio
 * @property tipo tipo de utencilio
 * @method getNombre devuelve el nombre del utencilio
 * @method getdimensiones devuelve las dimensiones del utencilio
 * @method getfragilidad devuelve el nivel de fragilidad del utencilio
 * @method getPeso devuelve el peso del utencilio
 * @method getTipoUtencilios devuelve el tipo de utencilio
 * @method getmodelo devuelve el modelo del utencilio
 * @method GetDescripcion devuelve la descripción del utencilio
 */
export class Utencilios implements Enser {
  constructor(
    public readonly nombre: string,  // Nombre del utencilio
    public readonly dimensiones: Tamayo, // Dimensiones del utencilio
    public readonly peso: number, 
    public readonly fragilidad: nivelFragilidad,
    private modelo?: string ,
    private tipo?: string, // Tipo de Utencilios (cubietos de cocina, libros de cocina, etc)
  ) {} // Constructor de la clase Utencilios
  
  /**
   * Método que devuelve el nombre del utencilio
   * @returns nombre del utencilio
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Método que devuelve las dimensiones del utencilio
   * @returns dimensiones del utencilio
   */
  getdimensiones(): Tamayo {
    return this.dimensiones;
  }

  /**
   * Método que devuelve el nivel de fragilidad del utencilio
   * @returns nivel de fragilidad del utencilio
   */
  getfragilidad(): nivelFragilidad {
    return this.fragilidad;
  }

  /**
   * Método que devuelve el peso del utencilio
   * @returns peso del utencilio
   */
  getPeso(): number {
    return this.peso;
  }

  /**
   * Método que devuelve el tipo de utencilio
   * @returns tipo de utencilio
   */
  getTipoUtencilios(): string|undefined {
    return this.tipo;
  }

  /**
   * Método que devuelve el modelo del utencilio
   * @returns modelo del utencilio
   */
  getmodelo(): string|undefined {
    return this.modelo;
  }

  /**
   * Método que devuelve la descripción del utencilio. Nombre, dimensiones, peso, fragilidad, modelo y tipo
   * @returns descripción del utencilio
   */
  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.getdimensiones().getDescripcion()}, Peso: ${this.getPeso()}kg, Fragilidad: ${this.getfragilidad()}, Modelo: ${this.getmodelo()}, Tipo: ${this.getTipoUtencilios()}`;
  }
}

/**
 * Clase que implementa Enser utlizado para las prendas que se quiere guardar en la caja para la mudanza
 * @property nombre nombre de la prenda
 * @property dimensiones dimensiones de la prenda
 * @property peso peso de la prenda
 * @property fragilidad nivel de fragilidad de la prenda
 * @property tipo_predas tipo de prenda
 * @method getNombre devuelve el nombre de la prenda
 * @method getdimensiones devuelve las dimensiones de la prenda
 * @method getfragilidad devuelve el nivel de fragilidad de la prenda
 * @method getPeso devuelve el peso de la prenda
 * @method getTipoPrenda devuelve el tipo de prenda
 * @method GetDescripcion devuelve la descripción de la prenda
 * @method getTipoPrenda devuelve el tipo de prenda
 */
export class Prenda implements Enser {

  /**
   * Constructor de la clase Prenda que implementa la interfaz Enser
   */
  constructor(
    public readonly nombre: string,
    public readonly dimensiones: Tamayo,
    public readonly peso: number,
    public readonly fragilidad: nivelFragilidad,
    private readonly tipo_predas: string,
  ) {}

  /**
   * Método que devuelve el nombre de la prenda
   * @returns nombre de la prenda
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Método que devuelve las dimensiones de la prenda
   * @returns dimensiones de la prenda
   */
  getdimensiones(): Tamayo {
    return this.dimensiones;
  }

  /**
   * Método que devuelve el nivel de fragilidad de la prenda
   * @returns nivel de fragilidad de la prenda
   */
  getfragilidad(): nivelFragilidad {
    return this.fragilidad;
  }

  /**
   * Método que devuelve el peso de la prenda
   * @returns peso de la prenda
   */
  getPeso(): number {
    return this.peso;
  }

  /**
   * Método que devuelve el tipo de prenda
   * @returns tipo de prenda
   */
  getTipoPrenda(): string {
    return this.tipo_predas;
  }

  /**
   * Método que devuelve la descripción de la prenda. Nombre, dimensiones, peso, fragilidad y tipo
   * @returns descripción de la prenda
   */
  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.dimensiones.getDescripcion()}, Peso ${this.getPeso()}kg ,Fragilidad: ${this.getfragilidad()}, Tipo: ${this.getTipoPrenda()}`;
  }
}

/**
 * Clase que implementa Enser utlizado para la vajilla que se quiere guardar en la caja para la mudanza
 * @property nombre: nombre de la vajilla
 * @property dimensiones: dimensiones de la vajilla
 * @property peso: peso de la vajilla
 * @property fragilidad: nivel de fragilidad de la vajilla
 * @property material: material de la vajilla
 * @method getNombre devuelve el nombre de la vajilla
 * @method getdimensiones devuelve las dimensiones de la vajilla
 * @method getfragilidad devuelve el nivel de fragilidad de la vajilla
 * @method getmaterial devuelve el material de la vajilla
 * @method GetDescripcion devuelve la descripción de la vajilla
 */
export class Vajilla implements Enser {

  /**
   * Constructor de la clase Vajilla que implementa la interfaz Enser
   */
  constructor(
    public readonly nombre: string,
    public readonly dimensiones: Tamayo,
    public readonly peso: number,
    public readonly fragilidad: nivelFragilidad,
    private readonly material: string, // ceramica, cristal, etc
  ) {}

  /**
   * Método que devuelve el nombre de la vajilla
   * @returns nombre de la vajilla
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Método que devuelve las dimensiones de la vajilla
   * @returns dimensiones de la vajilla
   */
  getdimensiones(): Tamayo {
    return this.dimensiones;
  }

  /**
   * Método que devuelve el nivel de fragilidad de la vajilla
   * @returns nivel de fragilidad de la vajilla
   */
  getfragilidad(): nivelFragilidad {
    return this.fragilidad;
  }

  /**
   * Método que devuelve el material de la vajilla
   * @returns material de la vajilla
   */
  getmaterial(): string {
    return this.material;
  }

  /**
   * Método que devuelve la descripción de la vajilla. Nombre, dimensiones, fragilidad y material
   * @returns descripción de la vajilla
   */
  GetDescripcion(): string {
    return `Nombre: ${this.nombre}, Dimensiones: ${this.getdimensiones().getDescripcion()}, Fragilidad: ${this.getfragilidad()}, Material: ${this.getmaterial()}`;
  }
}

/**
 * Clase que implementa Enser utlizado para los dispositivos electronicos que se quiere guardar en la caja para la mudanza
 * @property nombre nombre del dispositivo electronico
 * @property dimensiones dimensiones del dispositivo electronico
 * @property peso peso del dispositivo electronico
 * @property modelo modelo del dispositivo electronico
 * @property tipo tipo de dispositivo electronico
 * @method getNombre devuelve el nombre del dispositivo electronico
 * @method getdimensiones devuelve las dimensiones del dispositivo electronico
 * @method getPeso devuelve el peso del dispositivo electronico
 * @method getTipo devuelve el tipo de dispositivo electronico
 * @method getmodelo devuelve el modelo del dispositivo electronico
 * @method GetDescripcion devuelve la descripción del dispositivo electronico
 */
export class DispositivoElectronico implements Enser {

  /**
   * Constructor de la clase DispositivoElectronico que implementa la interfaz Enser
   */
  constructor(
    public readonly nombre: string,
    public readonly dimensiones: Tamayo,
    public readonly peso: number,
    private readonly modelo: string,
    private readonly tipo: string, // Tipo de DispositivoElectronico (movil, tablet, etc)
  ) {}

  /**
   * Método que devuelve el nombre del dispositivo electronico
   * @returns nombre del dispositivo electronico
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Método que devuelve las dimensiones del dispositivo electronico
   * @returns dimensiones del dispositivo electronico
   */
  getdimensiones(): Tamayo {
    return this.dimensiones;
  }

  /**
   * Método que devuelve el peso del dispositivo electronico
   * @returns peso del dispositivo electronico
   */
  getPeso(): number {
    return this.peso;
  }

  /**
   * Método que devuelve el tipo de dispositivo electronico
   * @returns tipo de dispositivo electronico
   */
  getTipo(): string {
    return this.tipo;
  }

  /**
   * Método que devuelve el modelo del dispositivo electronico
   * @returns modelo del dispositivo electronico
   */
  getmodelo(): string {
    return this.modelo;
  }

  /**
   * Método que devuelve la descripción del dispositivo electronico. Nombre, dimensiones, peso, tipo y modelo
   * @returns descripción del dispositivo electronico
   */
  GetDescripcion(): string {
    return `Nombre: ${this.getNombre()}, Dimensiones: ${this.getdimensiones().getDescripcion()}, Peso: ${this.getPeso()}kg , Tipo: ${this.getTipo()}, Modelo: ${this.getmodelo()}`;
  }
}
