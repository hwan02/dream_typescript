interface Stack {
    // push, pop, size
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

class StackImplements implements Stack {
    readonly size: number;

    pop(): string {
        return "";
    }

    push(value: string): void {
    }

}