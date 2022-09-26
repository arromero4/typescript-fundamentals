//CLASS
class Person {
  public zone:string = "Coyoacan";
  protected city:string = "Copilco";
  private country:string = "MX";

  constructor() {}

  greet(): void {
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

  constructor(private readonly id: number, private readonly name: string, private readonly dept: string) {
    super();
    // this.id = id;
    // this.name = name;
    // this.dept = dept;
    this.showInfo();
  }

  //Metodos
  //Acciones que se pueden llevar a cabo dentro o fuera de la clase
 private showInfo(): void {
    console.log(`${this.name} ${this.city} ${this.zone}`);
  }
}

const emp = new Employee(1, "arromero", "stark");
//Access control keywords
//Public Private Protected
emp.greet()
