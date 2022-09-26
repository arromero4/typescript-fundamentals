const userName = 'andres'

//basic types
let myTypeString: string = 'Hello World'
let myTypeNumer: number = 33
let myTypeBoolean: boolean = true

myTypeString = '33'

//Array
let arrNumber: number[] = [1,2,3]
//Segunda forma de declarar el arreglo:
//let arrNumber2: Array<number> = [1,2,3]

let arrString: string[] = ['a', 'b', 'c'] 

//tipo Any - cualquier cosa
let arrAny: any[] = ['hola', 343, false]

//Tupla
let tuplaPlayer: [string, number, boolean] = ['Checo', 11, true]

//Tupla Array
let tuplaPlayer2: [number, string][]
tuplaPlayer2 = [
    [1, 'Max'],
    [2, 'Charles'],
    [3, 'Checo']
]

//Inferencia de tipos
let myVariable
let myVariable2 = 'hello world'

//Composicion de tipo
//Unions 
let myVariable3: string | number | null 
myVariable3 = 11

