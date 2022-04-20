import {
    Children,
    FC,
    ReactChild,
    ReactText,
    useState,
    useCallback,
    FunctionComponent,
} from "react";
import clsx from "clsx";
import { useClickOutside } from "@ht/shared/hooks";

type IChild = Exclude<ReactChild, ReactText>;

interface DropdownProps {
    /**
     * Required. Default is `down`.
     */
    direction: "up" | "down" | "left" | "right";
    /**
     * Optional. Default is `false`.
     */
    shape?: boolean;
    /**
     * Optional. Default is `true`.
     */
    showIcon?: boolean;
    /**
     * Optional. Pass Extra Class Names
     */
    className?: string;
}

const Dropdown: FC<DropdownProps> = ({
    children,
    direction,
    shape,
    showIcon,
    className,
    ...restProps
}) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((prev) => !prev);
    };
    const onClose = useCallback(() => {
        setShow(false);
    }, []);

    const containerRef = useClickOutside<HTMLDivElement>(onClose);

    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "DropdownToggle") {
                return (
                    <child.type
                        {...child.props}
                        direction={direction}
                        showIcon={showIcon}
                        show={show}
                        onClick={handleClick}
                    />
                );
            }
            if (name === "DropdownMenu") {
                return (
                    <child.type
                        {...child.props}
                        direction={direction}
                        show={show}
                        shape={shape}
                    />
                );
            }
        }
        return null;
    });

    return (
        <div
            {...restProps}
            ref={containerRef}
            className={clsx(className, "dropdown relative")}
        >
            {RenderChild}
        </div>
    );
};

Dropdown.defaultProps = {
    direction: "down",
    showIcon: true,
};

export default Dropdown;
