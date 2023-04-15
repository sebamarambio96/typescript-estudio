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

enum Talla { chica = 2, mediana, grande, extragrande }

const variable1 = Talla.grande
console.log(variable1)

//al poner const se genera un codigo más limpio
const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

//OBJETOS
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number, /* readonly hace que no pueda ser sobreescrita */
    nombre?: string, /* ? hace que la propiedad sea opcional */
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = {
    id: 1,
    nombre: 'Hola mundo',
    talla: Talla.chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chile'
    }
}

/* objeto.id = 42  */

const arr: Persona[] = []

/* const fn: () => number = () => {
    let x = 2 
    if(x>5){
        return 7
    } else{
        return 4
    }
} */
//FUNCTION
const fn: (a: number) => string = (edad: number) => {
    if (edad > 17)
        return 'Puedes ingresar'
    return 'No puedes pasar'
}

function validaEdad(edad: number, msg: string = 'Chanchito feliz'): string {
    if (edad > 17)
        return `Puedes ingresar ${msg}`
    return 'No puedes pasar'
}

validaEdad(18, 'Hola mundo')
//NEVER
//Void es una función que sea util, pero con el tipo never nos aseguramos que esta función despache un error para que no retorne undefined y otros desarrolladores sepan que lo que hace la funcion es lanzar un error
function ErrorUsuario(): never {
    throw new Error('error de usuario')
}

let puntaje: number | string = 98

puntaje = 'ola MutationRecord'
// UNION TYPE
type Animal = {
    id: number,
    estado: string
}

type Usuario = {
    id: number,
    name: string
}

let animal: Animal | Usuario = {
    id: 1,
    estado: ''
}

function suma2(n: number | string) {
    if (typeof n === 'number') {
        return n + 2
    }
    return parseInt(n) + 2
}

//INTERCEPTION TYPE
type Audit = {
    created_at: string,
    modified_at: string
}
type Product = {
    name: string,
}
//Debe tener las propiedades de ambos tipos
const product: Audit & Product = {
    created_at: '',
    modified_at: '',
    name: ''
}

//LITERAL TYPES
// podmeos especificar que valor queremos que sea
type Fibo = 0 | 3 | 1 | 2 | 5

const nDeFibo: Fibo = 3

//Nullable types
function toNumber(s:string) {
    return parseInt(s)
}

const n = toNumber(null)