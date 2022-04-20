import BitcoinEarningsCard from "../../../components/bitcoin-earnings-card";
import EthereumWallet from "../../../components/ethereum-wallet-card";
import Visitors from "../../../components/visitors-card/layout-01";

// Demo data
import bitoinData from "@ht/shared/data/dashboard-one/bitcoin-earnings";
import ethWalletData from "@ht/shared/data/dashboard-one/ethereum-wallet";
import visitorsData from "@ht/shared/data/dashboard-one/visitors";

const Row01 = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-5">
            <BitcoinEarningsCard
                title={bitoinData.title}
                description={bitoinData.description}
                path={bitoinData.path}
                amount={bitoinData.amount}
                suffix={bitoinData.suffix}
                chartData={bitoinData.chartData}
            />
            <div className="right-col grid md:grid-row-2 gap-5">
                <EthereumWallet
                    title={ethWalletData.title}
                    description={ethWalletData.description}
                    path={ethWalletData.path}
                    amount={ethWalletData.amount}
                    suffix={ethWalletData.suffix}
                    chartData={ethWalletData.chartData}
                />
                <div className="right-col-bottom grid sm:grid-cols-2 gap-5">
                    {visitorsData?.map((item) => (
                        <Visitors
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            amount={item.amount}
                            chartData={item.chartData}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Row01;
