{
    /**
     * Type Inference
     */
    let text = 'hello';
    function print(message = 'hello') {
        console.log(message);
    }

    function add(x: number, y: number) {
        return x + y;
    }

    add(3, 4556);

    const result = add(1, 3);
}