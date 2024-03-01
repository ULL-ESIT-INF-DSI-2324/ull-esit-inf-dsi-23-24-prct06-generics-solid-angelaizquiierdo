import { Tamayo } from "./tamayo";
import { Caja } from "./caja";
import {
  Utencilios,
  DispositivoElectronico,
  Vajilla,
  Prenda,
} from "./TipoeEnseres";
import { Mudanza } from "./mudanza";
import { Enser } from "./enser";

const Utencilios1 = new Utencilios(
  "Cuchillo",
  new Tamayo(15, 3, 0.5),
  0.5,
  1,
  "Ikea",
  "cubierto de cocina",
);
const Utencilios2 = new Utencilios(
  "Tenedor",
  new Tamayo(15, 3, 0.5),
  0.5,
  1,
  "Ikea",
  "cubierto de cocina",
);
const Utencilios3 = new Utencilios(
  "Cuchara",
  new Tamayo(15, 3, 0.5),
  0.5,
  1,
  "Ikea",
  "cubierto de cocina",
);
const Utencilios4 = new Utencilios(
  "Harry potter Piedra filosofal",
  new Tamayo(14, 21.6, 3),
  0.8,
  1,
  undefined,
  "libro de cocina",
);

const DispositivoElectronico1 = new DispositivoElectronico(
  "TV 50",
  new Tamayo(120, 70, 10),
  25,
  "LG",
  "Television plana",
);
const DispositivoElectronico2 = new DispositivoElectronico(
  "Monitor 24",
  new Tamayo(60, 35, 8),
  6,
  "Mitsai",
  "Monitor de ordenador",
);

const Vajilla1 = new Vajilla(
  "Plato",
  new Tamayo(20, 20, 2),
  0.3,
  1,
  "Plato llano",
);
const Vajilla2 = new Vajilla(
  "Vaso",
  new Tamayo(10, 10, 10),
  0.2,
  1,
  "Vaso de cristal",
);
const Vajilla3 = new Vajilla(
  "Taza",
  new Tamayo(10, 10, 10),
  0.4,
  1,
  "Taza de cerámica",
);

const Prenda1 = new Prenda(
  "Camiseta",
  new Tamayo(30, 30, 5),
  0.3,
  1,
  "Camiseta de algodón",
);
const Prenda2 = new Prenda(
  "Pantalón",
  new Tamayo(30, 30, 5),
  0.7,
  1,
  "Pantalón vaquero",
);
const Prenda3 = new Prenda(
  "Jersey",
  new Tamayo(30, 30, 5),
  0.5,
  1,
  "Jersey de lana",
);
const Prenda4 = new Prenda(
  "Calcetines",
  new Tamayo(30, 30, 5),
  0.1,
  1,
  "Calcetines de algodón",
);

const caja1: Caja<Utencilios> = new Caja<Utencilios>(
  "Caja de cocina",
  [Utencilios1, Utencilios2, Utencilios3, Utencilios4],
  1,
);
const caja2: Caja<DispositivoElectronico> = new Caja<DispositivoElectronico>(
  "Caja de electronica",
  [DispositivoElectronico1, DispositivoElectronico2],
  5,
);
const caja3: Caja<Vajilla> = new Caja<Vajilla>(
  "Caja de vajilla",
  [Vajilla1, Vajilla2, Vajilla3],
  5,
);
const caja4: Caja<Prenda> = new Caja<Prenda>(
  "Caja de ropa",
  [Prenda1, Prenda2, Prenda3, Prenda4],
  2,
);
caja1.ListarEnseres();
console.log(caja1.BuscarEnser("Cuchillo")); // true
caja1.EliminarEnser("Cuchillo");
caja1.ListarEnseres();
caja1.getPesoTotal();

caja2.ListarEnseres();
console.log(caja2.BuscarEnser("pepa")); // false
caja2.EliminarEnser("TV 50");
caja2.ListarEnseres();

caja3.getPesoTotal();

Prenda1.GetDescripcion();
Utencilios1.GetDescripcion();
Vajilla1.GetDescripcion();
DispositivoElectronico1.GetDescripcion();

const mudanza = new Mudanza<Enser>();

mudanza.AnadirCaja(caja1);
mudanza.AnadirCaja(caja2);
mudanza.AnadirCaja(caja3);
mudanza.AnadirCaja(caja4);

mudanza.ListarTodoEnsers();
mudanza.getPesoTotal();
mudanza.EliminarCaja(1);
mudanza.ListarTodoEnsers();
mudanza.getPesoTotal();
mudanza.EliminarCaja(1);
