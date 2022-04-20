import { ITransaction } from "../../types";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";

const transactions: ITransaction[] = [
    {
        id: 1,
        user: {
            name: "Mark K. Peters",
            path: "#!",
            transId: 12345,
            image: { src: img1, alt: "Mark K. Peters" },
        },
        type: "success",
        date: "Just Now",
    },
    {
        id: 2,
        user: {
            name: "Karmen F. Brown",
            path: "#!",
            transId: 14345,
            image: { src: img2, alt: "Karmen F. Brown" },
        },
        type: "hold",
        date: "Apr 21, 2017 8:34am",
    },
    {
        id: 3,
        user: {
            name: "Gorgonio Magalpok",
            path: "#!",
            transId: 10345,
            image: { src: img3, alt: "Gorgonio Magalpok" },
        },
        type: "failed",
        date: "Apr 10, 2017 4:40pm",
    },
    {
        id: 4,
        user: {
            name: "Ariel T. Hall",
            path: "#!",
            transId: 123475,
            image: { src: img4, alt: "Ariel T. Hall" },
        },
        type: "success",
        date: "Apr 02, 2017 6:45pm",
    },
    {
        id: 5,
        user: {
            name: "John L. Goulette",
            path: "#!",
            transId: 12344,
            image: { src: img5, alt: "John L. Goulette" },
        },
        type: "hold",
        date: "Mar 30, 2017 10:30am",
    },
];

export default transactions;
