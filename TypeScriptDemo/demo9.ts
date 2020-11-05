interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string
}

interface Teacher extends Girl {
  teach():string;
}

class xiaojiejie implements Girl {
  name = "刘英";
  age = 18;
  bust = 90;
  say() {
    return "欢迎光临"
  }
}

const girl = {
  name: '小红',
  age: 18,
  bust: 94,
  waistline: 30,
  sex: '女',
  say() {
    return "欢迎光临"
  },
  teach(){
    return "我来教你"
  }
}
const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
  girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰');
}

const getResume = (girl: Teacher) => {
  console.log(girl.name + '年龄是' + girl.age)
  console.log(girl.name + '胸围是' + girl.bust)
  girl.waistline && console.log(girl.name + '腰围是' + girl.waistline)
  girl.sex && console.log(girl.name + '性别是' + girl.sex);
}

screenResume(girl)
getResume(girl)