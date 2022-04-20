import { CardTitle } from "@ht/components";
import EarningMoneyCard from "../../../components/earning-money-card";
import IntroductionCard from "../../../components/introduction-card";

// Demo data
import earningsData from "@ht/shared/data/dashboard-four/earnings";
import introData from "@ht/shared/data/dashboard-four/introduction";

const Row01 = () => {
    return (
        <div className="pt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <div>
                <h3 className="mb-3.8">Welcome back, Katherine!</h3>
                <p className="mb-10">
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                    rhoncus.
                </p>
                <CardTitle className="mb-3.8">Your Earning Summary</CardTitle>
                <div className="grid grid-cols-2">
                    {earningsData?.map((item) => (
                        <EarningMoneyCard
                            key={item.id}
                            title={item.title}
                            earning={item.earning}
                            earning_based={item.earning_based}
                        />
                    ))}
                </div>
            </div>
            <IntroductionCard
                title={introData.title}
                description={introData.description}
                path={introData.path}
            />
        </div>
    );
};

export default Row01;
