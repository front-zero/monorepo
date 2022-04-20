import ProfileCard from "../../../components/profile-card/layout-02";
import ActivityNav from "../../../components/activity-nav";
import ActivityCard from "../../../components/activity-card";
import ExperienceCard from "../../../components/experience-card";
import RecommendationCard from "../../../components/recommendation-card";
import { useProfile } from "../../../context/profile-context";

// Demo Data

import activityData from "@ht/shared/data/profile/activity";
import recommendationData from "@ht/shared/data/profile/recommendation";

const MainContent = () => {
    const { about, experiences } = useProfile();

    return (
        <>
            <ProfileCard
                name={about.name}
                designation={about.designation}
                company={about.company}
                location={about.location}
                bio={about.bio}
                path={about.path}
                image={about.image}
            />
            <ActivityNav />
            <ActivityCard
                title={activityData.title}
                user={activityData.user}
                activity={activityData.activity}
                author={activityData.author}
            />
            <ExperienceCard title="Work Experience" items={experiences} />
            <RecommendationCard
                className="mt-5"
                title={recommendationData.title}
                user={recommendationData.user}
                description={recommendationData.description}
            />
        </>
    );
};

export default MainContent;
