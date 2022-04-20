import TransactionCard from "../../../components/transaction-card";
import PurchasesCard from "../../../components/purchases-card";

// Demo Data
import purchases from "@ht/shared/data/dashboard-one/purchases";
import transactions from "@ht/shared/data/dashboard-one/transactions";

const Row03 = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-[10px] mt-2.5">
            <TransactionCard
                title="User Transaction History"
                path="/invoice"
                transactions={transactions}
            />
            <PurchasesCard
                title="Product Purchases"
                path="/invoice"
                purchases={purchases}
            />
        </div>
    );
};

export default Row03;
