import { FC } from "react";

interface IProps {
    title: string;
    description: string;
}

const SectionTitle: FC<IProps> = ({ title, description }) => {
    return (
        <div className="section-title">
            <h4 className="mb-[3px]">{title}</h4>
            <p className="mb-0">
                <i className="icon ion-calendar mr-[3px]" /> {description}
            </p>
        </div>
    );
};

export default SectionTitle;
