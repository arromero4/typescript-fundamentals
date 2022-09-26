//Type Assertion
let channel : any = 'Andres'

//let channelStr = <string>channel
let channelStr = channel as string

//cuando trabajamos con HTML
//Forma 1
const myCanvas1 = document.getElementById('main') as HTMLCanvasElement
//Forma 2
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main')

