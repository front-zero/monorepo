import { Button } from "@ht/components";
import SectionTitle from "../../../components/section-title";
import ProductCard from "../../../components/product-card";

// Demo data
import productData from "@ht/shared/data/dashboard-five/popular-products";

const Row04 = () => {
    return (
        <>
            <div className="report-summary-header my-[25px] md:flex md:items-center md:justify-between">
                <SectionTitle {...productData.section_title} />
                <div className="mt-5 md:mt-0 flex flex-wrap gap-1.5">
                    {productData.paths?.map(({ id, path, content }) => (
                        <Button
                            key={id}
                            path={path}
                            color="secondary"
                            shape="square"
                            className="h-10 text-xs sm:px-5"
                        >
                            {content}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {productData.products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productId={product.productId}
                        title={product.title}
                        path={product.path}
                        author={product.author}
                        totalSales={product.totalSales}
                        earnings={product.earnings}
                    />
                ))}
            </div>
        </>
    );
};

export default Row04;
