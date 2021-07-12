const User = function (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.print = function() {
        return "Name: "+ this.name + ", " + "Surname: " + this.surname + ", " + "age: " + this.age + ".";
    };
};

const user = new User('John', 'Smith', 30);
console.log(user.print())