interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay(): void {
        console.log('Full time!');
    }
    workFullTime() {}
}

class PartTimeEmployee implements Employee {
    pay(): void {
        console.log('Part time!');
    }
    workPartTime() {}
}

function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee
}

const daniel = new FullTimeEmployee();
daniel.workFullTime();
const bob = new PartTimeEmployee();
bob.workPartTime();

const danielAfterPay = pay(daniel);
const bobAfterPay = pay(bob);

const obj = {
    name: 'daniel',
    age: 31
};

const obj2 = {
    animal: 'dog',
};

console.log(getValue(obj, 'name'));  // daniel
console.log(getValue(obj, 'age')); // 31
console.log(getValue(obj2, 'animal')); // dog

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}