import { FC, useState } from "react";
import NavLink from "./nav-link";
import ActivityModal from "../modals/activity-modal";

const ActivityNav: FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <ul className="nav nav-activity-profile mt-5">
                <li className="flex-full -mt-px md:mt-0 first:mt-0 md:flex-1 md:-ml-px md:first:ml-0">
                    <NavLink
                        icon="icon ion-ios-redo"
                        iconColor="text-purple"
                        onClick={() => setShowModal(true)}
                    >
                        Share an update
                    </NavLink>
                </li>
                <li className="flex-full -mt-px md:mt-0 first:mt-0 md:flex-1 md:-ml-px md:first:ml-0">
                    <NavLink
                        icon="icon ion-image"
                        iconColor="text-primary"
                        onClick={() => setShowModal(true)}
                    >
                        Publish photo
                    </NavLink>
                </li>
                <li className="flex-full -mt-px md:mt-0 first:mt-0 md:flex-1 md:-ml-px md:first:ml-0">
                    <NavLink
                        icon="icon ion-document-text"
                        iconColor="text-success"
                        onClick={() => setShowModal(true)}
                    >
                        Add an article
                    </NavLink>
                </li>
            </ul>
            <ActivityModal
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
};

export default ActivityNav;
