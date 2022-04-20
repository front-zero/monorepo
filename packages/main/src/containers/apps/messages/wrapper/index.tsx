import { FC } from "react";

const Wrapper: FC = ({ children }) => {
    return (
        <div className="wrapper relative min-h-[calc(100vh_-_100px)] overflow-hidden grid lg:min-h-[calc(100vh_-_180px)] lg:grid-cols-[minmax(0,_350px)_minmax(0,_100%)] lg:gap-[27px] mt-[25px]">
            {children}
        </div>
    );
};

export default Wrapper;
