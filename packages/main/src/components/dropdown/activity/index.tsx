import { Dropdown, DropdownToggle, DropdownMenu, Anchor } from "@ht/components";
import clsx from "clsx";
import MenuHeader from "./menu-header";
import DropddownItem from "./item";
import Label from "./label";

const ActivityDropdown = () => {
    return (
        <Dropdown direction="down" showIcon={false} shape className="mr-0.5">
            <DropdownToggle
                variant="texted"
                iconButton
                size="lg"
                shape="ellipse"
                customStyle="only-icon"
                className="text-2xl text-pale relative"
            >
                <i className="icon ion-ios-bolt-outline" />
            </DropdownToggle>
            <DropdownMenu
                className={clsx(
                    "p-0 w-[18.75rem] sm:w-[21.875rem] mt-[1.125rem] -mr-[0.938rem] border-t-0 left-auto rounded-none maxSm:-right-32 maxSm:before:right-[52%] maxSm:after:right-[52%] sm:right-0"
                )}
            >
                <MenuHeader />
                <div className="dropdown-list">
                    <Label>Today, December 13, 2017</Label>
                    <DropddownItem
                        time="10:15am"
                        desc="Purchased christmas sale cloud storage"
                        status="success"
                    />
                    <DropddownItem
                        time="9:48am"
                        desc="Login failure"
                        status="danger"
                    />
                    <DropddownItem
                        time="7:29am"
                        desc="(D:) Storage almost full"
                        status="warning"
                    />
                    <DropddownItem
                        time="3:21am"
                        desc="1 item sold <strong>Christmas bundle</strong>"
                        status="success"
                    />
                    <Label>Yesterday, December 12, 2017</Label>
                    <DropddownItem
                        time="6:57am"
                        desc="Earn new badge <strong>Elite Author</strong>"
                        status="success"
                    />
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

ActivityDropdown.displayName = "ActivityDropdown";

export default ActivityDropdown;
