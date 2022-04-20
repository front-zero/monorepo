import { FC } from "react";
import { Progress, Nav, NavLink } from "@ht/components";
import { useVisitorsData, useTimeFilter } from "@ht/shared/hooks";
import { IVisitor } from "@ht/shared/types";

interface IProps {
    data: IVisitor[];
}

const Visitors: FC<IProps> = ({ data: visitors }) => {
    const { total, percantage, getData } = useVisitorsData(visitors);
    const { filterHandler, activeButton } = useTimeFilter(getData);

    return (
        <div className="visitors p-[25px]">
            <Nav layout={2} className="mb-10">
                <NavLink
                    title="day"
                    active={activeButton}
                    onClick={filterHandler}
                >
                    Today
                </NavLink>
                <NavLink
                    title="week"
                    active={activeButton}
                    onClick={filterHandler}
                >
                    This Week
                </NavLink>
                <NavLink
                    title="month"
                    active={activeButton}
                    onClick={filterHandler}
                >
                    This Month
                </NavLink>
            </Nav>
            <h1 className="text-8xl font-light font-lato mb-[5px] leading-none">
                {total}
            </h1>
            <p className="uppercase tracking-wider text-xs">
                Online Visitors on Site
            </p>
            <hr className="mt-[30px] mb-10" />
            <h6 className="my-[25px] uppercase text-xs tracking-wider font-bold">
                Visitors Operating System
            </h6>
            {percantage &&
                Object.entries(percantage).map(([operator, data]) => (
                    <div key={operator}>
                        <p className="mb-[5px]">
                            {operator} ({data.value}%)
                        </p>
                        <Progress
                            now={data.value}
                            color={data.status}
                            size="xs"
                            className="mb-3.8"
                        />
                    </div>
                ))}
        </div>
    );
};

export default Visitors;
