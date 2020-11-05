// private protected public
// 类的内部和类的外部
class Person {
  // protected
  protected name: string;
  /**
   * sayHello
   */
  public sayHello() {
     console.log(this.name + ' say hello');
  }
}

class Teacher extends Person {
  public sayBye(){
    this.name
  }
}

const person = new Person()
person.name = 'armin'
person.sayHello()
console.log(person.name);
