{
    type Todo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
        return { ...todo, ...fieldsToUpdate };
    }

    const todo:  Todo = {
        title: 'check',
        description: 'description',
        label: 'label',
        priority: 'high'
    }

    console.log(updateTodo(todo, {priority: 'low'}));
}