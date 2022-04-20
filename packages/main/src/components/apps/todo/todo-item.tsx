import { FC } from "react";
import clsx from "clsx";
import { Checkbox } from "@ht/components";

interface ITodo {
    id: number | string;
    label: string;
    isCompleted: boolean;
}

interface IProps extends ITodo {
    onChange: (id: string | number) => void;
    className?: string;
}

const TodoItem: FC<IProps> = ({
    id,
    label,
    isCompleted,
    onChange,
    className,
}) => {
    return (
        <div
            className={clsx(
                "todo-item",
                className,
                isCompleted ? "line-through" : ""
            )}
            key={id}
        >
            <Checkbox
                id={`checkbox-${id}`}
                name={`checkbox-${id}`}
                label={label}
                checked={isCompleted ? true : false}
                onChange={() => onChange(id)}
            />
        </div>
    );
};

export default TodoItem;
