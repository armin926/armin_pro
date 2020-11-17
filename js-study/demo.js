let age = 11
let ageAsString = age.toString()
let found = true
let foundAsString = found.toString()
// console.log(typeof ageAsString,typeof foundAsString)

let a = 6
let b = 9

function simpleTag(strings, ...expressions) {
  // console.log(strings) //* ['','+','=','']
  for(const expression of expressions){
    // console.log(expression) //* 6,9,15
  }

  return 'foobar'
}

let untaggedResult = `${a}+${b}=${a+b}`
let taggedResult = simpleTag`${a}+${b}=${a+b}`

// console.log(untaggedResult); //* foobar
// console.log(taggedResult) //* 6+9=15

let sym = Symbol()

// console.log(typeof sym) //* Symbol

function Foo(){}
let f = new Foo()
// console.log(f instanceof Foo); //* true
// console.log(Foo[Symbol.hasInstance](f));  //* true

class Bar{}
class Baz extends Bar{
  static [Symbol.hasInstance](){
    return false
  }
}

let x = new Baz()
// console.log(Bar[Symbol.hasInstance](x)); //* true
// console.log(Baz[Symbol.hasInstance](x)); //* false

// for (const propName in window){
//   document.write(propName+'\n')
// }

for(const el of [2,4,6,8]){
  // document.write(el+',')
}

function setName(obj){
  obj.name = 'Nicholas'
  obj = new Object()
  obj.name = 'Nick'
}

let person = new Object()
setName(person)
console.log(person);
console.log(person.name);

var color = 'blue'
function changeColor(){
  let anotherColor = 'red'
  function swapColors(){
    let tempColor = anotherColor
    anotherColor = color
    color = tempColor
    //* 这里可以访问color,anotherColor 和 tempColor
  }
  //* 这里可以访问color和anotherColor, 但访问不到tempColor
  swapColors()
}
//* 这里只能访问color
changeColor()

function buildUrl(){
  let qs = "?debug=true"

  with(location){
    let url = href + qs
  }
  return url
}