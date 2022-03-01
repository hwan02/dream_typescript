{
    const obj = {
        name: 'daniel',

    }

    const name = obj.name;
    console.log(name);
    console.log(obj['name']);

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name'];
    const text: Name = '3l';

    type Gender = Animal['gender'];

    type Keys = keyof Animal;
    const key: Keys = 'name';

    type Person = {
        name: string;
        gender: Animal['gender'];
    };

    const person: Person = {
        name: 'daniel',
        gender: 'male'
    };
}