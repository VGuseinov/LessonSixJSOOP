function x(y) {
    return y * 5;
}

// t - функция, принимает один численный аргумент
// n - любое число
function f(t, n) {
    return n + t(n);
}

console.log(f(x, 3));

// лямбда-выражения
// любую функцию можно заменить на лямбду и наоборт
// кроме случаев когда эта функция либо лямбда объявлена внутри объекта
console.log(f((a) => a * a, 10));

// ООП
// Способы создания объекта
let cat = {
    name: "Tom",
    age: 12,

    meow: () => console.log("meow")
};
cat.age = 10;
console.log(cat);
cat.meow();

// каждый объект в js - это ассоциативыный массив
// примерно как HashMap из Java
// где в качестве ключа используется название поля объекта
cat['name'] = 'Kitty';
cat['color'] = 'gray';
cat.play = (toy) => console.log('cat is palying with ' + toy);
console.log(cat);
cat['meow']();
cat['play']('ak-47');

// в js используется прототипирование
// 1. Способ 
let cat2 = {};
cat2.__proto__ = cat;
console.log(cat2);
cat2.meow();

let cat3 = {
    meow: () => console.log('eat mouse')
};
Object.setPrototypeOf(cat3, cat2);
console.log(cat3);
cat3.play('RPG');
cat3.meow();
// вызов метода из родительского объекта
cat3.__proto__.meow();

// 2 Способ
function Dog(name = 'Neo') {
    // конструктор
    this.name = name;
    this.drinkBeer = () => console.log('go drink beer');
}

let dog = new Dog();
console.log(dog);
dog.drinkBeer();

// 3. Способ
class User {
    #secret; // приватное свойство
    name;
    age;

    // конструктор может быть только один
    constructor(name) {
        this.name = name;
        this.#secret = 'i love sugar'
    }

    pay() {
        console.log('you buy this game in Steam')
    }

    static info() {
        console.log('USER');
    }
}

let user = new User('Lil Nas X');
console.log(user);
user.pay();
console.log(user);
User.info();

class Student extends User {
    constructor() {
        super('Viktor Petrovich');
    }

    pay() {
        console.log('Lend money');
    }
}

let student = new Student();
console.log(student);

console.log(typeof [1, 2, 3]);
console.log(typeof student);
console.log(typeof f);
console.log(typeof Student);