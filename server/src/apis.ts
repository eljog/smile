import { ITodoApis, TodoItem } from "@todo-app/common";

class TodoApiServer implements ITodoApis {
    private todos: TodoItem[] = []
    private idCounter = 1
    create(title: string): Promise<TodoItem> {
        const id = this.idCounter++
        const item = {id, title, completed: false}
        this.todos.push(item)
        return Promise.resolve(item)
    }
    fetchAll(): Promise<TodoItem[]> {
        return Promise.resolve(this.todos)
    }

}

const server = new TodoApiServer()

export const getServer = (): ITodoApis => server
