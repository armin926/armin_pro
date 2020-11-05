interface Girl {
  name: string;
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {

  }
  getGirl(index: number): string {
    return this.girls[index].name
  }
}

const selectGirl = new SelectGirl([
  {name:'刘英儿'},
  {name:'小红'},
  {name:'芳芳'}
])

console.log(selectGirl.getGirl(1));
