import GMapCard from "../../../components/gmap-card";
import ConnectedCard from "../../../components/connected-card";
import ContactFormCard from "../../../components/contact-form-card";
import PeopleListCard from "../../../components/people-list-card";
import ProfileCard from "../../../components/profile-card/layout-01";
import RecommendationCard from "../../../components/recommendation-card";
import MostVisitedCard from "../../..//components/most-visited-card";
import SalesProgressCard from "../../../components/sales-progress-card";
import BlogCard from "../../../components/blog-card";
import ContactCard from "../../../components/contact-card/layout-01";
import ActivitiesCard from "../../../components/activities-card";
import TodoCard from "../../../components/todo-card";
import KnowledgeCard from "../../../components/knowledge-card";
import ThoughtsShareCard from "../../../components/thoughts-share-card";

// Demo Image
import ProfileImg from "@ht/shared/images/img1.jpg";
import blogimg from "@ht/shared/images/img24.jpg";
import img1 from "@ht/shared/images/img5.jpg";
import img2 from "@ht/shared/images/img6.jpg";
import img3 from "@ht/shared/images/img13.jpg";
import img4 from "@ht/shared/images/img12.jpg";
import img5 from "@ht/shared/images/img11.jpg";

const CardColumns01 = () => {
    return (
        <div className="mt-5 md:columns-2 lg:columns-3 gap-5 orphans-1 widows-1">
            <GMapCard
                title="Company Inc."
                address="4975 Cambridge Road Miami Gardens, FL 33056B"
                phone="(123) 456-7890"
                email="demo@email.com"
                rating={4.3}
                map={{ lat: 40.702247, lng: -73.996349 }}
                className="inline-block w-full mb-5"
            />
            <ConnectedCard
                className="inline-block w-full mb-5"
                title="Get Connected"
                description="Just select any of your available social account to get started."
                socials={[
                    {
                        label: "Facebook",
                        link: "https://www.facebook.com/",
                        icon: "fa fa-facebook-f",
                    },
                    {
                        label: "Twitter",
                        link: "https://www.twitter.com/",
                        icon: "fa fa-twitter",
                    },
                    {
                        label: "Google Plus",
                        link: "https://www.plus.google.com/",
                        icon: "fa fa-google-plus",
                    },
                    {
                        label: "Pinterest",
                        link: "https://www.pinterest.com/",
                        icon: "fa fa-pinterest",
                    },
                    {
                        label: "Github",
                        link: "https://www.github.com/",
                        icon: "fa fa-github",
                    },
                    {
                        label: "Instagram",
                        link: "https://www.instagram.com/",
                        icon: "fa fa-instagram",
                    },
                ]}
            />
            <ContactFormCard
                className="inline-block w-full mb-5"
                title="Quick Contact Form"
            />
            <PeopleListCard
                className="inline-block w-full mb-5"
                title="People also viewed"
                people={[
                    {
                        id: 1,
                        name: "Amber Heard",
                        designation: "Software Engineer",
                        path: "/profile",
                        image: { src: img1 },
                        isInFriendList: true,
                    },
                    {
                        id: 2,
                        name: "Richard Salomon",
                        designation: "Architect",
                        path: "/profile",
                        image: { src: img2 },
                        isInFriendList: true,
                    },
                    {
                        id: 3,
                        name: "Warren Vito",
                        designation: "Sales Representative",
                        path: "/profile",
                        image: { src: img3 },
                        isInFriendList: true,
                    },
                    {
                        id: 4,
                        name: "Charlene Plateros",
                        designation: "Sales Representative",
                        path: "/profile",
                        image: { src: img4 },
                        isInFriendList: true,
                    },
                    {
                        id: 5,
                        name: "Allan Palban",
                        designation: "Sales Representative",
                        path: "/profile",
                        image: { src: img5 },
                        isInFriendList: true,
                    },
                ]}
            />
            <ProfileCard
                className="inline-block w-full mb-5"
                name="Owen Bongcaras"
                designation="Software Engineer"
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?"
                path="/profile"
                image={{ src: ProfileImg }}
                socials={[
                    {
                        label: "Facebook",
                        link: "https://www.facebook.com/",
                        icon: "fa fa-facebook-official",
                    },
                    {
                        label: "Twitter",
                        link: "https://www.twitter.com/",
                        icon: "fa fa-twitter",
                    },
                    {
                        label: "Github",
                        link: "https://www.github.com/",
                        icon: "fa fa-github",
                    },
                ]}
            />
            <RecommendationCard
                className="inline-block w-full mb-5"
                title="Recommendations"
                user={{
                    name: "Rolando Paloso",
                    path: "#!",
                    image: {
                        src: ProfileImg,
                    },
                    designation: "Head Architect",
                }}
                description={[
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
                ]}
            />
            <PeopleListCard
                className="inline-block w-full mb-5"
                title="People you may know"
                people={[
                    {
                        id: 1,
                        name: "Amber Heard",
                        designation: "Software Engineer",
                        path: "/profile",
                        image: { src: img1 },
                    },
                    {
                        id: 2,
                        name: "Richard Salomon",
                        designation: "Architect",
                        path: "/profile",
                        image: { src: img2 },
                    },
                    {
                        id: 3,
                        name: "Warren Vito",
                        designation: "Sales Representative",
                        path: "/profile",
                        image: { src: img3 },
                    },
                    {
                        id: 4,
                        name: "Charlene Plateros",
                        designation: "Sales Representative",
                        path: "/profile",
                        image: { src: img4 },
                    },
                    {
                        id: 5,
                        name: "Allan Palban",
                        designation: "Sales Representative",
                        path: "/profile",
                        image: { src: img5 },
                    },
                ]}
            />
            <MostVisitedCard
                className="inline-block w-full mb-5"
                title="Most Visited"
                data={[
                    { label: "San Francisco", value: 9212, color: "#663090" },
                    { label: "Los Angeles", value: 8768, color: "#EC1778" },
                    { label: "San Diego", value: 8355, color: "#5B93D3" },
                ]}
            />
            <SalesProgressCard
                className="inline-block w-full mb-5"
                title="Sale Progress"
                sales={[24224, 43765, 14220, 80220]}
            />
            <BlogCard
                className="inline-block w-full mb-5"
                image={{ src: blogimg }}
                title="Your Finances Don't Have to Be Perfect to Work"
                path="#!"
                category="Finance"
                excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                likes={12}
                comments={14}
            />
            <ContactCard
                className="inline-block w-full mb-5"
                image={{ src: ProfileImg }}
                name="Maricel Villalon"
                path="#!"
                designation="Software Engineer"
                socials={[
                    {
                        label: "facebook",
                        link: "https://facebook.com",
                        icon: "fa fa-facebook",
                    },
                    {
                        label: "twitter",
                        link: "https://twitter.com",
                        icon: "fa fa-twitter",
                    },
                    {
                        label: "google",
                        link: "https://google.com",
                        icon: "fa fa-google",
                    },
                ]}
                phone="+1 012 3456 789"
                email="person1@domain.com"
                url="http://thmpxls.me"
            />
            <ActivitiesCard
                className="inline-block w-full mb-5"
                title="Recent Activities"
                lastActivity="1 hour ago"
                activities={[
                    {
                        id: 1,
                        title: "Report has been updated",
                        description:
                            "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor.",
                        time: "2 hours ago",
                        icon: "icon ion-stats-bars",
                        color: "bg-primary",
                    },
                    {
                        id: 2,
                        title: "Achievement Unlocked",
                        description:
                            "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor.",
                        time: "2 hours ago",
                        icon: "icon ion-trophy",
                        color: "bg-success",
                    },
                    {
                        id: 3,
                        title: "Added new images",
                        description:
                            "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor.",
                        time: "2 hours ago",
                        icon: "icon ion-image",
                        color: "bg-purple",
                    },
                ]}
            />
            <TodoCard
                className="inline-block w-full mb-5"
                title="Todo Item List"
                data={[
                    {
                        id: 1,
                        label: "Do something",
                        isCompleted: true,
                    },
                    {
                        id: 2,
                        label: "Do more stuff",
                        isCompleted: true,
                    },
                    {
                        id: 3,
                        label: "Do something else",
                    },
                    {
                        id: 4,
                        label: "Do something again",
                    },
                    {
                        id: 5,
                        label: "Do something more",
                    },
                ]}
            />
            <KnowledgeCard
                className="inline-block w-full mb-5"
                icon="icon ion-ios-paper-outline"
                title="Knowledge Base"
                description="Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum."
                button={{ content: "Browse Articles", path: "#!" }}
            />
            <ThoughtsShareCard
                className="inline-block w-full mb-5"
                title="Share Your Thoughts"
            />
        </div>
    );
};

export default CardColumns01;
