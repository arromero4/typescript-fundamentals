//Variable
const PI = 3.14

//interface
interface Person{
    id: number,
    name: string
}
//function
function generaRandomNumber():number{
    return Math.floor(Math.random() * 100)
}

export {PI, Person, generaRandomNumber} 