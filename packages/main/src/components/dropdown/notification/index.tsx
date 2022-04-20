import { Dropdown, DropdownToggle, DropdownMenu, Anchor } from "@ht/components";
import clsx from "clsx";
import MenuHeader from "./menu-header";
import DropddownItem from "./item";

const NotificationDropdown = () => {
    return (
        <Dropdown direction="down" showIcon={false} shape>
            <DropdownToggle
                variant="texted"
                iconButton
                size="lg"
                shape="ellipse"
                customStyle="only-icon"
                className="text-2xl text-pale relative"
            >
                <i className="icon ion-ios-bell-outline" />
                <span className="w-[7px] h-[7px] bg-primary rounded-full absolute top-[6px] right-[6px]" />
            </DropdownToggle>
            <DropdownMenu
                className={clsx(
                    "p-0 w-[18.75rem] sm:w-[21.875rem] mt-[1.125rem] -mr-[0.938rem] border-t-0 maxSm:-right-24 sm:right-0 left-auto maxSm:before:right-[41%] maxSm:after:right-[41%] rounded-none"
                )}
            >
                <MenuHeader />
                <div className="dropdown-list">
                    <DropddownItem />
                    <DropddownItem />
                    <DropddownItem status="read" />
                    <DropddownItem />
                </div>
                <div className="dropdown-menu-footer text-center text-xs px-[0.938rem] py-[0.625rem]">
                    <Anchor path="/apps/messages">
                        <i className="fa fa-angle-down" /> Show All
                        Notifications
                    </Anchor>
                </div>
            </DropdownMenu>
        </Dropdown>
    );
};

export default NotificationDropdown;
