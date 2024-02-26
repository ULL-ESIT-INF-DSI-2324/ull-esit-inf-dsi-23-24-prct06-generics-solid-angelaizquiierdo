import { StringSearchableCollection } from "./StringSearchableCollection";
import { NumericSearchableCollection } from "./NumericSearchableCollection";



const numeros = new NumericSearchableCollection([2,5,8,365,65]);

const strings = new StringSearchableCollection([
  "tele",
  "monitores",
  "aviones"
]);

numeros.addItem(3);

strings.addItem("computadoras");
