// A 또는 B
interface Either<L, R> {
    left: () => L;
    right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightNumber: R) {}
    left(): L {
        return this.leftValue;
    }

    right(): R {
        return this.rightNumber;
    }
}

const either = new SimpleEither(4,5);
console.log(either.left());
console.log(either.right());

const either2 = new SimpleEither('Specialni', 'Perfectoni');
console.log(either2.left());
console.log(either2.right());
