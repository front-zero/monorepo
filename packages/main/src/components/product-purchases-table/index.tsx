import { FC } from "react";
import clsx from "clsx";
import { BasicTable, Anchor, Button } from "@ht/components";
import { IProductPurchase } from "@ht/shared/types";

// Demo Image
import demoImg from "@ht/shared/images/img28.jpg";

interface IProps {
    data?: IProductPurchase[];
}

const ProductPurchasesTable: FC<IProps> = ({ data }) => {
    return (
        <BasicTable className="text-sm min-w-max">
            <thead>
                <tr className="text-[10px]">
                    <th className="bg-gray-200 w-[10%] tracking-wider">Item</th>
                    <th className="bg-gray-200 tracking-wider text-left">
                        Item Details
                    </th>
                    <th className="bg-gray-200 tracking-wider text-right">
                        Sold
                    </th>
                    <th className="bg-gray-200 tracking-wider">Location</th>
                    <th className="bg-gray-200 tracking-wider text-left">
                        Gain
                    </th>
                    <th className="bg-gray-200 tracking-wider text-right">
                        Added
                    </th>
                    <th className="bg-gray-200 tracking-wider text-right">
                        Updated
                    </th>
                    <th className="bg-gray-200 tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <img
                                src={demoImg}
                                className="w-[55px] mx-auto"
                                alt="Imageddd"
                                width={55}
                                height={37}
                            />
                        </td>
                        <td>
                            <Anchor
                                path={item.path}
                                className="text-heading font-medium block"
                            >
                                {item.title}
                            </Anchor>
                            <span className="text-sm block">
                                {item.availability === 0 ? (
                                    <>
                                        <span className="w-[8px] h-[8px] inline-block bg-danger mr-[5px] rounded-full" />
                                        Out of stock
                                    </>
                                ) : (
                                    <>
                                        <span
                                            className={clsx(
                                                "w-[8px] h-[8px] inline-block  mr-[5px] rounded-full",
                                                item.availability < 50 &&
                                                    "bg-warning",
                                                item.availability >= 50 &&
                                                    "bg-success"
                                            )}
                                        />
                                        {item.availability} remaining
                                    </>
                                )}
                            </span>
                        </td>
                        <td className="text-right">{item.sold}</td>
                        <td className="text-center">
                            <span
                                className={clsx(
                                    "fi text-[16px]",
                                    item.location
                                )}
                            />
                        </td>
                        <td>
                            <span
                                className={clsx(
                                    item.gain.status === "up" && "text-success",
                                    item.gain.status === "down" && "text-danger"
                                )}
                            >
                                <i
                                    className={`icon ion-android-arrow-${item.gain.status} mr-[5px]`}
                                />
                                {item.gain.percentage}
                            </span>{" "}
                            from last week
                        </td>
                        <td className="text-right">{item.date}</td>
                        <td className="text-right">{item.updated}</td>
                        <td className="text-center">
                            <Button
                                variant="texted"
                                className="text-gray-600 text-2xl"
                            >
                                <i className="icon ion-android-more-horizontal" />
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </BasicTable>
    );
};

export default ProductPurchasesTable;
