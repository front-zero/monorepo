import { Anchor } from "@ht/components";

const MenuHeader = () => {
    return (
        <div className="dropdown-menu-header flex items-center justify-between px-[0.938rem] py-3 border-b border-b-geyser">
            <h6 className="dropdown-menu-title mb-0 uppercase font-bold text-xs font-sans">
                Activity Logs
            </h6>
            <div className="dropdown-menu-links text-xs font-body">
                <Anchor path="#!">Filter List</Anchor>
                <Anchor
                    path="#!"
                    className="ml-[5px] pl-2 border-l border-l-ghost"
                >
                    Settings
                </Anchor>
            </div>
        </div>
    );
};

export default MenuHeader;
