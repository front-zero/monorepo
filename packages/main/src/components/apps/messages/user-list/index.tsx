import { FC } from "react";
import User from "../user";
interface IProps {
    users: Array<{
        id: string | number;
        name: string;
        avatar: {
            src: string;
        };
        status: "online" | "offline";
    }>;
    setBodyOpen: () => void;
}

const UserList: FC<IProps> = ({ users, setBodyOpen }) => {
    return (
        <div className="user-list border-r border-r-ghost">
            {users.map((user) => (
                <User
                    key={user.id}
                    path={`/apps/messages/${user.id}`}
                    id={user.id}
                    name={user.name}
                    image={user.avatar}
                    status={user.status}
                    active
                    onClick={setBodyOpen}
                />
            ))}
        </div>
    );
};

export default UserList;
