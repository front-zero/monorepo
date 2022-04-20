import { FC } from "react";
import clsx from "clsx";
import { Card, CardTitle } from "@ht/components";
import Todo from "../apps/todo";

interface IProps {
    className?: string;
    title: string;
    data: Array<{
        id: string | number;
        label: string;
        isCompleted?: boolean;
    }>;
}

const TodoCard: FC<IProps> = ({ className, title, data }) => {
    return (
        <Card className={clsx("card-todo p-[25px]", className)}>
            <CardTitle>{title}</CardTitle>
            <Todo data={data} />
        </Card>
    );
};

export default TodoCard;
