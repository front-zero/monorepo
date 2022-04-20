import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";
import img9 from "../../images/img9.jpg";
import img10 from "../../images/img10.jpg";
import img11 from "../../images/img11.jpg";
import { IFriend } from "../../types";

const friends: IFriend[] = [
    {
        id: 1,
        name: "John Snow",
        avatar: {
            src: img1,
        },
        status: "online",
    },
    {
        id: 2,
        name: "John Wick",
        avatar: {
            src: img2,
        },
        status: "online",
    },
    {
        id: 3,
        name: "Uthred Ragnarson",
        avatar: {
            src: img3,
        },
        status: "offline",
    },
    {
        id: 4,
        name: "Walter White",
        avatar: {
            src: img4,
        },
        status: "online",
    },
    {
        id: 5,
        name: "Jesse Pinkman",
        avatar: {
            src: img5,
        },
        status: "offline",
    },
    {
        id: 6,
        name: "Saul Goodman",
        avatar: {
            src: img6,
        },
        status: "online",
    },
    {
        id: 7,
        name: "Micheal Schofield",
        avatar: {
            src: img7,
        },
        status: "offline",
    },
    {
        id: 8,
        name: "Jonas kahnwald",
        avatar: {
            src: img8,
        },
        status: "online",
    },
    {
        id: 9,
        name: "Ragnar Lodbrok",
        avatar: {
            src: img9,
        },
        status: "offline",
    },
    {
        id: 10,
        name: "Bjorn Ironside",
        avatar: {
            src: img10,
        },
        status: "online",
    },
    {
        id: 11,
        name: "Barry Allen",
        avatar: {
            src: img11,
        },
        status: "offline",
    },
];

export default friends;
