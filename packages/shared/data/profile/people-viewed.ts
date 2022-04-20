import img1 from "../../images/img2.jpg";
import img2 from "../../images/img3.jpg";
import img3 from "../../images/img4.jpg";
import img4 from "../../images/img15.jpg";
import img5 from "../../images/img14.jpg";

const peopleViewed = {
    title: "People also viewed",
    people: [
        {
            id: 1,
            name: "Adrian Monino",
            designation: "Software Engineer",
            path: "/profile",
            image: { src: img1 },
            isInFriendList: true,
        },
        {
            id: 2,
            name: "Rolando Paloso",
            designation: "Architect",
            path: "/profile",
            image: { src: img2 },
            isInFriendList: true,
        },
        {
            id: 3,
            name: "Joyce Chua",
            designation: "Sales Representative",
            path: "/profile",
            image: { src: img3 },
            isInFriendList: true,
        },
        {
            id: 4,
            name: "Annalyn Mercado",
            designation: "Product Designer",
            path: "/profile",
            image: { src: img4 },
            isInFriendList: true,
        },
        {
            id: 5,
            name: "Maricel Pasilbas",
            designation: "Product Designer",
            path: "/profile",
            image: { src: img5 },
            isInFriendList: true,
        },
    ],
};

export default peopleViewed;
