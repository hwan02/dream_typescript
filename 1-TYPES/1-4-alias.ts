{
    /**
     * Type aliases
     */
    type Text = string | undefined;
    const name: Text = 'daniel';
    const address: Text = 'Gonghang';
    type Num = number;
    type Student = {
        name: string,
        age: number
    }
    const s : Student = {
        name: 'what', age: 33
    }
    console.log(s);

    /**
     * String Literal Types
     */
    type Name = 'name';
    let danielName: Name;
    danielName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Bool = true;
    const boo: Bool = true;
}