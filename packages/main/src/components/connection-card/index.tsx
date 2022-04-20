import { FC } from "react";
import clsx from "clsx";
import { Card } from "@ht/components";

interface IProps {
    connections: Array<{
        number: number;
        text: string;
        color: string;
    }>;
}

const ConnectionCard: FC<IProps> = ({ connections }) => {
    return (
        <Card className="connection-card p-[25px]">
            {connections?.map((con, i) => (
                <div key={con.text}>
                    <div className="flex">
                        <h2
                            className={clsx(
                                "mb-0 px-[5px] text-[40px] font-lato min-w-[105px]",
                                con.color
                            )}
                        >
                            {con.number}
                        </h2>
                        <p className="mb-0 px-[5px]">{con.text}</p>
                    </div>
                    {i !== connections.length - 1 && <hr />}
                </div>
            ))}
        </Card>
    );
};

export default ConnectionCard;
