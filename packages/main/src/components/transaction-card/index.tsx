import { FC } from "react";
import clsx from "clsx";
import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
    BasicTable,
    Anchor,
} from "@ht/components";

interface IProps {
    className?: string;
    title: string;
    transactions: Array<{
        id: string | number;
        user: {
            name: string;
            path: string;
            transId: number;
            image: { src: string; alt?: string };
        };
        type: "success" | "hold" | "failed";
        date: string;
    }>;
    path?: string;
}

const UserTransactionHistory: FC<IProps> = ({
    className,
    title,
    transactions,
    path,
}) => {
    return (
        <Card className={clsx("transaction-card overflow-hidden", className)}>
            <CardHeader className="border-b border-b-geyser px-5 py-5">
                <CardTitle className="mb-0">{title}</CardTitle>
            </CardHeader>
            <BasicTable className="text-sm min-w-[500px]">
                <thead>
                    <tr>
                        <th className="bg-gray-200">&nbsp;</th>
                        <th className="bg-gray-200 tracking-wider text-left">
                            User
                        </th>
                        <th className="bg-gray-200 tracking-wider text-left">
                            Type
                        </th>
                        <th className="bg-gray-200 tracking-wider text-left">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((trans) => (
                        <tr key={trans.id}>
                            <td>
                                {trans.user?.image?.src && (
                                    <img
                                        src={trans.user.image.src}
                                        className="w-9 rounded-full"
                                        alt={
                                            trans.user.image?.alt ||
                                            "transaction"
                                        }
                                        width={36}
                                        height={36}
                                    />
                                )}
                            </td>
                            <td>
                                {trans?.user && (
                                    <>
                                        <Anchor
                                            path={trans.user.path}
                                            className="text-heading text-base font-medium block"
                                        >
                                            {trans.user.name}
                                        </Anchor>
                                        <span className="text-[0.688rem] block">
                                            TRANSID: {trans.user.transId}
                                        </span>
                                    </>
                                )}
                            </td>
                            <td className="align-baseline">
                                <span
                                    className={clsx(
                                        "w-2 h-2 inline-block mr-[0.313rem] rounded",
                                        trans.type === "success" &&
                                            "bg-success",
                                        trans.type === "hold" && "bg-warning",
                                        trans.type === "failed" && "bg-danger"
                                    )}
                                />
                                {trans.type === "success" && (
                                    <>Purchased success</>
                                )}
                                {trans.type === "hold" && <>Payment on hold</>}
                                {trans.type === "failed" && <>Payment Failed</>}
                            </td>
                            <td className="align-baseline">{trans.date}</td>
                        </tr>
                    ))}
                </tbody>
            </BasicTable>
            {path && (
                <CardFooter className="bg-white text-xs py-3.8">
                    <Anchor path={path}>
                        <i className="fa fa-angle-down mr-[0.313rem]"></i>View
                        All Transaction History
                    </Anchor>
                </CardFooter>
            )}
        </Card>
    );
};

export default UserTransactionHistory;
