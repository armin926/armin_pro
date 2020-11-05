// class Person{
//   public readonly _name:string
//   constructor(name:string){
//     this._name = name
//   }
// }

// const person = new Person('armin')

// person._name = 'sn'

// console.log(person._name);

abstract class Girls {
  abstract skill()
}

class Waiter extends Girls {
  skill() {
    console.log('大爷二，请喝水');
  }
}

class BaseTeacher extends Girls {
  skill() {
    console.log('大爷二，来按摩');
  }
}

class seniorTeacher extends Girls {
  skill() {
    console.log('大爷二，来spa');
  }
}
