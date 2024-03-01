import { Tamayo } from "./tamayo";
import { nivelFragilidad } from "./tipo_datos";

/**
 * Interfaz que representa un enser
* @property nombre: Nombre del enser
* @property dimensiones de tipo Tamayo
* @property fragilidad de tipo nivelFragilidad
* @method GetDescripcion Método para obtener una descripción del enser
*/
export interface Enser {
  nombre : string;
  dimensiones : Tamayo;
  peso: number;
  fragilidad? : nivelFragilidad;
  GetDescripcion() : string;
}
