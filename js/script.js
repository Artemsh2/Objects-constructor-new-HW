'use strict'

//2.
    // 1) Створіть конструктор Person, який має властивості name і age. Створіть два об'єкти з цим конструктором і виведіть їх властивості.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// console.log(new Person('Artem', 20));
// console.log(new Person('Ivan', 25));

//2) Розширте конструктор Person, додавши метод greet, який виводитиме привітання з іменем особи. Викличте цей метод для одного зі створених об'єктів.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function() {
//         console.log(`Привіт ${this.name}, вам ${age} років`);
//     };
// }
// let sayHi = new Person('Ivan', 25);
// sayHi.greet();

//3. 
    // 1)Створіть конструктор Rectangle, який приймає два параметри - width (ширина) і height (висота). Додайте метод getArea, який обчислюватиме площу прямокутника. Створіть об'єкт з цим конструктором і виведіть його площу.

// function Rectangle(width, height){
//     this.width = width;
//     this.height = height;
//     this.getArea = function(){
//         let square = this.width * this.height;
//         return {square};
//     };
// }
// let rectangleSquare = new Rectangle(4, 4);
// console.log(rectangleSquare.getArea());
    // 2) Розширте конструктор Rectangle, додавши метод getPerimeter, який обчислюватиме периметр прямокутника. Викличте цей метод.

// function Rectangle(width, height){
// this.width = width;
// this.height = height;
// this.getArea = function(){
//     let square = this.width * this.height;
//     return {square};
// };
// this.getPerimeter = function(){
// 	let perimeter = (this.width + this.height) * 2;
// 	return `Периметр прямокутника з довжиною ${this.height} та шириною ${this.width} = ${perimeter}`
// };
// }
// let rectanglePerimeter = new Rectangle(2, 4)
// console.log(rectanglePerimeter.getPerimeter());

//4. Створіть конструктор Car, який приймає параметр brand (марка автомобіля) і має властивість speed (швидкість автомобіля, початково 0). Додайте метод accelerate, який збільшуватиме швидкість автомобіля на певне значення. Додайте метод brake, який зменшуватиме швидкість автомобіля на певне значення. Створіть об'єкт з цим конструктором і перевірте його методи accelerate і brake.

// function Car(brand){
// 	this.speed = 0;
// 	this.brand = brand;
// 	this.accelerate = function(){
// 		let valueOfAccelerate = +prompt('Введіть значення прискорення: ');
// 		this.speed += valueOfAccelerate;
// 		return `Швидкість автомобіля після прискорення в ${valueOfAccelerate}км/год: ${this.speed}`
// 	};
// 	this.brake = function(){
// 		let valueOfBrake = +prompt('Введіть значення гальмування: ');
// 		this.speed -= valueOfBrake;
// 		return `Швидкість автомобіля після гальмування в ${valueOfBrake}км/год: ${this.speed}`
// 	};
// }
// let carSpeed = new Car('BMW');
// console.log(carSpeed.accelerate());
// console.log(carSpeed);
// console.log(carSpeed.brake());
// console.log(carSpeed);

//5. Створіть конструктор Product, який приймає параметри name (назва товару) і price (ціна товару). Додайте метод discount, який застосовуватиме знижку до ціни товару на певний відсоток. Створіть об'єкт з цим конструктором і викличте метод discount, щоб зменшити ціну товару.

// function Product(name, price){
// 	this.name = name;
// 	this.price = price;
// 	this.discount = function(percent){
// 		let discountResult = (this.price / 100) * percent;
// 		console.log(`Знижка ${percent}% на товар ${this.name} з ціною ${this.price} = ${discountResult} грн`);
// 		return `Кінцева знижка: ${this.price - discountResult}`;
// 	};
// }
// let showDiscount = new Product('Coffee', 500);
// console.log(showDiscount.discount(25));
// console.log(showDiscount);

//6. Створіть конструктор BankAccount, який має властивості owner (власник рахунку) і balance (баланс рахунку). Додайте метод deposit, який додає певну суму до балансу рахунку, і метод withdraw, який знімає певну суму з балансу рахунку. Впевніться, що метод withdraw не дозволяє знімати більше, ніж є на балансі. Створіть об'єкт з цим конструктором і перевірте роботу методів deposit і withdraw.

// function BankAccount(owner, balance){
// 	this.owner = owner;
// 	this.balance = balance;
// 	this.deposit = function(){
// 		let valueOfDep = +prompt('Поповнити рахунок на суму: ');
// 		this.balance += valueOfDep;
// 		return `Баланс після поповнення: ${this.balance}`;
// 	};
// 	this.withdraw = function(){
// 		let valueOfWithdraw = +prompt('Зняти суму з рахунку: ')
// 		if(this.balance - valueOfWithdraw < 0){
// 			console.log('Недостатньо коштів');
// 	}else{
// 		this.balance -= valueOfWithdraw;
// 	}
// 	return `Баланс після зняття коштів: ${this.balance}`
// }
// }
// let account = new BankAccount('Artem', 100);
// console.log(account);
// console.log(account.deposit());
// console.log(account);
// console.log(account.withdraw());
// console.log(account);

//7. Створіть конструктор Book, який має властивості title (назва книги), author (автор книги) і year (рік видання книги). Додайте метод getSummary, який повертатиме рядок зі зведеною інформацією про книгу (наприклад, "Книга: Хоббіт, Автор: Дж. Р. Р. Толкін, Рік видання: 1937"). Створіть об'єкт з цим конструктором і викличте метод getSummary.

// function Book(){
// 	this.title = 'The Green Mile';
// 	this.author = 'Stephen King';
// 	this.year = 1999;
// 	this.getSummary = function(){
// 		return `book: ${this.title}, author: ${this.author}, year of publication of the book: ${this.year} year`;
// 	}
// }
// let informationAboutBook = new Book();
// console.log(informationAboutBook.getSummary());
// console.log(informationAboutBook);

//8. Створіть конструктор Employee, який має властивості name (ім'я працівника), position (посада) і salary (заробітна плата). Додайте метод getAnnualSalary, який обчислюватиме річний дохід працівника, множачи його заробітну плату на 12. Створіть об'єкт з цим конструктором і виведіть його річний дохід за допомогою методу getAnnualSalary.

// function Employee(){
// 	this.name = 'Artem';
// 	this.position = 'director';
// 	this.salary = '25000';
// 	this.getAnnualSalary = function(){
// 		return `Річний дохід працівника ${this.name} = ${this.salary * 12}`;
// 	};
// }
// let yearSalary = new Employee();
// console.log(yearSalary);
// console.log(yearSalary.getAnnualSalary());

//Завдання зі статті
//Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:

// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.
// function Calculator(){
// 	this.read = function(){
// 		this.a = +prompt('Введіть значення a: ');
// 		this.b = +prompt('Введіть значення b: ');
// 	};
// 	this.sum = function(){
// 		return `Сума значень: ${this.a + this.b}`;
// 	};
// 	this.mul = function(){
// 		return `Результат множення значень: ${this.a * this.b}`
// 	};
// }
// let calc = new Calculator();
// console.log(calc.read());
// console.log(calc);
// console.log(calc.sum());
// console.log(calc.mul());
