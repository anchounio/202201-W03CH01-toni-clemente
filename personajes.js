import { Character } from "./Personaje.js";
import { Advisor } from "./Asesor.js";
import { Squire } from "./Escudero.js";
import { Knight } from "./Luchador.js";
import { King } from "./Rey.js";

const joffrey = new King("Joffrey", "Baratheon"); //el resto de parámetros, al no estar puestos darán undefined
const jaime = new Knight("Jaime", "Lannister");
const danny = new Knight("Daenerys", "Targaryen");
const tyrion = new Advisor("Tyrion", "Lannister");
tyrion.patron = danny;
const bronn = new Squire("Bronn");
bronn.patron = jaime;

export const characters = [joffrey, jaime, danny, tyrion, bronn];
