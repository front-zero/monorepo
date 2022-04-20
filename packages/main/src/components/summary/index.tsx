import { FC } from "react";

interface IProps {
    amount: number;
    desc: string;
}

const Summary: FC<IProps> = ({ amount, desc }) => {
    return (
        <div className="summary-item flex items-center relative last:mt-[30px] before:absolute before:content-[''] before:-top-3.8 before:left-0 before:right-0 before:border-ghost before:border-t md:last:mt-0 md:last:ml-10 first:before:hidden md:before:-left-5 md:before:top-0 md:before:bottom-0 md:before:right-auto md:before:border-t-0 md:before:border-l">
            <h1 className="mb-0 font-lato font-bold">
                &#36;{new Intl.NumberFormat().format(amount)}
            </h1>
            <span
                className="text-[11px] ml-[10px] uppercase tracking-wider"
                dangerouslySetInnerHTML={{ __html: desc }}
            />
        </div>
    );
};

export default Summary;
