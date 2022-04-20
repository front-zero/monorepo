import img1 from "../../images/img17.jpg";
import img2 from "../../images/img19.jpg";
import img3 from "../../images/img18.jpg";

interface IPost {
    [x: string]: Array<{
        id: string | number;
        title: string;
        path: string;
        time: string;
        author: {
            name: string;
            path: string;
            location?: string;
        };
        excerpt: string;
        images?: Array<{
            src: string;
            alt?: string;
        }>;
    }>;
}

const posts: IPost = {
    today: [
        {
            id: 1,
            title: "Building a Simple User Interface",
            path: "/profile",
            time: "10:30pm",
            author: {
                name: "Elisse Joson",
                path: "/profile",
                location: "San Francisco, CA",
            },
            excerpt:
                "In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the",
        },
        {
            id: 2,
            title: "Blueberry Cheesecake Dessert Recipe",
            path: "/profile",
            time: "8:15pm",
            author: {
                name: "Katherine Lumaad",
                path: "/profile",
                location: "Oakland, CA",
            },
            excerpt:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
            images: [
                {
                    src: img1,
                },
            ],
        },
        {
            id: 3,
            title: "Your Finances Don't Have to Be Perfect to Work",
            path: "/profile",
            time: "3:30pm",
            author: {
                name: "Elisse Joson",
                path: "/profile",
                location: "San Francisco, CA",
            },
            excerpt:
                "n this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the",
        },
    ],
    yesterday: [
        {
            id: 1,
            title: "An Engineer Explains Why You Should Always Order the Larger Pizza",
            path: "/profile",
            time: "6:30pm",
            author: {
                name: "Elisse Joson",
                path: "/profile",
                location: "San Francisco, CA",
            },
            excerpt:
                "In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the",
            images: [
                {
                    src: img2,
                },
                {
                    src: img3,
                },
            ],
        },
        {
            id: 2,
            title: "The Strange Persistence of First Languages",
            path: "/profile",
            time: "1:15pm",
            author: {
                name: "Elisse Joson",
                path: "/profile",
                location: "San Francisco, CA",
            },
            excerpt:
                "In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the",
        },
    ],
    "12/20/2020": [
        {
            id: 1,
            title: "How to Win Your Next Political Argument",
            path: "/profile",
            time: "11:45pm",
            author: {
                name: "Elisse Joson",
                path: "/profile",
                location: "San Francisco, CA",
            },
            excerpt:
                "In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the",
        },
    ],
};

export default posts;
