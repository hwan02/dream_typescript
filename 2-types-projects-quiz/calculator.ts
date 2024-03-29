/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 0)); // 2
console.log(calculate('remainder', 5, 2)); // 1


// function calculate(type: string, a: number, b: number) : number {
type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';
function calculate(command: Command, a: number, b: number) : number | undefined {
    switch(command) {
        case 'add':
            return a+b;
        case 'subtract':
            return a-b;
        case 'multiply':
            return a*b;
        case 'divide':
            if(b !== 0) {
                return a/b;
            }
            return 0;
        case 'remainder':
            return a%b;
        default:
            return 0;
    }
}