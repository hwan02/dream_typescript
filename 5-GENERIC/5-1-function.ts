{
    function checkNotNullBad(arg?: number | null): number {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    // const result = checkNotNull(null);
    // console.log(result);

    function checkNotNull<T>(arg: T | null): T {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    const number = checkNotNull(3);
    const string = checkNotNull('3');
    const boolean: boolean = checkNotNull(true);

    console.log(number);
    console.log(string);
    console.log(boolean);
}