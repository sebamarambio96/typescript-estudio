let mensaje: string = "Hola mundo";

mensaje = "Chao mundo";
console.log(mensaje);

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos = true;

//Siempre y cuando nosotros inicialicemos una variable no es necesario agregar el tipo ya que sera un tipo inferido
/* extintos = 2 */ /* Marcará error */
//Si no inicializamos la dejará como tipo any, lo cual me dejaria poner cualquier tipo de dato lo que perderia el proposito de TS
let miVariable;
miVariable = "Chanchito feliz";
miVariable = 42;

function chanchitoFeliz(config: any) {
    return config;
}


//ARRAYS

let animales: string[] = ['chanchitos', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

/* nums.map(x => x.) */ /* autocompletado solo sugiere según el tipo de datos */

//Tupla: variable que contiene un set de datos que se enceuntran ordenados
//1, edad, nombre, animales[]

let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchitofeliz']]
/* tupla.push(12) */ /* esto no generara error asi que hay que tener cuidado */

//ENUMS
/* Lista de constantes que podemos referencias, como tallas de ropas, estados, cargando*/

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase

enum Talla {chica=2, mediana, grande, extragrande}

const variable1 = Talla.grande
console.log(variable1)

//al poner const se genera un codigo más limpio
const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success

//Objetos