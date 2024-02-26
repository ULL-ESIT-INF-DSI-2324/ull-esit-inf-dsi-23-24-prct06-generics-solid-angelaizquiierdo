
import { Tamayo } from "./Tamayo";

export type nivelFragilidad = 1|2|3|4|5;

export interface Enseres{
  nombre : string, 
  dimesiones : Tamayo, 
  fragilidad: nivelFragilidad,
}
