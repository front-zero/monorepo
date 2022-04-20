import Summary from "../../../components/summary";

// intro data
import introData from "@ht/shared/data/dashboard-five/intro";

const Row01 = () => {
    return (
        <div className="md:flex md:justify-between md:items-center pt-[30px] mb-5">
            <div>
                <h4 className="mb-[5px]">{introData.title}</h4>
                <p className="mb-0">{introData.subtitle}</p>
            </div>
            <div className="md:flex md:items-center md:mt-0 mt-[30px]">
                {introData.summeries.map((item) => (
                    <Summary
                        key={item.id}
                        amount={item.amount}
                        desc={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row01;
