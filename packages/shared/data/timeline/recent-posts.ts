import img1 from "../../images/img20.jpg";
import { IPost } from "../../types";

const recentPosts: IPost[] = [
    {
        id: 1,
        title: "Maybe Just Don't Drink Coffee",
        path: "/profile",
        postedAt: "Today, 3:30pm",
        author: {
            name: "Elisse Joson",
            path: "/profile",
            location: "San Francisco, CA",
        },
    },
    {
        id: 2,
        title: "Your Finances Don't Have to Be Perfect to Work",
        path: "/profile",
        postedAt: "Yesterday, 10:00am",
        author: {
            name: "Elisse Joson",
            path: "/profile",
            location: "San Francisco, CA",
        },
        excerpt:
            "In this lesson, you create a layout in XML that includes a text field and a button...",
    },
    {
        id: 3,
        title: "The Condensed Guide to Running Meetings",
        path: "/profile",
        postedAt: "Dec 22, 2017 10:00am",
        author: {
            name: "Elisse Joson",
            path: "/profile",
            location: "San Francisco, CA",
        },
        excerpt:
            "We love to hate meetings. And with good reason — they clog up our days, making it hard to get work done in the gaps...",
        image: { src: img1 },
    },
    {
        id: 4,
        title: "What Romance Really Means After 10 Years of Marriage",
        path: "/profile",
        postedAt: "Dec 22, 2017 10:00am",
        author: {
            name: "Elisse Joson",
            path: "/profile",
            location: "San Francisco, CA",
        },
        excerpt:
            "In this lesson, you create a layout in XML that includes a text field and a button...",
    },
    {
        id: 5,
        title: "Buying organic veggies at the supermarket is a waste of money",
        path: "/profile",
        postedAt: "Dec 20, 2017 4:20am",
        author: {
            name: "Elisse Joson",
            path: "/profile",
            location: "San Francisco, CA",
        },
        excerpt:
            "In this lesson, you create a layout in XML that includes a text field and a button...",
    },
];
export default recentPosts;
