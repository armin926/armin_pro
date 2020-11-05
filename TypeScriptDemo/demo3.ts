const xiaojiejie: {
  name: string,
  age: number
} = {
  name: 'alise',
  age: 18
}

console.log(xiaojiejie.name)

// const xiaojiejies:string[]= ['jony','joinL','petter',123]

class Person {}

const dajiao: Person = new Person()

const jianXiaojiejie: () => string = ()=> {
  return 'dafoot'
}

class Foo{}
const someVar = Foo
const someOherVar = 123

namespace Utility{
  export function log(msg){
    console.log(msg);
  }
  export function error(msg){
    console.log(msg);
  }
}

Utility.log('Call me')
Utility.error('maybe')