// function getTotal(one:number,two:number):number{
//   return one + two
// }
// const total = getTotal(1,2)

// function sayHello():void {
//   console.log('Hello TS');

// }

// function errorFuntion():never{
//   throw new Error()
//   console.log('hello');
// }

// function forNever(): never{
//   while(true){}
//   console.log('hello');

// }

// function add({ x, y }: { x: number, y: number }) {
//   return x + y
// }
// const total = add({ x: 1, y: 2 })

function getNumber({ one }: { one: number }) {
  return one
}
const one = getNumber({ one: 1 })