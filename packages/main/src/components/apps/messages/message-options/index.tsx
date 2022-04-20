import { FC, useState } from "react";
import { Anchor, Dropdown, DropdownToggle, DropdownMenu } from "@ht/components";
import CallModal from "../../../modals/call-modal";

interface IProps {
    name: string;
    image: { src: string };
}

const MessageOptions: FC<IProps> = ({ name, image }) => {
    const [showCallModal, setShowCallModal] = useState(false);
    return (
        <>
            <div className="flex items-center ml-auto">
                <div className="hidden sm:flex">
                    <button
                        type="button"
                        onClick={() => setShowCallModal(true)}
                        className="block text-[26px] ml-3.8 text-primary"
                    >
                        <i className="icon ion-ios-telephone-outline" />
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowCallModal(true)}
                        className="block text-[26px] ml-3.8 text-primary"
                    >
                        <i className="icon ion-ios-videocam-outline" />
                    </button>
                    <Anchor
                        path="/profile"
                        className="block text-[26px] ml-3.8"
                    >
                        <i className="icon ion-ios-gear-outline" />
                    </Anchor>
                    <Anchor
                        path="/profile"
                        className="block text-[26px] ml-3.8"
                    >
                        <i className="icon ion-ios-information-outline" />
                    </Anchor>
                </div>
                <div className="sm:hidden">
                    <Dropdown direction="down" shape showIcon={false}>
                        <DropdownToggle variant="texted">
                            <i className="icon ion-more text-[26px]" />
                        </DropdownToggle>
                        <DropdownMenu className="left-auto py-2 -right-5 w-36">
                            <button
                                type="button"
                                onClick={() => setShowCallModal(true)}
                                className="flex items-center text-body px-2 py-1"
                            >
                                <i className="icon ion-ios-telephone-outline text-xl mr-2" />{" "}
                                <span>Audio Call</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowCallModal(true)}
                                className="flex items-center text-body px-2 py-1"
                            >
                                <i className="icon ion-ios-videocam-outline text-xl mr-2" />
                                <span>Video Call</span>
                            </button>
                            <Anchor
                                path="/profile"
                                className="flex items-center text-body px-2 py-1"
                            >
                                <i className="icon ion-ios-gear-outline text-xl mr-2" />
                                <span>Settings</span>
                            </Anchor>
                            <Anchor
                                path="/profile"
                                className="flex items-center text-body px-2 py-1"
                            >
                                <i className="icon ion-ios-information-outline text-xl mr-2" />
                                <span>Information</span>
                            </Anchor>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <CallModal
                show={showCallModal}
                onClose={() => setShowCallModal(false)}
                name={name}
                image={image}
            />
        </>
    );
};

export default MessageOptions;
