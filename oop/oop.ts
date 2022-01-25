
// struktúra / tervrajz
class User {

  constructor(userName: string, age: number) {
    this.name = userName;
  }

  public name: string = "";

  public sayHello() {
    return "Hi, I'm " + this.name;
  }

  public age: number;
  public address: string;
  public phone: string;
}

const joe = new User("Joe", 33);







const mary = {
  name: "Mary",
  sayHello: function () {
    return "Hi, I'm " + this.name;
  },
  age: 22,
  address: "Asd adadsadassd",
  phone: "5646465165465"
};

console.log(mary.name);
console.log(mary.sayHello());
