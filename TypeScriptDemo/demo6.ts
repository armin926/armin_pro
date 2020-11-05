const numberArr: number[] = [1, 2, 3]

const stringArr: string[] = ['a', 'b']

const undefinedArr: undefined[] = [undefined]

const arr: (string | number)[] = [1, 'string', 2]


// type alias 类型别名儿

type Lady = {name: string, age: number}

class Madam {
  name:string;
  age:number;
}

const littlesisters: Madam[] = [
  {
    name: '刘英儿',
    age: 18
  },
  {
    name: '刘星儿',
    age: 20
  }
]