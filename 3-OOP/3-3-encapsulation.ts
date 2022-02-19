{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number) : CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makecoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker = CoffeeMaker.makeMachine(0);
    maker.fillCoffeeBeans(30);
    console.log(maker);
    maker.makecoffee(3);
    console.log(maker);

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if(num < 0) {
                throw new Error('age should be greater then 0');
            }
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {

        }
    }

    const user = new User('Steve', 'Jobs');
    // user.age = 16;
    console.log(user.age);
}