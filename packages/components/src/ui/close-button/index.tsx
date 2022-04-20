import clsx from "clsx";

interface IProps {
    className?: string;
    onClick: () => void;
}

const CloseButton = ({ className, onClick }: IProps) => {
    return (
        <button className={clsx("text-xl", className)} onClick={onClick}>
            <i className="icon ion-close" />
        </button>
    );
};

export default CloseButton;
