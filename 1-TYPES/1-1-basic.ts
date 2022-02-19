{
    /**
     * Javascript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array
     */

    const num:number = 3;

    const str:string = 'hello';

    const bool:boolean = false;

    let name: undefined;
    let age: number | undefined;
    age = undefined;
    age = 1;

    let person: null;
    let person2: string | null;

    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    let anything: any = 0;
    anything = 'what';

    function print(): void {
        console.log('hello');
        return;
    }

    function throwError(message: string): never {
        throw new Error(message);
        while(true) {}
    }

    let obj: object;
    obj = [1, 4];
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'daniel'});
    acceptSomeObject({animal: 'dog'});
}