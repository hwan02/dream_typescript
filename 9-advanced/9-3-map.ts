{
    type Video = {
        title: string;
        author: string;
        description: string;
    };

    type Optional<T> = {
        [P in keyof T]?: T[P]
    };

    type VideoOptional = Optional<Video>;

    type Animal = {
        name: string;
        age: number;
    }

    type AnimalOptional = Optional<Animal>;

    const animal: Optional<Animal> = {
        name: 'dog',
    }

    type Nullable<T> = { [P in keyof T]: T[P] | null};
    const obj3: Nullable<Video> = {
        title: null,
        author: null,
        description: null
    }
    console.log(obj3);
}