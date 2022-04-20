import PurchasesCard from "../../../components/purchases-card";
import TransactionCard from "../../../components/transaction-card";

// Demo Data
import purchases from "@ht/shared/data/dashboard-one/purchases";
import transactions from "@ht/shared/data/dashboard-one/transactions";

const Row03 = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-5 ">
            <PurchasesCard
                className="mt-5"
                title="Product Purchases"
                path="/invoice"
                purchases={purchases}
            />
            <TransactionCard
                className="mt-5"
                title="User Transaction History"
                path="/invoice"
                transactions={transactions}
            />
        </div>
    );
};

export default Row03;
