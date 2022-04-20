import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "@ht/components";
import clsx from "clsx";
import userImg from "@ht/shared/images/img1.jpg";

const UserDropdown = () => {
    const iconClass = "text-xl mr-2 text-primary w-[1.125rem] text-center";

    return (
        <Dropdown direction="down" className="ml-[0.938rem]" shape>
            <DropdownToggle
                variant="texted"
                color="light"
                iconClass="hidden md:inline-block"
                className="inline-flex items-center"
            >
                <img
                    src={userImg}
                    alt="user"
                    className="w-[2.813rem] h-[2.813rem] rounded-full p-[3px] border border-primary"
                    width={37}
                    height={37}
                />
                <span className="pl-2.5 hidden md:inline-block">Katherine</span>
            </DropdownToggle>
            <DropdownMenu
                className={clsx(
                    "p-[0.625rem] w-[12.5rem] mt-3 -mr-[0.938rem] border-t-0 maxSm:right-4 sm:right-0 left-auto rounded-none"
                )}
            >
                <DropdownItem path="/profile">
                    <i className={clsx("icon ion-person", iconClass)} />
                    View Profile
                </DropdownItem>
                <DropdownItem path="/profile">
                    <i className={clsx("icon ion-compose", iconClass)} /> Edit
                    Profile
                </DropdownItem>
                <DropdownItem path="/profile">
                    <i className={clsx("icon ion-ios-bolt", iconClass)} />
                    Activity Log
                </DropdownItem>
                <DropdownItem path="/profile">
                    <i className={clsx("icon ion-ios-gear", iconClass)} />
                    Account Settings
                </DropdownItem>
                <DropdownItem path="/profile">
                    <i className={clsx("icon ion-forward", iconClass)} /> Sign
                    Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserDropdown;
