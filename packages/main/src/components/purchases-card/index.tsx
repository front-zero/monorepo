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
import { IPurchase } from "@ht/shared/types";

interface IProps {
    className?: string;
    title: string;
    purchases: IPurchase[];
    path?: string;
}

const PurchasesCard: FC<IProps> = ({ className, title, purchases, path }) => {
    return (
        <Card className={clsx("product-purchases overflow-hidden", className)}>
            <CardHeader className="border-b border-b-geyser px-5 py-5">
                <CardTitle className="mb-0">{title}</CardTitle>
            </CardHeader>
            <BasicTable className="text-sm min-w-[500px]">
                <thead>
                    <tr>
                        <th className="bg-gray-200">&nbsp;</th>
                        <th className="bg-gray-200 tracking-wider text-left">
                            Item Details
                        </th>
                        <th className="bg-gray-200 tracking-wider text-right">
                            Sold
                        </th>
                        <th className="bg-gray-200 tracking-wider text-left">
                            Gain
                        </th>
                        <th className="bg-gray-200 tracking-wider text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase) => (
                        <tr key={purchase.id}>
                            <td>
                                {purchase?.product?.image?.src && (
                                    <img
                                        src={purchase.product.image.src}
                                        className="w-[3.438rem]"
                                        alt={
                                            purchase.product.image?.alt ||
                                            "purchase"
                                        }
                                        width={55}
                                        height={37}
                                    />
                                )}
                            </td>
                            <td>
                                {purchase.product && (
                                    <>
                                        <Anchor
                                            path={purchase.product.path}
                                            className="text-heading text-base font-medium block"
                                        >
                                            {purchase.product.title}
                                        </Anchor>
                                        <span className="text-[0.688rem] block">
                                            {purchase.product.stock >= 20 && (
                                                <>
                                                    <span
                                                        className={clsx(
                                                            "w-2 h-2 inline-block bg-success mr-[0.313rem] rounded"
                                                        )}
                                                    />{" "}
                                                    In Stock
                                                </>
                                            )}
                                            {purchase.product.stock < 20 &&
                                                purchase.product.stock > 0 && (
                                                    <>
                                                        <span
                                                            className={clsx(
                                                                "w-2 h-2 inline-block bg-warning mr-[0.313rem] rounded"
                                                            )}
                                                        />{" "}
                                                        {purchase.product.stock}{" "}
                                                        remaining
                                                    </>
                                                )}
                                            {purchase.product.stock === 0 && (
                                                <>
                                                    <span
                                                        className={clsx(
                                                            "w-2 h-2 inline-block bg-danger mr-[0.313rem] rounded"
                                                        )}
                                                    />{" "}
                                                    Out of stock
                                                </>
                                            )}
                                        </span>
                                    </>
                                )}
                            </td>
                            <td className="text-right">
                                {new Intl.NumberFormat().format(purchase.sold)}
                            </td>
                            <td>
                                <span
                                    className={clsx(
                                        purchase.growth.status === "up" &&
                                            "text-success",
                                        purchase.growth.status === "down" &&
                                            "text-danger"
                                    )}
                                >
                                    <i className="icon ion-android-arrow-up mr-[0.313rem]"></i>
                                    {purchase.growth.rate}%
                                </span>{" "}
                                from last week
                            </td>
                            <td className="text-center">
                                <button className="text-pale text-2xl">
                                    <i className="icon ion-android-more-horizontal"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </BasicTable>
            {path && (
                <CardFooter className="bg-white text-xs py-3.8">
                    <Anchor path={path}>
                        <i className="fa fa-angle-down mr-[0.313rem]"></i>View
                        All Products
                    </Anchor>
                </CardFooter>
            )}
        </Card>
    );
};

export default PurchasesCard;
