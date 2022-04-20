import { FC } from "react";
import clsx from "clsx";
import { Card, CardTitle } from "@ht/components";
import People from "./people";

interface IProps {
    title: string;
    className?: string;
    people: Array<{
        id: string | number;
        name: string;
        designation: string;
        path: string;
        image: {
            src: string;
            alt?: string;
        };
        isInFriendList?: boolean;
    }>;
}

const PeopleListCard: FC<IProps> = ({ title, className, people }) => {
    return (
        <Card className={clsx("people-list-card p-[25px]", className)}>
            <CardTitle>{title}</CardTitle>
            <div className="mt-[25px]">
                {people.map((person) => (
                    <People
                        key={person.id}
                        name={person.name}
                        designation={person.designation}
                        path={person.path}
                        image={person.image}
                        isInFriendList={person.isInFriendList}
                    />
                ))}
            </div>
        </Card>
    );
};

export default PeopleListCard;
