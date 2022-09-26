"use strict";
//CLASS
class Person {
    constructor() {
        this.zone = "Coyoacan";
        this.city = "Copilco";
        this.country = "MX";
    }
    greet() {
        console.log("hello world");
    }
}
class Employee extends Person {
    //Atributos
    //El estado de la clase, propiedades o variables, controlar dentro o fuera de la clase
    //Se comentan los atributos porque se asignación automatica en el constructor
    // id: number;
    // name: string;
    // dept: string;
    //readonly solo puede leer, no se puede reasignar
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        // this.id = id;
        // this.name = name;
        // this.dept = dept;
        this.showInfo();
    }
    //Metodos
    //Acciones que se pueden llevar a cabo dentro o fuera de la clase
    showInfo() {
        console.log(`${this.name} ${this.city} ${this.zone}`);
    }
}
const emp = new Employee(1, "arromero", "stark");
//Access control keywords
//Public Private Protected
emp.greet();
