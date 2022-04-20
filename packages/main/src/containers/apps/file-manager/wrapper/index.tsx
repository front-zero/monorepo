import {
    Children,
    FC,
    ReactChild,
    ReactText,
    useState,
    FunctionComponent,
} from "react";
import { HamburgerButton } from "@ht/components";

type IChild = Exclude<ReactChild, ReactText>;

const Wrapper: FC = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "Sidebar" || name === "Main") {
                return (
                    <child.type {...child.props} sidebarOpen={sidebarOpen} />
                );
            }
        }
        return null;
    });
    return (
        <>
            <HamburgerButton
                label="Click here to open sidebar"
                onClick={() => setSidebarOpen((prev) => !prev)}
                className="xl:hidden"
            />
            <div className="grid xl:grid-cols-[minmax(240px,max-content)] gap-5 overflow-hidden">
                {RenderChild}
            </div>
        </>
    );
};

export default Wrapper;
