import { FC, useState } from "react";
import { Card, CardBody, CardTitle, Media, MediaBody } from "@ht/components";
import ExperianceAddModal from "../modals/experiance-add-modal";
import { useProfile } from "../../context/profile-context";

interface IExperience {
    id: number | string;
    designation: string;
    company: string;
    time: string;
}

interface IProps {
    title: string;
    items: IExperience[];
}

const ExperienceCard: FC<IProps> = ({ title, items }) => {
    const { experienceToggle, hasMoreExperiences } = useProfile();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Card className="experience-card mt-5">
                <CardBody className="p-[25px]">
                    <CardTitle>{title}</CardTitle>
                    {items.map((item) => (
                        <Media
                            key={item.id}
                            className="flex-col items-start md:flex-row md:items-center mt-[25px]"
                        >
                            <div className="flex justify-center items-center w-20 h-20 bg-pale text-white text-5xl">
                                <i className="icon ion-briefcase" />
                            </div>
                            <MediaBody className="mt-3.8 md:mt-0 md:ml-3.8">
                                <h6 className="text-[15px] mb-[5px]">
                                    {item.designation}
                                </h6>
                                <p className="mb-[5px] text-trout">
                                    {item.company}
                                </p>
                                <p className="mb-0 text-xs">{item.time}</p>
                            </MediaBody>
                        </Media>
                    ))}
                </CardBody>
                <div className="border-t border-t-geyser bg-black/5 flex justify-between">
                    <button
                        type="button"
                        className="inline-block first:border-r border-geyser py-3 px-[25px] text-primary"
                        onClick={experienceToggle && experienceToggle}
                    >
                        {hasMoreExperiences ? (
                            <>
                                Show more{" "}
                                <span className="hidden sm:inline">
                                    experiences (4)
                                </span>{" "}
                                <i className="fa fa-angle-down" />
                            </>
                        ) : (
                            <>
                                Show less{" "}
                                <span className="hidden sm:inline">
                                    experiences
                                </span>{" "}
                                <i className="fa fa-angle-up" />
                            </>
                        )}
                    </button>
                    <button
                        type="button"
                        className="inline-block last:border-l border-geyser py-3 px-[25px] text-primary"
                        onClick={() => setShowModal(true)}
                    >
                        Add new
                    </button>
                </div>
            </Card>
            <ExperianceAddModal
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
};

export default ExperienceCard;
