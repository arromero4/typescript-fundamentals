function greet(name: string){
    console.log(`Hello ${name}`)
}

greet('Max')

function getNumber():number {
    return Math.floor(Math.random() * 10)
}

console.log(getNumber())

//el ? es una propiedad opcional
function printPosition(position: {lat: number, long?: number | string}){
    console.log(`Lat: ${position.lat} Long: ${position.long}`)
}

printPosition({lat: 3, long: 5})