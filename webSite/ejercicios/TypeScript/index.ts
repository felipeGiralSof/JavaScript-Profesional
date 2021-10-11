// console.log("hola TypeScript");


//Boolean
let muted : boolean = false;
muted = true;

//Numeros
let age = 6;
let numerador:number = 42;
let denominador:number = age;
let resultado = numerador / denominador;

//String
let nombre:string = "Felipe";
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["felipe", "ana", "estela", "carlos", "valentina", "david"];
//people.push(900);
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("ricardo");
peopleAndNumbers.push(1000);

//enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin:any = "Joker";
comodin = {type: 'Wildcard'};

//Object
let someObject: object = {type: 'Wildcard'};

//funciones
function add(a: number, b:number){
  return a + b;
}

const sum = add(2, 3);
console.log(sum);

function createAdder(a: number): (number) => number {
  return function(b: number){
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName : string, lastName: string = 'Giraldo'): string{
  return `${firstName} ${lastName}`;
}

const felipe = fullName("felipe"); 
console.log(felipe);

//interfaces
enum Colorin{
  Rojo = "Rojo",
  Verde = "verde",
}

interface Rectangulo {
  ancho:number,
  alto:number,
  color?: Colorin,
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  //color: Colorin.Rojo,
}

function area(r:Rectangulo){
  return r.alto * r.ancho
}

const calArea = area(rect);
console.log(`el Area del rectangulo es: ${calArea}`);

rect.toString = function(){
  return this.color ? `Un rectangulo ${this.color}`: `Un rectangulo`;
};
console.log(rect.toString());