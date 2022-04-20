import ProfileImg from "../../images/img1.jpg";
import BuildingImg from "../../images/img16.jpg";

const activity = {
    title: "Latest Activity",
    user: {
        name: "Katherine",
        path: "/profile",
        image: { src: ProfileImg },
        designation: "Executive Director",
        lastActivity: "2 hours ago",
    },
    activity: {
        image: { src: BuildingImg },
        title: "Sailing Basics: 10 Nautical & Sailing Terms To Know",
        path: "/profile",
        excerpt:
            "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    },
    author: {
        name: "Charmaine Montuya",
        path: "/profile",
        designation: "Writer & Entrepreneur",
    },
};

export default activity;
