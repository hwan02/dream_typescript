{
    // Javascript
    /*function jsAdd(num1, num2) {
        return num1 + num2;
    }

    function add(num1: number, num2: number) : number {
        return num1 + num2;
    }

    function jsFetchNum(id: string) : Promise<number> {
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }*/

    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steam', 'Actor');
    printName('Thresh');

    function printMessage(message: string = 'default') {
        console.log(message);
    }

    printMessage();

    console.log(addNumber(1, 2, 3));
    function addNumber(...numbers : number[]) : number {
        return numbers.reduce((a, b) => a + b);
    }
}