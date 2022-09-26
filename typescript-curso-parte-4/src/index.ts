//Generics
interface Person {
    id: number, 
    name: string
}

interface Employee extends Person{
    role: string
}
interface Product {
    id: number, 
    name: string,
    price: number

}

// type dataType = Person | Product;


class DataCollection<T extends {id: number, name: string}> {
    private items: T[] = []

    addItem(newItem:T):void{
        this.items.push(newItem)
    }

    getItems():void{
        console.log(`List of items`, JSON.stringify(this.items))
    }

    getNames(): string[]{
        return this.items.map((item) => item.name)
    }

    getItemById(id: number): T | undefined {
        return this.items.find((item:T) => item.id === id)
    }

}

// const personCollection = new DataCollection()

const productCollection = new DataCollection<Product>()
// const newData = {
//     id: 1,
//     name: 'Gian'
// }
// const newData2 = {
//     id: 2,
//     name: 'Melissa'
// }

const newData3= {
    id: 1,
    name: 'Mamila',
    price: 333

}
// personCollection.addItem(newData)
// personCollection.addItem(newData2)
productCollection.addItem(newData3)
productCollection.getItems()
