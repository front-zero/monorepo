import { FC } from "react";
import { Card, Anchor } from "@ht/components";

interface IProps {
    productId: string;
    title: string;
    path: string;
    author: {
        title: string;
        path: string;
    };
    totalSales: number;
    earnings: string;
}

const ProductCard: FC<IProps> = ({
    productId,
    title,
    path,
    author,
    totalSales,
    earnings,
}) => {
    return (
        <Card className="card-popular-product p-5">
            <p className="text-xs mb-[3px]">{productId}</p>
            <h5 className="text-[16px] mb-2">
                <Anchor path={path} className="text-heading">
                    {title}
                </Anchor>
            </h5>
            <p className="text-xs">
                By: <Anchor path={author.path}>{author.title}</Anchor>
            </p>
            <div className="grid grid-cols-12">
                <div className="col-span-5">
                    <h1 className="font-lato font-bold mb-0 -tracking-wider">
                        {totalSales}
                    </h1>
                    <p className="mb-0">Total Sales</p>
                </div>
                <div className="col-span-7 relative pl-3.8 before:absolute before:content-[''] before:top-0 before:bottom-0 before:-left-px before:border-l before:border-l-ghost">
                    <h1 className="font-lato font-bold mb-0 -tracking-wider">
                        {earnings}
                    </h1>
                    <p className="mb-0">Earnings</p>
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;
