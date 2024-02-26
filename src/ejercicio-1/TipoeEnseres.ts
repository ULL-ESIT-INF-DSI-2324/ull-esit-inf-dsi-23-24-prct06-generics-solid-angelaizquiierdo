import {Enseres, nivelFragilidad} from "./enseres"
import {Tamayo} from './tamayo';


export class Mueble implements Enseres{
  constructor(private nombre : string, private dimesiones: Tamayo, private fragilidad : nivelFragilidad) {
  }

}

export type tipoElectrodomestico = "Nevera" | "Televisión" | "Lavadora" | "Secadora" | "Lavavajillas" | "Microondas" | "Horno" | "Cafetera" | "Licuadora" | "Tostadora";

export class Electrodomestico implements Enseres{
  constructor(private nombre : string, private dimesiones: Tamayo, private fragilidad : nivelFragilidad, private modelo: string, private tipo: tipoElectrodomestico) {
  }
  getNombre(): string {
    return this.nombre;
  }

  getdimensiones() : Tamayo {
    return this.dimensiones;
  }

  getfragilidad() : nivelFragilidad {
    return this.fragilidad;
  }

  get
}

