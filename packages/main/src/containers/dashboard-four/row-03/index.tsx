import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
    Anchor,
    Nav,
    NavLink,
} from "@ht/components";
import { usePurchaseData, useTimeFilter } from "@ht/shared/hooks";
import ProductPurchasesTable from "../../../components/product-purchases-table";

// Demo data
import ProductPurchasesData from "@ht/shared/data/dashboard-four/product-purchases";

const Row03 = () => {
    const { purchaseData, getData } = usePurchaseData(ProductPurchasesData);
    const { filterHandler, activeButton } = useTimeFilter(getData);

    return (
        <Card className="mt-5 sm:mt-[30px]">
            <CardHeader className="py-5 border-b border-b-geyser sm:flex sm:justify-between sm:items-center">
                <CardTitle className="mb-[10px] sm:mb-0">
                    Product Purchases
                </CardTitle>
                <Nav layout={2}>
                    <NavLink
                        title="day"
                        active={activeButton}
                        onClick={(e) => filterHandler(e)}
                    >
                        Today
                    </NavLink>
                    <NavLink
                        title="week"
                        active={activeButton}
                        onClick={(e) => filterHandler(e)}
                    >
                        This Week
                    </NavLink>
                    <NavLink
                        title="month"
                        active={activeButton}
                        onClick={(e) => filterHandler(e)}
                    >
                        This Month
                    </NavLink>
                </Nav>
            </CardHeader>
            <ProductPurchasesTable data={purchaseData} />
            <CardFooter className="text-xs py-3.8 bg-transparent">
                <Anchor path="/invoice">
                    <i className="fa fa-angle-down mr-2" />
                    View All Products
                </Anchor>
            </CardFooter>
        </Card>
    );
};

export default Row03;
