"use strict";
// type dataType = Person | Product;
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
// const personCollection = new DataCollection()
const productCollection = new DataCollection();
// const newData = {
//     id: 1,
//     name: 'Gian'
// }
// const newData2 = {
//     id: 2,
//     name: 'Melissa'
// }
const newData3 = {
    id: 1,
    name: 'Mamila',
    price: 333
};
// personCollection.addItem(newData)
// personCollection.addItem(newData2)
productCollection.addItem(newData3);
productCollection.getItems();
