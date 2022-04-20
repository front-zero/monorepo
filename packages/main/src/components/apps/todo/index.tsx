import { FC, useState } from "react";
import TodoItem from "./todo-item";

interface ITodo {
    id: number | string;
    label: string;
    isCompleted?: boolean;
}

interface IProps {
    data: ITodo[];
}

const Todo: FC<IProps> = ({ data }) => {
    const [todos, setTodos] = useState<ITodo[]>(data);
    const onChangeHandler = (id: number | string) => {
        const todosCopy = todos;
        const filterdTodos = todosCopy.map((todo) => {
            return {
                ...todo,
                isCompleted:
                    todo.id === id ? !todo.isCompleted : !!todo.isCompleted,
            };
        });
        setTodos(filterdTodos);
    };
    return (
        <div className="todo-list mt-5">
            {todos?.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    label={todo.label}
                    isCompleted={!!todo.isCompleted}
                    onChange={onChangeHandler}
                    className={"mt-[10px] first:mt-0"}
                />
            ))}
        </div>
    );
};

export default Todo;
